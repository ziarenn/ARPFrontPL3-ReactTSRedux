import React, { useEffect } from "react";
import { CategoryMenuProps } from "../../helpers/interfaces";
import { Paper } from "@mui/material";
import CategoryTile from "../CategoryTile/CategoryTile";
import { Link } from "react-router-dom";
import { fetchImages } from "../../redux/actions/productActions";
import { useAppDispatch } from "../../redux/store";
import { ThunkDispatch } from "redux-thunk";
import { initialState, State } from "../../helpers/interfaces";
import { AnyAction } from "redux";
import { useSelector } from "react-redux";
const CategoryMenu: React.FC<CategoryMenuProps> = ({ categories }) => {
  const images = useSelector((state: State) => state.allProducts.fetchedImages);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      fetchImages(categories) as ThunkDispatch<
        initialState,
        string[],
        AnyAction
      >
    );
  }, []);
  return (
    <Paper elevation={1} sx={{ my: "2rem" }}>
      {images &&
        categories.map((el: string, i: number) => {
          let route: string = el;
          if (el === "men's clothing") route = "/mans";
          if (el === "women's clothing") route = "/womans";

          return (
            <Link to={route} key={i}>
              <CategoryTile category={el} image={images[i]} />
            </Link>
          );
        })}
    </Paper>
  );
};

export default CategoryMenu;
