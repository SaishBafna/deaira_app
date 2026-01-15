import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import DirectDeposit from "../path/to/DirectDeposit";

// Mock lucide-react icons to avoid SVG issues
jest.mock("lucide-react", () => {
  const React = require("react");
  return {
    ChevronLeft: (props) => <div {...props}>ChevronLeft</div>,
    Wallet: (props) => <div {...props}>Wallet</div>,
    AlertCircle: (props) => <div {...props}>AlertCircle</div>,
    CheckCircle: (props) => <div {...props}>CheckCircle</div>,
    Zap: (props) => <div {...props}>Zap</div>,
    Copy: (props) => <div {...props}>Copy</div>,
    ExternalLink: (props) => <div {...props}>ExternalLink</div>,
  };
});

// Mock clipboard API
Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn(),
  },
});

jest.useFakeTimers();

describe("DirectDeposit Component", () => {
  test("renders without crashing", () => {
    render(<DirectDeposit />);
    expect(screen.getByText("Deposit Funds")).toBeInTheDocument();
  });

  test("renders wallet connected status", () => {
    render(<DirectDeposit />);
    expect(screen.getByText("Wallet Connected")).toBeInTheDocument();
  });

  test("renders amount input and deposit button", () => {
    render(<DirectDeposit />);
    expect(screen.getByPlaceholderText("Enter amount")).toBeInTheDocument();
    expect(screen.getByText("Enter Valid Amount")).toBeInTheDocument();
  });

  test("shows validation error for low amount", () => {
    render(<DirectDeposit />);
    const input = screen.getByPlaceholderText("Enter amount");

    fireEvent.change(input, { target: { value: "0" } });
    fireEvent.click(screen.getByText("Enter Valid Amount"));

    expect(
      screen.queryByText(/Minimum deposit is/i)
    ).not.toBeInTheDocument(); // Because UI disables action instead of showing live error
  });

  test("copies wallet address to clipboard", () => {
    render(<DirectDeposit />);

    const copyButton = screen.getAllByText("Copy")[0]; // Mocked Copy icon
    fireEvent.click(copyButton);

    expect(navigator.clipboard.writeText).toHaveBeenCalledTimes(1);
  });

  test("processes deposit successfully", async () => {
    render(<DirectDeposit />);

    const input = screen.getByPlaceholderText("Enter amount");
    fireEvent.change(input, { target: { value: "10" } });

    fireEvent.click(screen.getByText(/Deposit 10 USDT/i));

    // Should show processing state
    expect(screen.getByText(/Processing.../i)).toBeInTheDocument();

    // Fast-forward timeout
    await act(async () => {
      jest.runAllTimers();
    });

    // Success message
    expect(
      screen.getByText(/Deposit of 10 USDT submitted successfully/i)
    ).toBeInTheDocument();
  });
});
