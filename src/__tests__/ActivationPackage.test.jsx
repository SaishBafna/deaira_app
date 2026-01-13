import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ActivationPackage from "./ActivationPackage";
import { MemoryRouter } from "react-router-dom";

const renderWithRouter = () => {
  return render(
    <MemoryRouter>
      <ActivationPackage />
    </MemoryRouter>
  );
};

describe("ActivationPackage Component", () => {

  test("shows error when submitting without selecting package", () => {
    renderWithRouter();

    const purchaseBtn = screen.getByRole("button", { name: /select a package/i });
    fireEvent.click(purchaseBtn);

    const msg = screen.getByTestId("message");
    expect(msg).toHaveTextContent("Please select a package");
  });

  test("shows error when terms are not agreed", () => {
    renderWithRouter();

    // Select package
    fireEvent.change(screen.getByLabelText(/select package/i), {
      target: { value: "basic" },
    });

    // Click submit
    const purchaseBtn = screen.getByRole("button", { name: /agree to terms/i });
    fireEvent.click(purchaseBtn);

    const msg = screen.getByTestId("message");
    expect(msg).toHaveTextContent("You must agree to the terms");
  });

  test("completes purchase when package selected and terms agreed", () => {
    renderWithRouter();

    // Select package
    fireEvent.change(screen.getByLabelText(/select package/i), {
      target: { value: "basic" },
    });

    // Agree terms
    fireEvent.click(screen.getByRole("checkbox", { name: /i agree/i }));

    // Click purchase
    const purchaseBtn = screen.getByRole("button", { name: /purchase for 50 usdt/i });
    fireEvent.click(purchaseBtn);

    const msg = screen.getByTestId("message");
    expect(msg).toHaveTextContent("Purchasing Basic Package for 50 USDT");
  });

  test("purchase button is disabled initially", () => {
    renderWithRouter();
    const purchaseBtn = screen.getByRole("button");
    expect(purchaseBtn).toBeDisabled();
  });

  test("purchase button updates after selecting package & terms", () => {
    renderWithRouter();

    fireEvent.change(screen.getByLabelText(/select package/i), {
      target: { value: "advanced" },
    });

    fireEvent.click(screen.getByRole("checkbox", { name: /i agree/i }));

    const purchaseBtn = screen.getByRole("button", { name: /purchase for 150 usdt/i });
    expect(purchaseBtn).toBeEnabled();
  });

});
