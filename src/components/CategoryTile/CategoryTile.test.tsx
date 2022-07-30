import React from "react";
import CategoryTile from "./CategoryTile";
import { render, screen } from "@testing-library/react";

describe("<CategoryTile/>", () => {
  it("should render an h2 with a category name", () => {
    const category = "electronics";
    const image = "";
    render(<CategoryTile category={category} image={image} />);
    const h2 = screen.getByText(category.toUpperCase());
    expect(h2).not.toBeNull();
  });
  it("should render an image", () => {
    const category = "electronics";
    const image = "";
    render(<CategoryTile category={category} image={image} />);
    const imgEl = screen.getByAltText(category);
    expect(imgEl).not.toBeNull();
  });
});
