import { Typography, Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Product, State } from "../../helpers/interfaces";
import CartProductTile from "../CartProductTile/CartProductTile";

const CartPage = () => {
  const products = useSelector(
    (state: State) => state.allProducts.selectedProducts
  );
  const calculateTotal = () => {
    return products.length !== 0
      ? products
          .map((product: Product) => product.price)
          .reduce((a, b) => a + b)
      : "0";
  };

  return (
    <>
      {products.map((el: Product, i: number) => {
        return <CartProductTile product={el} key={i} />;
      })}
      <Typography variant="h2" sx={{ fontSize: "2rem" }} align="center">
        Total: {calculateTotal()}$
      </Typography>
      <Button
        variant="contained"
        sx={{ bgcolor: "#FC766AFF", display: "block", mx: "auto" }}
      >
        Order
      </Button>
    </>
  );
};

export default CartPage;
