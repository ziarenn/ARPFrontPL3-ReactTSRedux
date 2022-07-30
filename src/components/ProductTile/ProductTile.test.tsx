import React from "react";
import ProductTile, { clickHandler } from "./ProductTile";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { Product } from "../../helpers/interfaces";
describe("<ProductTile/>", () => {
  it("should call clickHandler once Card component is clicked", () => {
    const product = {
      category: "",
      description: "",
      id: 1,
      image: "",
      price: 1,
      rating: { rate: 1, count: 1 },
      title: "",
    };
    render(
      <Provider store={store}>
        <ProductTile product={product} />
      </Provider>
    );
    const Card = screen.getByAltText("product image");
    fireEvent.click(Card);
    expect(screen.getByText("Add to cart")).not.toBeNull();
  });
});
