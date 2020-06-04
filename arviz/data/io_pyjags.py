from collections import OrderedDict
from collections.abc import Sequence
import typing as tp

import numpy as np
import xarray

from .base import requires, dict_to_dataset
from ..rcparams import rcParams

from arviz.data.inference_data import InferenceData


class PyJAGSConverter:
    """Encapsulate PyJAGS specific logic."""

    def __init__(
        self,
        *,
        posterior: tp.Optional[tp.Dict[str, np.ndarray]] = None,
        prior: tp.Optional[tp.Dict[str, np.ndarray]] = None,
        coords=None,
        dims=None,
        save_warmup: bool = None,
        warmup_iterations: int = 0
    ):
        self.posterior = posterior
        self.prior = prior
        self.coords = coords
        self.dims = dims
        self.save_warmup = \
            rcParams["data.save_warmup"] if save_warmup is None else save_warmup
        self.warmup_iterations = warmup_iterations

        try:
            import pyjags  # pylint: disable=import-error
            self.pyjags = pyjags
        except Exception as e:
            self.pyjags = None

    def _pyjags_samples_to_xarray(self,
                                  pyjags_samples: tp.Dict[str, np.ndarray]) \
            -> tp.Tuple[xarray.Dataset, xarray.Dataset]:
        data, data_warmup = get_draws(pyjags_samples=pyjags_samples,
                                      warmup_iterations=self.warmup_iterations,
                                      warmup=self.save_warmup)

        return (
            dict_to_dataset(data,
                            library=self.pyjags,
                            coords=self.coords,
                            dims=self.dims),
            dict_to_dataset(data_warmup,
                            library=self.pyjags,
                            coords=self.coords,
                            dims=self.dims),
        )

    @requires("posterior")
    def posterior_to_xarray(self) -> tp.Tuple[xarray.Dataset, xarray.Dataset]:
        """Extract posterior samples from fit."""
        return self._pyjags_samples_to_xarray(self.posterior)

    @requires("prior")
    def prior_to_xarray(self) -> tp.Tuple[xarray.Dataset, xarray.Dataset]:
        """Extract posterior samples from fit."""
        return self._pyjags_samples_to_xarray(self.prior)

    def to_inference_data(self):
        """Convert all available data to an InferenceData object."""
        # obs_const_dict = self.observed_and_constant_data_to_xarray()
        # predictions_const_data = self.predictions_constant_data_to_xarray()
        return InferenceData(
            **{
                "posterior": self.posterior_to_xarray(),
                "prior": self.prior_to_xarray(),
            }
        )


def get_draws(pyjags_samples: tp.Dict[str, np.ndarray],
              variables: tp.Optional[tp.Union[str, tp.Iterable[str]]] = None,
              warmup: bool = False,
              warmup_iterations: int = 0) \
        -> tp.Tuple[tp.Dict[str, np.ndarray], tp.Dict[str, np.ndarray]]:
    """

    Parameters
    ----------
    pyjags_samples: a didctionary mapping variable names to NumPy arrays of MCMC
                    chains of samples with shape
                    (parameter_dimension, chain_length, number_of_chains)

    variables: the variables to extract from the samples dictionary
    warmup: whether or not to return warmup draws in data_warmup
    warmup_iterations: the number of warmup iterations if any

    Returns
    -------

    """
    data_warmup = OrderedDict()

    if variables is None:
        variables = list(pyjags_samples.keys())
    elif isinstance(variables, str):
        variables = [variables]

    if not isinstance(variables, Sequence):
        raise TypeError('variables must be of type Sequence or str')

    variables = tuple(variables)

    if warmup_iterations > 0:
        warmup_samples, actual_samples =\
            _split_pyjags_samples_in_warmup_and_actual_samples(
                samples=pyjags_samples,
                warmup_iterations=0,
                variable_names=variables)

        data = \
            _convert_pyjags_samples_dictionary_to_arviz_samples_dictionary(
                samples=actual_samples,
                variable_names=variables)

        if warmup:
            data_warmup = \
                _convert_pyjags_samples_dictionary_to_arviz_samples_dictionary(
                    samples=warmup_samples,
                    variable_names=variables)
    else:
        data = \
            _convert_pyjags_samples_dictionary_to_arviz_samples_dictionary(
                samples=pyjags_samples,
                variable_names=variables)

    return data, data_warmup


def _split_pyjags_samples_in_warmup_and_actual_samples(
        samples: tp.Dict[str, np.ndarray],
        warmup_iterations: int,
        variable_names: tp.Optional[tp.Tuple[str, ...]] = None) \
        -> tp.Tuple[tp.Dict[str, np.ndarray], tp.Dict[str, np.ndarray]]:
    if variable_names is None:
        variable_names = tuple(samples.keys())

    assert isinstance(variable_names, tuple)

    warmup_samples: tp.Dict[str, np.ndarray] = {}
    actual_samples: tp.Dict[str, np.ndarray] = {}

    for variable_name, chains in samples.items():
        if variable_name in variable_names:
            warmup_samples[variable_name] = chains[:, :warmup_iterations, :]
            actual_samples[variable_name] = chains[:, warmup_iterations:, :]

    return warmup_samples, actual_samples


