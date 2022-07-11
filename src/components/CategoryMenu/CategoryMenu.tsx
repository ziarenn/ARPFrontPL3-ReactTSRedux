import React from "react";
import { Paper } from "@mui/material";
import CategoryTile from "../CategoryTile/CategoryTile";
const CategoryMenu: React.FC<{
  categories: string[];
}> = ({ categories }) => {
  return (
    <Paper elevation={1} sx={{ my: "2rem" }}>
      {categories.map((el: string, i: number) => {
        return <CategoryTile category={el} key={i} />;
      })}
    </Paper>
  );
};

export default CategoryMenu;
