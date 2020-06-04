import typing as tp
import numpy as np
import xarray

import arviz as az


def _convert_pyjags_samples_dictionary_to_arviz_samples_dictionary(
        samples: tp.Dict[str, np.ndarray]) \
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

    parameter_name_to_samples_map = {}

    for parameter_name, chains in samples.items():
        parameter_dimension, _, _ = chains.shape
        if parameter_dimension == 1:
            parameter_name_to_samples_map[parameter_name] = \
                chains[0, :, :].transpose()
        else:
            parameter_name_to_samples_map[parameter_name] = \
                np.swapaxes(chains, 0, 2)

    return parameter_name_to_samples_map


def _construct_xarray_dataset_from_pyjags_samples(
        samples: tp.Dict[str, np.ndarray]) -> xarray.Dataset:
    arviz_dict = \
        _convert_pyjags_samples_dictionary_to_arviz_samples_dictionary(samples)

    return az.data.base.dict_to_dataset(data=arviz_dict)


def _convert_pyjags_samples_to_arviz_inference_data_object(
        posterior: tp.Optional[tp.Dict[str, np.ndarray]] = None,
        prior: tp.Optional[tp.Dict[str, np.ndarray]] = None) \
        -> az.InferenceData:
    groups = {}
    if posterior is not None:
        groups["posterior"] = \
            _construct_xarray_dataset_from_pyjags_samples(posterior)
    if prior is not None:
        groups["prior"] = \
            _construct_xarray_dataset_from_pyjags_samples(prior)

    return az.InferenceData(**groups)


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
    parameter_name_to_samples_map = {}

    for key, value in idata.posterior.to_dict()['data_vars'].items():
        parameter_name_to_samples_map[key] = np.array(value['data'])

    return parameter_name_to_samples_map


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

    parameter_name_to_samples_map = {}

    for parameter_name, chains in samples.items():
        if chains.ndim == 2:
            number_of_chains, chain_length = chains.shape
            chains = chains.reshape((number_of_chains, chain_length, 1))

        parameter_name_to_samples_map[parameter_name] = \
            np.swapaxes(chains, 0, 2)

    return parameter_name_to_samples_map


def from_pyjags(posterior: tp.Dict[str, np.ndarray]) -> az.InferenceData:
    """
    Convert PyJAGS posterior samples to an ArviZ inference data object.

    Takes a python dictionary of samples that has been generated by the sample
    method of a model instance and returns an Arviz inference data object.

    Parameters
    ----------
    posterior: a dictionary mapping variable names to NumPy arrays with shape
             (parameter_dimension, chain_length, number_of_chains)

    Returns
    -------
    An Arviz inference data object
    """
    return _convert_pyjags_samples_to_arviz_inference_data_object(posterior=posterior)
