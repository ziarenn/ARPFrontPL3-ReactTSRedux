import React from "react";
import LoginPage from "./LoginPage";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RegisterPage from "../RegisterPage/RegisterPage";
// import { default: userEvent } from "@testing-library/user-event";
import userEvent from "@testing-library/user-event";
describe("<LoginPage/>", () => {
  it("should render h2 with Log in to use our site text", () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );
    const h2 = screen.getByText("Log in to use our site");
    expect(h2).not.toBeNull();
  });
  it("should render a form with 2 text inputs and a button submit", () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );
    const textInputs = screen.getAllByRole("textbox");
    const buttonSubmit = screen.getByText("Log in");
    expect(textInputs).not.toBeNull();
    expect(buttonSubmit).not.toBeNull();
  });
  it("should render a register button", () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );
    const registerButton = screen.getByText("Register");
    expect(registerButton).not.toBeNull();
  });
});
