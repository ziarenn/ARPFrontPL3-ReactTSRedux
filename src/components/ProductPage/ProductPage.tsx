import React, { useState, useEffect } from "react";
import axios from "axios";
import { Product, ElectronicsPageProps } from "../../helpers/interfaces";
import { Typography, Card, Paper } from "@mui/material";
import ProductTile from "../ProductTile/ProductTile";
const ElectronicsPage: React.FC<ElectronicsPageProps> = ({ category }) => {
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      });
  }, [category]);

  return (
    <>
      <Typography
        variant="h2"
        sx={{ fontSize: "2rem", borderBottom: "1px solid orange" }}
        align="center"
      >
        {category.toUpperCase()}
      </Typography>
      <Card component={Paper} sx={{ display: "block", mx: "auto" }}>
        {products &&
          products.map((el: Product, i: number) => {
            return <ProductTile product={el} key={i} />;
          })}
      </Card>
    </>
  );
};

export default ElectronicsPage;
