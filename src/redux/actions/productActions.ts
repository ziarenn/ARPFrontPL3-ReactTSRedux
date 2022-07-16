import { ActionTypes } from "../constants/action-types";
import { Product } from "../../helpers/interfaces";
export const setProducts = (products: Product[]) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

// export const selectedProduct = (product: Product) => {
//   return {
//     type: ActionTypes.SET_PRODUCTS,
//     payload: product,
//   };
// };
