import { ActionTypes } from "../constants/action-types";
import { Product } from "../../helpers/interfaces";
import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { initialState } from "../../helpers/interfaces";
import { AnyAction } from "redux";

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

export const fetchProducts = (): ThunkAction<
  void,
  initialState,
  unknown,
  AnyAction
> => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://fakestoreapi.com/products?limit=10`
    );
    dispatch({
      type: ActionTypes.FETCH_PRODUCTS,
      payload: response.data,
    });
  };
};
