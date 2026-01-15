import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Daily_earning from "../path/to/Daily_earning";

jest.mock("../assets/Images/earning-banner.png", () => "earning-banner.png");
jest.mock("../assets/Images/Earning/dlogo.png", () => "dlogo.png");
jest.mock("../assets/Images/Earning/usdt.png", () => "usdt.png");

const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe("Daily_earning Component", () => {
  test("should render header", () => {
    renderWithRouter(<Daily_earning />);
    expect(screen.getByText("Earnings")).toBeInTheDocument();
  });

  test("should show earnings cards", () => {
    renderWithRouter(<Daily_earning />);
    expect(screen.getByText("DAIR")).toBeInTheDocument();
    expect(screen.getByText("USDT")).toBeInTheDocument();
  });

  test("default active tab should be USDT", () => {
    renderWithRouter(<Daily_earning />);
    expect(screen.getByText("UT220104")).toBeInTheDocument(); // USDT TX code
  });

  test("switch to DAIR tab and render DAIR transactions", () => {
    renderWithRouter(<Daily_earning />);

    const dairButton = screen.getByText("DAIR Token");
    fireEvent.click(dairButton);

    expect(screen.getByText("CA110504")).toBeInTheDocument(); // DAIR TX code
  });

  test("Recent Transactions should exist", () => {
    renderWithRouter(<Daily_earning />);
    expect(screen.getByText("Recent Transactions")).toBeInTheDocument();
  });
});
