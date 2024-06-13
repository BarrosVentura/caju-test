import { render, screen } from "@testing-library/react";
import { Button } from ".";

describe("Button", () => {
  it("Should show button", () => {
    render(<Button.Default>Ativar</Button.Default>);
    expect(screen.getByRole("button", { name: /ativar/i }));
  });
});
