import React from "react";
import CategoryMenu from "./CategoryMenu";
import { render, screen } from "@testing-library/react";
import store from "../../redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
describe("<CategoryMenu/>", () => {
  it("should render 4 CategoryTile components", () => {
    const categories = [
      "electronics",
      "jewelery",
      "men's clothing",
      "women's clothing",
    ];

    render(
      <Provider store={store}>
        <BrowserRouter>
          <CategoryMenu categories={categories} />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(categories[0].toUpperCase())).not.toBeNull();
    expect(screen.getByText(categories[1].toUpperCase())).not.toBeNull();
    expect(screen.getByText(categories[2].toUpperCase())).not.toBeNull();
    expect(screen.getByText(categories[3].toUpperCase())).not.toBeNull();
  });
});
