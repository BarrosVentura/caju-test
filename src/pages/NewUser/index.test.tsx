import { render, screen, waitFor } from "@testing-library/react";
import { withMockQueryClient } from "~/mocks/queryClient";
import { withMockRouterDom } from "~/mocks/routerDom";
import { NewUserPage } from ".";
import userEvent from "@testing-library/user-event";
import { withToast } from "~/mocks/toaster";
import { server } from "~/test/serverSetup";
import { rest } from "msw";
import { BASE_URL } from "~/mocks/server";

describe("NewUser", () => {
  it("should render correctly", () => {
    render(withMockQueryClient(withMockRouterDom(<NewUserPage />)));

    expect(
      screen.getByRole("button", {
        name: /cadastrar/i,
      })
    );
  });

  it("should be able to register", async () => {
    const user = userEvent.setup();
    render(withMockQueryClient(withMockRouterDom(withToast(<NewUserPage />))));

    const nameInput = screen.getByLabelText(/nome/i);
    const emailInput = screen.getByLabelText(/email/i);
    const cpfInput = screen.getByLabelText(/cpf/i);
    const dateInput = screen.getByLabelText(/data de admissão/i);
    const submitButton = screen.getByRole("button", {
      name: /cadastrar/i,
    });

    await user.type(nameInput, "Joao Jose");
    await user.type(emailInput, "joaojose@email.com");
    await user.type(cpfInput, "14445124044");
    await user.type(dateInput, "1996-05-09");

    await user.click(submitButton);

    const yesButton = await waitFor(() =>
      screen.getByRole("button", {
        name: /sim/i,
      })
    );

    await user.click(yesButton);

    const confirmation = await waitFor(() =>
      screen.getByText(/registro adicionado com sucesso/i)
    );

    expect(confirmation).toBeDefined();
  });

  it("should be able to fire errors", async () => {
    const user = userEvent.setup();
    const renderContent = withMockQueryClient(
      withMockRouterDom(withToast(<NewUserPage />))
    );
    const { rerender } = render(renderContent);

    const submitButton = screen.getByRole("button", {
      name: /cadastrar/i,
    });

    await user.click(submitButton);

    rerender(renderContent);

    const nameInputError = screen.getByText(/tamanho de nome inválido/i);
    const emailInputError = screen.getByText(/insira um email válido/i);
    const cpfInputError = screen.getByText(/cpf precisa ser válido/i);
    const dateInputError = screen.getByText(/adicione uma data válida/i);

    expect(nameInputError).toBeDefined();
    expect(emailInputError).toBeDefined();
    expect(cpfInputError).toBeDefined();
    expect(dateInputError).toBeDefined();
  });

  it("should be able to throw error", async () => {
    server.use(
      rest.post(`${BASE_URL}/registrations`, (_, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    const user = userEvent.setup();
    render(withMockQueryClient(withMockRouterDom(withToast(<NewUserPage />))));

    const nameInput = screen.getByLabelText(/nome/i);
    const emailInput = screen.getByLabelText(/email/i);
    const cpfInput = screen.getByLabelText(/cpf/i);
    const dateInput = screen.getByLabelText(/data de admissão/i);
    const submitButton = screen.getByRole("button", {
      name: /cadastrar/i,
    });

    await user.type(nameInput, "Joao Jose");
    await user.type(emailInput, "joaojose@email.com");
    await user.type(cpfInput, "14445124044");
    await user.type(dateInput, "1996-05-09");

    await user.click(submitButton);

    const yesButton = await waitFor(() =>
      screen.getByRole("button", {
        name: /sim/i,
      })
    );

    await user.click(yesButton);

    const confirmation = await waitFor(() =>
      screen.getByText(
        /não foi possível adicionar o registro nesse momento, tente novamente mais tarde/i
      )
    );

    expect(confirmation).toBeDefined();
  });
});
