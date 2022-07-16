import React from "react";
import { Card, Paper, Typography, Box } from "@mui/material";
import { Product } from "../../helpers/interfaces";
const CartProductTile: React.FC<{ product: Product; key: number }> = ({
  product,
}) => {
  return (
    <Card
      component={Paper}
      sx={{ maxWidth: "35%", mx: "auto", my: "1rem", p: ".5rem" }}
    >
      <Box
        component="img"
        alt="product image"
        src={product.image}
        sx={{ height: "200px", display: "block", mx: "auto" }}
      />
      <Typography paragraph sx={{ fontSize: "1rem" }}>
        {product.title}
      </Typography>
      <Typography component="span" sx={{ fontSize: "1rem" }}>
        {product.price}$
      </Typography>
    </Card>
  );
};

export default CartProductTile;
