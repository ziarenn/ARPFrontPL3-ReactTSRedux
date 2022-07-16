import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./reducers/index";
import thunk from "redux-thunk";
const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
