import typing as tp
import numpy as np
import pytest

from arviz.data.io_pyjags import (
    _convert_pyjags_dict_to_arviz_dict,
    _convert_arviz_dict_to_pyjags_dict,
    _extract_arviz_dict_from_inference_data,
    from_pyjags,
)

from arviz.tests.helpers import check_multiple_attrs


pyjags_posterior_dict = {"b": np.random.randn(3, 10, 3), "int": np.random.randn(1, 10, 3)}
pyjags_prior_dict = {"b": np.random.randn(3, 10, 3), "int": np.random.randn(1, 10, 3)}


def verify_equality_of_numpy_values_dictionaries(
    dict_1: tp.Mapping[tp.Any, np.ndarray], dict_2: tp.Mapping[tp.Any, np.ndarray]
) -> bool:
    if dict_1.keys() != dict_2.keys():
        return False

    for key in dict_1.keys():
        if not np.all(dict_1[key] == dict_2[key]):
            return False

    return True


def test_convert_pyjags_samples_dictionary_to_arviz_samples_dictionary():
    arviz_samples_dict_from_pyjags_samples_dict = _convert_pyjags_dict_to_arviz_dict(
        pyjags_posterior_dict
    )

    pyjags_dict_from_arviz_dict_from_pyjags_dict = _convert_arviz_dict_to_pyjags_dict(
        arviz_samples_dict_from_pyjags_samples_dict
    )

    assert verify_equality_of_numpy_values_dictionaries(
        pyjags_posterior_dict, pyjags_dict_from_arviz_dict_from_pyjags_dict,
    )


def test_extract_samples_dictionary_from_arviz_inference_data():
    arviz_samples_dict_from_pyjags_samples_dict = _convert_pyjags_dict_to_arviz_dict(
        pyjags_posterior_dict
    )

    arviz_inference_data_from_pyjags_samples_dict = from_pyjags(pyjags_posterior_dict)
    arviz_dict_from_idata_from_pyjags_dict = _extract_arviz_dict_from_inference_data(
        arviz_inference_data_from_pyjags_samples_dict
    )

    assert verify_equality_of_numpy_values_dictionaries(
        arviz_samples_dict_from_pyjags_samples_dict, arviz_dict_from_idata_from_pyjags_dict,
    )


def test_roundtrip_from_pyjags_via_arviz_to_pyjags():
    arviz_inference_data_from_pyjags_samples_dict = from_pyjags(pyjags_posterior_dict)
    arviz_dict_from_idata_from_pyjags_dict = _extract_arviz_dict_from_inference_data(
        arviz_inference_data_from_pyjags_samples_dict
    )

    pyjags_dict_from_arviz_idata = _convert_arviz_dict_to_pyjags_dict(
        arviz_dict_from_idata_from_pyjags_dict
    )

    assert verify_equality_of_numpy_values_dictionaries(
        pyjags_posterior_dict, pyjags_dict_from_arviz_idata
    )


@pytest.mark.parametrize("posterior", [None, pyjags_posterior_dict])
@pytest.mark.parametrize("prior", [None, pyjags_prior_dict])
@pytest.mark.parametrize("save_warmup", [True, False, None])
@pytest.mark.parametrize("warmup_iterations", [0, 5])
def test_inference_data_attrs(posterior, prior, save_warmup, warmup_iterations: int):
    arviz_inference_data_from_pyjags_samples_dict = from_pyjags(
        posterior=pyjags_posterior_dict,
        prior=pyjags_prior_dict,
        save_warmup=save_warmup,
        warmup_iterations=warmup_iterations,
    )
    test_dict = {}
    if posterior is not None:
        test_dict["posterior"] = ["b", "int"]

    if posterior is not None:
        test_dict["prior"] = ["b", "int"]

    fails = check_multiple_attrs(test_dict, arviz_inference_data_from_pyjags_samples_dict)
    assert not fails
