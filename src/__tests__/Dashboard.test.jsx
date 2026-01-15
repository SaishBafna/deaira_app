import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Dashboard from "../Screens/Dashboard";

describe("Dashboard Component Tests", () => {

  const mockFetcher = {
    get: jest.fn()
  };

  const mockStorage = {
    getItem: jest.fn()
  };

  beforeEach(() => {
    jest.clearAllMocks();
    mockStorage.getItem.mockReturnValue("mocked_wallet_address"); // default
  });

  test("renders Dashboard container", () => {
    render(
      <MemoryRouter>
        <Dashboard fetcher={mockFetcher} storage={mockStorage} apiBaseUrl="http://test.com" />
      </MemoryRouter>
    );

    expect(screen.getByTestId("dashboard")).toBeInTheDocument();
  });

  test("renders fallback user if no API data", () => {
    mockFetcher.get.mockResolvedValueOnce({ data: {} });

    render(
      <MemoryRouter>
        <Dashboard fetcher={mockFetcher} storage={mockStorage} apiBaseUrl="http://test.com" />
      </MemoryRouter>
    );

    expect(screen.getByTestId("welcome-user")).toHaveTextContent("Not Updated");
    expect(screen.getByTestId("wallet-balance")).toHaveTextContent("0");
  });

  test("loads and displays user + wallet data from API", async () => {
    mockFetcher.get.mockResolvedValueOnce({
      data: {
        user: { user: { first_name: "Saish", id: 5 } },
        wallet: { activation_wallet: 250, wallet_balance: 1000 }
      }
    });

    render(
      <MemoryRouter>
        <Dashboard fetcher={mockFetcher} storage={mockStorage} apiBaseUrl="http://test.com" />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByTestId("welcome-user")).toHaveTextContent("Saish");
      expect(screen.getByTestId("wallet-balance")).toHaveTextContent("250");
    });
  });

  test("deposit button exists", () => {
    mockFetcher.get.mockResolvedValueOnce({ data: {} });

    render(
      <MemoryRouter>
        <Dashboard fetcher={mockFetcher} storage={mockStorage} apiBaseUrl="http://test.com" />
      </MemoryRouter>
    );

    expect(screen.getByTestId("deposit-button")).toBeInTheDocument();
  });

  test("quick actions exist", () => {
    mockFetcher.get.mockResolvedValueOnce({ data: {} });

    render(
      <MemoryRouter>
        <Dashboard fetcher={mockFetcher} storage={mockStorage} apiBaseUrl="http://test.com" />
      </MemoryRouter>
    );

    expect(screen.getByTestId("quick-deposit")).toBeInTheDocument();
    expect(screen.getByTestId("quick-withdraw")).toBeInTheDocument();
  });
});
