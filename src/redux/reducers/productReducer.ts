import { AnyAction } from "redux";
import { Product } from "../../helpers/interfaces";
import { ActionTypes } from "../constants/action-types";
interface initialState {
  selectedProducts: Product[] | [];
}

const initialState = {
  selectedProducts: [],
};

export const productReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        selectedProducts: [...state.selectedProducts, action.payload],
      };

    case ActionTypes.REMOVE_PRODUCT:
      const objToRemove = state.selectedProducts.findIndex((obj) => {
        return Object.assign({}, obj) === Object.assign({}, action.payload);
      });
      return {
        selectedProducts: [...state.selectedProducts].splice(objToRemove, 1),
      };
    default:
      return state;
  }
};
