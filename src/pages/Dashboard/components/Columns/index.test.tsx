import { render, screen } from "@testing-library/react";
import { Columns, Registration } from ".";
import { QueryClientProvider } from "@tanstack/react-query";
import { mockQueryClient } from "~/mocks/queryClient";

const registrations = [
  {
    admissionDate: "22/10/2023",
    email: "luiz@caju.com.br",
    employeeName: "Luiz Filho",
    status: "REPROVED",
    cpf: "56642105087",
    id: "3",
  },
] satisfies Registration[];

describe("Columns", () => {
  it("should render correctly", () => {
    render(
      <QueryClientProvider client={mockQueryClient}>
        <Columns registrations={registrations} />
      </QueryClientProvider>
    );

    expect(screen.getByText(/pronto para revisar/i)).toBeDefined();
    expect(screen.getByText(/aprovado/i)).toBeDefined();
    expect(screen.getByText(/reprovado/i)).toBeDefined();
    expect(screen.getByText("luiz@caju.com.br")).toBeDefined();
  });
});
