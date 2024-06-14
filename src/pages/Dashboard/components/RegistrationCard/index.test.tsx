import { render, screen } from "@testing-library/react";
import { DeleteButton } from "./DeleteButton";
import { withMockQueryClient } from "~/mocks/queryClient";
import userEvent from "@testing-library/user-event";
import { Toaster } from "react-hot-toast";
import { ReviewedActions } from "./ReviewedActions";
import { Registration } from "../Columns";
import { ReviewerActions } from "./ReviewerActions";
import { RegistrationCard } from ".";

const registration = {
  admissionDate: "22/10/2023",
  email: "luiz@caju.com.br",
  employeeName: "Luiz Filho",
  status: "REPROVED",
  cpf: "56642105087",
  id: "3",
} satisfies Registration;

describe("DeleteButton", () => {
  it("should render correctly", () => {
    render(withMockQueryClient(<DeleteButton id="123" key={1} />));
    const button = screen.getByRole("button");

    expect(button).toBeDefined();
  });

  it("should open modal on button click", async () => {
    const user = userEvent.setup();
    render(
      withMockQueryClient(
        <>
          <DeleteButton id="123" key={1} />
          <Toaster />
        </>
      )
    );

    const button = screen.getByRole("button");

    await user.click(button);

    expect(screen.getByText(/deseja excluir esse registro?/i)).toBeDefined();
  });
});

describe("ReviewedActions", () => {
  it("should render correctly", () => {
    render(
      withMockQueryClient(<ReviewedActions registration={registration} />)
    );
    const button = screen.getByRole("button", {
      name: /revisar novamente/i,
    });

    expect(button).toBeDefined();
  });

  it("should open modal on button click", async () => {
    const user = userEvent.setup();
    render(
      withMockQueryClient(
        <>
          <ReviewedActions registration={registration} />
          <Toaster />
        </>
      )
    );
    const button = screen.getByRole("button", {
      name: /revisar novamente/i,
    });

    await user.click(button);

    expect(screen.getByText(/deseja revisar novamente?/i)).toBeDefined();
  });
});

describe("ReviewerActions", () => {
  it("should render correctly", () => {
    render(
      withMockQueryClient(<ReviewerActions registration={registration} />)
    );
    const buttonReprove = screen.getByRole("button", {
      name: /reprovar/i,
    });
    const buttonApprove = screen.getByRole("button", {
      name: /aprovar/i,
    });

    expect(buttonReprove).toBeDefined();
    expect(buttonApprove).toBeDefined();
  });

  it("should open modal on approve button click", async () => {
    const user = userEvent.setup();
    render(
      withMockQueryClient(
        <>
          <ReviewerActions registration={registration} />
          <Toaster />
        </>
      )
    );
    const button = screen.getByRole("button", {
      name: /aprovar/i,
    });

    await user.click(button);

    expect(screen.getByText(/deseja aprovar esse registro?/i)).toBeDefined();
  });

  it("should open modal on reprove button click", async () => {
    const user = userEvent.setup();
    render(
      withMockQueryClient(
        <>
          <ReviewerActions registration={registration} />
          <Toaster />
        </>
      )
    );
    const button = screen.getByRole("button", {
      name: /reprovar/i,
    });

    await user.click(button);

    expect(screen.getByText(/deseja reprovar esse registro?/i)).toBeDefined();
  });
});

describe("RegistrationCard", () => {
  it("should render correctly", () => {
    render(withMockQueryClient(<RegistrationCard data={registration} />));

    expect(screen.getByText(registration.email)).toBeDefined();
    expect(screen.getByText(registration.admissionDate)).toBeDefined();
    expect(screen.getByText(registration.employeeName)).toBeDefined();
  });

  it("should render with revision again enabled", () => {
    render(withMockQueryClient(<RegistrationCard data={registration} />));

    expect(
      screen.getByRole("button", {
        name: /revisar novamente/i,
      })
    ).toBeDefined();
  });

  it("should render with approve / reprove enabled", () => {
    render(
      withMockQueryClient(
        <RegistrationCard data={{ ...registration, status: "REVIEW" }} />
      )
    );

    expect(
      screen.getByRole("button", {
        name: /reprovar/i,
      })
    ).toBeDefined();
    expect(
      screen.getByRole("button", {
        name: /aprovar/i,
      })
    ).toBeDefined();
  });
});
