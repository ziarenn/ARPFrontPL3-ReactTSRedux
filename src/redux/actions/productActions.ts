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

export const fetchProducts = (
  quantity: number
): ThunkAction<void, initialState, number, AnyAction> => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://fakestoreapi.com/products?limit=${quantity}`
    );
    dispatch({
      type: ActionTypes.FETCH_PRODUCTS,
      payload: response.data,
    });
  };
};

export const fetchImages = (
  categories: string[]
): ThunkAction<void, initialState, string[], AnyAction> => {
  return async (dispatch) => {
    const objectList = await fetchImagesAxios(categories);
    const imageList = objectList.map((el) => el.data[0].image);
    dispatch({
      type: ActionTypes.FETCH_IMAGES,
      payload: imageList,
    });
  };
};

export const fetchCategories = (): ThunkAction<
  void,
  initialState,
  unknown,
  AnyAction
> => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    dispatch({
      type: ActionTypes.FETCH_CATEGORIES,
      payload: response.data,
    });
  };
};

export const fetchImagesAxios = async (categories: string[]) => {
  const product1 = await axios.get(
    `https://fakestoreapi.com/products/category/${categories[0]}?limit=1`
  );
  const product2 = await axios.get(
    `https://fakestoreapi.com/products/category/${categories[1]}?limit=1`
  );
  const product3 = await axios.get(
    `https://fakestoreapi.com/products/category/${categories[2]}?limit=1`
  );
  const product4 = await axios.get(
    `https://fakestoreapi.com/products/category/${categories[3]}?limit=1`
  );
  const objectList = [product1, product2, product3, product4];

  return objectList;
};
