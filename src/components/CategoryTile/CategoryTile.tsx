import React, { useEffect, useState } from "react";
import { CategoryTileProps } from "../../helpers/interfaces";
import { Card, Typography, Box } from "@mui/material";

const CategoryTile: React.FC<CategoryTileProps> = ({category, image }) => {
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
