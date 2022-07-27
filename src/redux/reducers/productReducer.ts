import { AnyAction } from "redux";
import { ActionTypes } from "../constants/action-types";
import { initialState as IState } from "../../helpers/interfaces";

const initialState: IState = {
  selectedProducts: [],
  fetchedProducts: [],
  fetchedImages: [],
  fetchedCategories: []
};

export const productReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCT:
      return {
        selectedProducts: [...state.selectedProducts, action.payload],
        fetchedProducts: [...state.fetchedProducts],
        fetchedImages: [...state.fetchedImages],
        fetchedCategories: [...state.fetchedCategories]
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
        fetchedImages: [...state.fetchedImages],
        fetchedCategories: [...state.fetchedCategories]
      };
    case ActionTypes.FETCH_PRODUCTS:
      return {
        fetchedProducts: [...action.payload],
        fetchedImages: [...state.fetchedImages],
        selectedProducts: [...state.selectedProducts],
        fetchedCategories: [...state.fetchedCategories]
      };
    case ActionTypes.FETCH_IMAGES:
      return {
        fetchedImages: [...action.payload],
        fetchedProducts: [...state.fetchedProducts],
        selectedProducts: [...state.selectedProducts],
        fetchedCategories: [...state.fetchedCategories]
      };
    case ActionTypes.FETCH_CATEGORIES:
      return {
        fetchedCategories: [...action.payload],
        fetchedImages: [...state.fetchedImages],
        fetchedProducts: [...state.fetchedProducts],
        selectedProducts: [...state.selectedProducts]
      };
    default:
      return state;
  }
};
