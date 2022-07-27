import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import axios from "axios";
import Bestsellers from "../Bestsellers/Bestsellers";
import CategoryMenu from "../CategoryMenu/CategoryMenu";
import {fetchCategories} from '../../redux/actions/productActions'
import {useAppDispatch} from '../../redux/store'
import {ThunkDispatch} from 'redux-thunk'
import {initialState, State} from '../../helpers/interfaces'
import {AnyAction} from 'redux'
import {useSelector} from 'react-redux'
const HomePage = () => {
  const dispatch = useAppDispatch()
  const categories = useSelector((state: State)=> state.allProducts.fetchedCategories)
  console.log(categories)
  useEffect(() => {
    dispatch(fetchCategories() as ThunkDispatch<initialState, unknown, AnyAction>)
  }, []);

  return (
    <>
      <Typography
        variant="h2"
        sx={{ fontSize: "3rem", fontFamily: "Roboto", mt: "2rem" }}
        align="center"
      >
        Browse and buy your favorite electronics, jewellery and clothes. All in
        one place.
      </Typography>
      {categories.length !== 0 && <CategoryMenu categories={categories} />}
      <Typography
        variant="h3"
        component="h3"
        align="center"
        sx={{
          fontSize: "1.5rem",
          fontFamily: "Roboto",
          borderBottom: "1px solid orange",
          mb: ".5rem",
        }}
      >
        Our bestsellers:
      </Typography>
      <Bestsellers />
    </>
  );
};

export default HomePage;
