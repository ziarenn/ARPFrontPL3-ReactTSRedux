import { ActionTypes } from "../constants/action-types";
import { Product } from "../../helpers/interfaces";
import axios from "axios";
import fakeStoreApi from "../../apis/fakeStoreApi";
import { Dispatch } from "redux";
export const setProduct = (product: Product) => {
  return {
    type: ActionTypes.SET_PRODUCT,
    payload: product,
  };
};

export const removeProduct = (product: Product) => {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: product,
  };
};

export const fetchProducts = () => {
  return async function(dispatch: Dispatch) {
    const response = await fakeStoreApi.get("/products");
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
  };
};
