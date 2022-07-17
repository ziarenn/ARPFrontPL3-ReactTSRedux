import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import { reducers } from "./reducers/index";
import { useDispatch } from "react-redux";
import thunk, { ThunkAction } from "redux-thunk";


const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(thunk)
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
