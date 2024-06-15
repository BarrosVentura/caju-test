import { render, screen, waitFor } from "@testing-library/react";
import { withMockQueryClient } from "~/mocks/queryClient";
import { withMockRouterDom } from "~/mocks/routerDom";
import { DashboardPage } from ".";
import userEvent from "@testing-library/user-event";
import { withToast } from "~/mocks/toaster";

describe("Dashboard", () => {
  it("should render correctly with content", async () => {
    render(withMockQueryClient(withMockRouterDom(<DashboardPage />)));
    const user = await waitFor(() => screen.getByText(/luiz filho/i));
    expect(user).toBeDefined();
  });

  it("should be able to filter cpf", async () => {
    const user = userEvent.setup();
    const renderContent = withMockQueryClient(
      withMockRouterDom(<DashboardPage />)
    );
    const { rerender } = render(renderContent);

    const input = screen.getByPlaceholderText(/digite um cpf válido/i);

    await user.type(input, "43791924079");

    rerender(renderContent);

    const userFound = await waitFor(() => screen.getByText(/filipe marins/i));
    const userNotFound = screen.queryByText(/luiz filho/i);

    expect(userFound).toBeDefined();
    expect(userNotFound).toBeNull();
  });

  it("should be able to refetch", async () => {
    const user = userEvent.setup();
    const renderContent = withMockQueryClient(
      withMockRouterDom(<DashboardPage />)
    );
    const { rerender } = render(renderContent);

    const input = screen.getByPlaceholderText(/digite um cpf válido/i);

    await user.type(input, "43791924079");

    rerender(renderContent);

    const button = screen.getByLabelText(/refetch/i);

    await user.click(button);

    const userFound1 = await waitFor(() => screen.getByText(/filipe marins/i));
    const userFound2 = screen.getByText(/luiz filho/i);

    expect(userFound1).toBeDefined();
    expect(userFound2).toBeDefined();
  });

  it("should be able to delete a card", async () => {
    const user = userEvent.setup();
    const renderContent = withMockQueryClient(
      withMockRouterDom(withToast(<DashboardPage />))
    );
    render(renderContent);

    const buttons = await waitFor(() =>
      screen.getAllByTitle(/deletar registro/i)
    );

    await user.click(buttons[0]);

    const yesButton = screen.getByRole("button", {
      name: /sim/i,
    });

    await user.click(yesButton);

    const toastContent = await waitFor(() =>
      screen.getByText(/registro excluído com sucesso/i)
    );

    expect(toastContent).toBeDefined();
  });

  it("should be able to reprove a card", async () => {
    const user = userEvent.setup();
    const renderContent = withMockQueryClient(
      withMockRouterDom(withToast(<DashboardPage />))
    );
    render(renderContent);

    const button = await waitFor(() =>
      screen.getByRole("button", {
        name: /reprovar/i,
      })
    );

    await user.click(button);

    const yesButton = screen.getByRole("button", {
      name: /sim/i,
    });

    await user.click(yesButton);

    const toastContent = await waitFor(() =>
      screen.getByText(/dados atualizados com sucesso/i)
    );

    expect(toastContent).toBeDefined();
  });

  it("should be able to reprove a card", async () => {
    const user = userEvent.setup();
    const renderContent = withMockQueryClient(
      withMockRouterDom(withToast(<DashboardPage />))
    );
    render(renderContent);

    const button = await waitFor(() =>
      screen.getByRole("button", {
        name: /aprovar/i,
      })
    );

    await user.click(button);

    const yesButton = screen.getByRole("button", {
      name: /sim/i,
    });

    await user.click(yesButton);

    const toastContent = await waitFor(() =>
      screen.getByText(/dados atualizados com sucesso/i)
    );

    expect(toastContent).toBeDefined();
  });
  it("should be able to review again a card", async () => {
    const user = userEvent.setup();
    const renderContent = withMockQueryClient(
      withMockRouterDom(withToast(<DashboardPage />))
    );
    render(renderContent);

    const button = await waitFor(() =>
      screen.getByRole("button", {
        name: /revisar novamente/i,
      })
    );

    await user.click(button);

    const yesButton = screen.getByRole("button", {
      name: /sim/i,
    });

    await user.click(yesButton);

    const toastContent = await waitFor(() =>
      screen.getByText(/dados atualizados com sucesso/i)
    );

    expect(toastContent).toBeDefined();
  });
});
