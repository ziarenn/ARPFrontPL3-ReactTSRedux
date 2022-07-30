import React from "react";
import HomePage from "./HomePage";
import { render, screen } from "@testing-library/react";
// import { toBeInTheDocument } from "@testing-library/jest-dom";
import store from "../../redux/store";
import { Provider } from "react-redux";
describe("<HomePage/>", () => {
  it("should render an h2 with a title text", () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    const h2 = screen.getByText(
      "Browse and buy your favorite electronics, jewellery and clothes. All in one place."
    );
    expect(h2).not.toBeNull();
  });
  it("should render an h3 with Our bestsellers text", () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    const h3 = screen.getByText("Our bestsellers:");
    expect(h3).not.toBeNull();
  });
});
