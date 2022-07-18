import { AnyAction } from "redux";
import { ActionTypes } from "../constants/action-types";
import { initialState as IState } from "../../helpers/interfaces";

const initialState: IState = {
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
      return {
        selectedProducts: [...state.selectedProducts],
        fetchedProducts: [...action.payload],
      };
    default:
      return state;
  }
};
