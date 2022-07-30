import axios, { AxiosError } from "axios";
import { Product } from "../../helpers/interfaces";
import {
  fetchCategories,
  fetchImages,
  fetchImagesAxios,
  setProduct,
} from "./productActions";

jest.mock("axios");
// , () => ({
//   ...jest.requireActual("axios"),
//   get: jest.fn(() => {
//     data: [{ image: "" }];
//   }),
// })
describe("productActions.ts", () => {
  describe("fetchCategories()", () => {
    it("should return an async function", () => {
      const outcome = fetchCategories();
      // prettier-ignore
      const AsyncFunction = (async function() {}).constructor;
      expect(outcome).toBeInstanceOf(AsyncFunction);
    });
    it("should return an async function that calls axios.get one time", () => {
      axios.get = jest.fn();
      Object(axios).get.mockImplementationOnce(() =>
        Promise.resolve({ data: {} })
      );
      const dispatch = jest.fn();
      const getState = jest.fn();
      const returnedFunction = fetchCategories();
      returnedFunction(dispatch, getState, "_");
      expect(axios.get).toBeCalledTimes(1);
    });
  });
  describe("fetchImages()", () => {
    it("should return an async function", () => {
      const outcome = fetchImages([""]);
      //prettier-ignore
      const AsyncFunction = (async()=>{}).constructor
      expect(outcome).toBeInstanceOf(AsyncFunction);
    });
    it("should call axios.get", () => {
      axios.get = jest.fn();
      fetchImagesAxios([
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing",
      ]);
      expect(axios.get).toBeCalled();
    });
  });
  describe("setProduct()", () => {
    it("should return an object of type AnyAction", () => {
      const output = setProduct({} as Product);
      expect(output).toHaveProperty("type");
      expect(output).toHaveProperty("payload");
    });
  });
});
