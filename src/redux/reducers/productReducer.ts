import { AnyAction } from "redux";
import { Product } from "../../helpers/interfaces";
import { ActionTypes } from "../constants/action-types";
interface initialState {
  selectedProducts: Product[] | [];
}

const initialState: initialState = {
  selectedProducts: [],
};

export const productReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCT:
      return {
        selectedProducts: [...state.selectedProducts, action.payload],
      };

    case ActionTypes.REMOVE_PRODUCT:
      const objToRemove: number = state.selectedProducts.findIndex(
        (obj) => obj.id === action.payload.id
      );
      const sp = [...state.selectedProducts];
      sp.splice(objToRemove, 1);
      return {
        selectedProducts: sp,
      };
    default:
      return state;
  }
};
