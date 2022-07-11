import React, { useState, useEffect } from "react";
import axios from "axios";
import { Product } from "../../helpers/interfaces";
import { Typography, Card, Paper } from "@mui/material";
import ProductTile from "../ProductTile/ProductTile";
const ElectronicsPage = () => {
  const [electronics, setElectronics] = useState<Product[]>();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/electronics")
      .then((response) => {
        console.log(response.data);
        setElectronics(response.data);
      });
  }, []);

  return (
    <>
      <Typography
        variant="h2"
        sx={{ fontSize: "2rem", borderBottom: "1px solid orange" }}
        align="center"
      >
        Electronics
      </Typography>
      <Card component={Paper} sx={{ display: "block", mx: "auto" }}>
        {electronics &&
          electronics.map((el: Product, i: number) => {
            return <ProductTile product={el} key={i} />;
          })}
      </Card>
    </>
  );
};

export default ElectronicsPage;
