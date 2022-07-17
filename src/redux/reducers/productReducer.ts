import { AnyAction } from "redux";
import { Product } from "../../helpers/interfaces";
import { ActionTypes } from "../constants/action-types";
export interface initialState {
  selectedProducts: Product[] | [];
  fetchedProducts: Product[] | [];
}

const initialState: initialState = {
  selectedProducts: [],
  fetchedProducts: [],
};

export const productReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCT:
      return {
        selectedProducts: [...state.selectedProducts, action.payload],
        fetchedProducts: [...state.fetchedProducts],
      };

    case ActionTypes.REMOVE_PRODUCT:
      const objToRemove: number = state.selectedProducts.findIndex(
        (obj) => obj.id === action.payload.id
      );
      const sp = [...state.selectedProducts];
      sp.splice(objToRemove, 1);
      return {
        selectedProducts: sp,
        fetchedProducts: [...state.fetchedProducts],
      };
    case ActionTypes.FETCH_PRODUCTS:
      console.log("fetch products reducer");
      return {
        selectedProducts: [...state.selectedProducts],
        fetchedProducts: [...action.payload],
      };
    default:
      return state;
  }
};
