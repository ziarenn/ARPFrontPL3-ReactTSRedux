import { ActionTypes } from "../constants/action-types";
import { Product } from "../../helpers/interfaces";
export const setProduct = (product: Product) => {
  return {
    type: ActionTypes.SET_PRODUCT,
    payload: product,
  };
};

export const removeProduct = (product: Product) => {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: product
  }
}