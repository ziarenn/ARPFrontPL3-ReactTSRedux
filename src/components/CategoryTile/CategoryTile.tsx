import React, { useEffect, useState } from "react";
import { CategoryTileProps } from "../../helpers/interfaces";
import { Card, Typography, Box } from "@mui/material";
import axios from "axios";
import { AddBoxSharp } from "@mui/icons-material";
const CategoryTile = ({ category }: CategoryTileProps) => {
  const [image, setImage] = useState("");
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}?limit=1`)
      .then((response) => {
        setImage(response.data[0].image);
      });
  }, []);
  return (
    <Card
      sx={{
        display: "inline-block",
        width: "calc(24% - 1px)",
        mx: "0.5%",
        height: "45vh",
      }}
    >
      <Typography
        variant="h2"
        sx={{ fontSize: "1.5rem", fontFamily: "Roboto" }}
        align="center"
      >
        {category.toUpperCase()}
      </Typography>
      <Box
        component="img"
        alt="iphone"
        src={image}
        sx={{
          width: "50%",
          display: "block",
          mx: "auto",
        }}
      />
    </Card>
  );
};

export default CategoryTile;
