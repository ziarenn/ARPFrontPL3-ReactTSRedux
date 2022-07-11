import React from "react";
import { Card, Box, Typography, Paper } from "@mui/material";
import { Product } from "../../helpers/interfaces";
const ProductTile: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <Card
      component={Paper}
      sx={{ maxWidth: "35%", mx: "auto", my: "1rem", p: ".5rem" }}
    >
      <Box
        component="img"
        alt="product image"
        src={product.image}
        sx={{ width: "30vh", display: "block", mx: "auto", my: "5%" }}
      />
      <Typography variant="h2" sx={{ fontSize: "2rem" }}>
        {product.title}
      </Typography>
      <Typography paragraph sx={{ fontSize: "1rem" }}>
        {product.category}
      </Typography>
      <Typography variant="h3" sx={{ fontSize: "2rem" }}>
        {product.price}$
      </Typography>
      <Typography variant="h4" sx={{ fontSize: "1rem" }}>
        Rates: {product.rating.rate} ({product.rating.count})
      </Typography>
    </Card>
  );
};

export default ProductTile;