def _convert_pyjags_samples_dictionary_to_arviz_samples_dictionary(
        samples: tp.Dict[str, np.ndarray],
        variable_names: tp.Optional[tp.Tuple[str, ...]] = None) \
        -> tp.Dict[str, np.ndarray]:
    """
    Convert a PyJAGS dictionary to an ArviZ dictionary.

    Takes a python dictionary of samples that has been generated by the sample
    method of a model instance and returns a dictionary of samples in ArviZ
    format.

    Parameters
    ----------
    samples: a dictionary mapping variable names to P arrays with shape
             (parameter_dimension, chain_length, number_of_chains)

    Returns
    -------
    a dictionary mapping variable names to NumPy arrays with shape
             (number_of_chains, chain_length, parameter_dimension)
    """
    # pyjags returns a dictionary of NumPy arrays with shape
    #         (parameter_dimension, chain_length, number_of_chains)
    # but arviz expects samples with shape
    #         (number_of_chains, chain_length, parameter_dimension)

    variable_name_to_samples_map = {}

    if variable_names is None:
        variable_names = tuple(samples.keys())

    assert isinstance(variable_names, tuple)

    for variable_name, chains in samples.items():
        if variable_name in variable_names:
            parameter_dimension, _, _ = chains.shape
            if parameter_dimension == 1:
                variable_name_to_samples_map[variable_name] = \
                    chains[0, :, :].transpose()
            else:
                variable_name_to_samples_map[variable_name] = \
                    np.swapaxes(chains, 0, 2)

    return variable_name_to_samples_map


# def _construct_xarray_dataset_from_pyjags_samples(
#         samples: tp.Dict[str, np.ndarray]) -> xarray.Dataset:
#     arviz_dict = \
#         _convert_pyjags_samples_dictionary_to_arviz_samples_dictionary(samples)
#
#     return az.data.base.dict_to_dataset(data=arviz_dict)


# def _convert_pyjags_samples_to_arviz_inference_data_object(
#         posterior: tp.Optional[tp.Dict[str, np.ndarray]] = None,
#         prior: tp.Optional[tp.Dict[str, np.ndarray]] = None) \
#         -> InferenceData:
#     groups = {}
#     if posterior is not None:
#         groups["posterior"] = \
#             _construct_xarray_dataset_from_pyjags_samples(posterior)
#     if prior is not None:
#         groups["prior"] = \
#             _construct_xarray_dataset_from_pyjags_samples(prior)
#
#     return InferenceData(**groups)


def _extract_samples_dictionary_from_arviz_inference_data(idata) \
        -> tp.Dict[str, np.ndarray]:
    """
    Extract the samples dictionary from an ArviZ inference data object.

    Extracts a dictionary mapping parameter names to NumPy arrays of samples
    with shape (number_of_chains, chain_length, parameter_dimension) from an
    ArviZ inference data object.

    Parameters
    ----------
    idata: An Arviz inference data object

    Returns
    -------
    a dictionary mapping variable names to NumPy arrays with shape
             (number_of_chains, chain_length, parameter_dimension)

    """
    variable_name_to_samples_map = {}

    for key, value in idata.posterior.to_dict()['data_vars'].items():
        variable_name_to_samples_map[key] = np.array(value['data'])

    return variable_name_to_samples_map


def _convert_arviz_samples_dictionary_to_pyjags_samples_dictionary(
        samples: tp.Dict[str, np.ndarray]) \
        -> tp.Dict[str, np.ndarray]:
    """
    Convert and ArviZ dictionary to a PyJAGS dictionary.

    Takes a python dictionary of samples in ArviZ format and returns the samples
    as a dictionary in PyJAGS format.

    Parameters
    ----------
    samples: a dictionary mapping variable names to NumPy arrays with shape
             (number_of_chains, chain_length, parameter_dimension)

    Returns
    -------
    a dictionary mapping variable names to NumPy arrays with shape
             (parameter_dimension, chain_length, number_of_chains)

    """
    # pyjags returns a dictionary of NumPy arrays with shape
    #         (parameter_dimension, chain_length, number_of_chains)
    # but arviz expects samples with shape
    #         (number_of_chains, chain_length, parameter_dimension)

    variable_name_to_samples_map = {}

    for variable_name, chains in samples.items():
        if chains.ndim == 2:
            number_of_chains, chain_length = chains.shape
            chains = chains.reshape((number_of_chains, chain_length, 1))

        variable_name_to_samples_map[variable_name] = \
            np.swapaxes(chains, 0, 2)

    return variable_name_to_samples_map


def from_pyjags(posterior: tp.Optional[tp.Dict[str, np.ndarray]] = None,
                prior: tp.Optional[tp.Dict[str, np.ndarray]] = None,
                save_warmup=None,
                warmup_iterations: int = 0) -> InferenceData:
    """
    Convert PyJAGS posterior samples to an ArviZ inference data object.

    Takes a python dictionary of samples that has been generated by the sample
    method of a model instance and returns an Arviz inference data object.

    Parameters
    ----------
    posterior: a dictionary mapping variable names to NumPy arrays containing
               posterior samples with shape
               (parameter_dimension, chain_length, number_of_chains)

    prior: a dictionary mapping variable names to NumPy arrays containing
           prior samples with shape
           (parameter_dimension, chain_length, number_of_chains)

    save_warmup: whether or not to return warmup draws if any
    warmup_iterations: how many iterations are for warmup

    Returns
    -------
    An Arviz inference data object
    """
    return (PyJAGSConverter(posterior=posterior,
                            prior=prior,
                            save_warmup=save_warmup,
                            warmup_iterations=warmup_iterations)
            .to_inference_data())

    # return _convert_pyjags_samples_to_arviz_inference_data_object(posterior=posterior)
