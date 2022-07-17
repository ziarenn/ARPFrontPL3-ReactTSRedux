import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";
import axios from "axios";
import ProductTile from "../ProductTile/ProductTile";
import { Product } from "../../helpers/interfaces";
import { fetchProducts } from "../../redux/actions/productActions";
import { useAppDispatch } from "../../redux/store";
import { ThunkDispatch } from "redux-thunk";
import { initialState } from "../../redux/reducers/productReducer";
import { AnyAction } from "redux";
import { useSelector } from "react-redux";

interface State {
  allProducts: {
    selectedProducts: Product[] | [];
    fetchedProducts: Product[] | [];
  };
}

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
