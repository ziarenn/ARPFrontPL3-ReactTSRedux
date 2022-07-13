import React from "react";
import { Paper } from "@mui/material";
import CategoryTile from "../CategoryTile/CategoryTile";
import { Link } from "react-router-dom";
const CategoryMenu: React.FC<{
  categories: string[];
}> = ({ categories }) => {
  return (
    <Paper elevation={1} sx={{ my: "2rem" }}>
      {categories.map((el: string, i: number) => {
        let route: string = el;
        if (el === "men's clothing") route = "/mans";
        if (el === "women's clothing") route = "/womans";

        return (
          <Link to={route} key={i}>
            <CategoryTile category={el} />
          </Link>
        );
      })}
    </Paper>
  );
};

export default CategoryMenu;
