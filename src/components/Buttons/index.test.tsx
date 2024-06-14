import { render, screen } from "@testing-library/react";
import { Button } from ".";
import { HiAcademicCap } from "react-icons/hi";

describe("Button", () => {
  it("should show default button", () => {
    render(<Button.Default>Ativar</Button.Default>);
    expect(screen.getByRole("button", { name: /ativar/i })).toBeDefined();
  });

  it("should show icon button", () => {
    render(
      <Button.Icon>
        <HiAcademicCap />
      </Button.Icon>
    );
    expect(screen.getByRole("button")).toBeDefined();
  });

  it("should show small button", () => {
    render(<Button.Small>confirmar</Button.Small>);
    expect(screen.getByRole("button", { name: /confirmar/i })).toBeDefined();
  });
});
