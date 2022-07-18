import React, { useEffect } from "react";
import { Card } from "@mui/material";
import ProductTile from "../ProductTile/ProductTile";
import { Product, State } from "../../helpers/interfaces";
import { fetchProducts } from "../../redux/actions/productActions";
import { useAppDispatch } from "../../redux/store";
import { ThunkDispatch } from "redux-thunk";
import { initialState } from "../../helpers/interfaces";
import { AnyAction } from "redux";
import { useSelector } from "react-redux";

const Bestsellers = () => {
  const dispatch = useAppDispatch();
  const products = useSelector(
    (state: State) => state.allProducts.fetchedProducts
  );
  useEffect(() => {
    dispatch(
      fetchProducts() as ThunkDispatch<initialState, unknown, AnyAction>
    );
  }, []);

  return (
    <Card>
      {products &&
        products.map((el: Product, i: number) => {
          return <ProductTile key={i} product={el} />;
        })}
    </Card>
  );
};

export default Bestsellers;
