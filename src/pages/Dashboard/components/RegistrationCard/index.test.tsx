import { render, screen } from "@testing-library/react";
import { DeleteButton } from "./DeleteButton";
import { withMockQueryClient } from "~/mocks/queryClient";
import userEvent from "@testing-library/user-event";
import { Toaster } from "react-hot-toast";

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
