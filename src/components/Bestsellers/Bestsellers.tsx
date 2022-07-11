import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";
import axios from "axios";
import ProductTile from "../ProductTile/ProductTile";
import { Product } from "../../helpers/interfaces";
const Bestsellers = () => {
  const [bestsellers, setBestsellers] = useState<Product[]>();
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products?limit=10").then((response) => {
      setBestsellers(response.data);
    });
  }, []);

  return (
    <Card>
      {bestsellers &&
        bestsellers.map((el: Product, i: number) => {
          return <ProductTile key={i} product={el} />;
        })}
    </Card>
  );
};

export default Bestsellers;
