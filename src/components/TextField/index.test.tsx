import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TextField } from ".";

describe("TextField", () => {
  it("should render correctly", () => {
    render(<TextField id="test-field" label="comentario" />);

    expect(screen.getByLabelText(/comentario/i)).toBeDefined();
  });

  it("should be able to input content on field", async () => {
    const user = userEvent.setup();
    render(<TextField id="test-field" label="comentario" />);

    const input = screen.getByLabelText(/comentario/i);
    await user.type(input, "conteudo novo");

    expect(input).toHaveProperty("value", "conteudo novo");
  });

  it("should render error", () => {
    render(
      <TextField id="test-field" label="comentario" error="input com erro" />
    );

    expect(screen.getByText(/input com erro/)).toBeDefined();
  });
});
