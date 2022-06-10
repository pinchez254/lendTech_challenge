import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders counter", () => {
  render(<App />);

  const counter = screen.getByText("2");
  expect(counter).toBeInTheDocument();
});
