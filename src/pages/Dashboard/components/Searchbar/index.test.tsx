import { render, screen } from "@testing-library/react";
import { SearchBar } from ".";
import { withMockQueryClient } from "~/mocks/queryClient";
import { withMockRouterDom } from "~/mocks/routerDom";
import userEvent from "@testing-library/user-event";

describe("SearchBar", () => {
  it("should render correctly", () => {
    render(withMockQueryClient(withMockRouterDom(<SearchBar />)));

    expect(
      screen.getByRole("button", {
        name: /nova admissão/i,
      })
    ).toBeDefined();
  });

  it("should be able to refetch data", async () => {
    const user = userEvent.setup();
    render(withMockQueryClient(withMockRouterDom(<SearchBar />)));

    const refetchButton = screen.getByRole("button", {
      name: /refetch/i,
    });

    const input = screen.getByPlaceholderText(/digite um cpf válido/i);

    await user.type(input, "123");

    await user.click(refetchButton);

    expect(input).toHaveProperty("value", "");
  });

  it("should be able to mask cpf input", async () => {
    const user = userEvent.setup();
    render(withMockQueryClient(withMockRouterDom(<SearchBar />)));

    const input = screen.getByPlaceholderText(/digite um cpf válido/i);

    await user.type(input, "27992888049");

    expect(input).toHaveProperty("value", "279.928.880-49");
  });

  it("should be able to show error on invalid cpf", async () => {
    const user = userEvent.setup();
    render(withMockQueryClient(withMockRouterDom(<SearchBar />)));

    const input = screen.getByPlaceholderText(/digite um cpf válido/i);

    await user.type(input, "2342342365344");

    const errorSpan = screen.getByText(/cpf precisa ser válido/i);

    expect(errorSpan).toBeDefined();
  });
});
