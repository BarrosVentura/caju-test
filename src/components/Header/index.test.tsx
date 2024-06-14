import { render, screen } from "@testing-library/react";
import Header from ".";

describe("Header", () => {
  it("should render correctly", () => {
    render(<Header>conteudo</Header>);
    expect(screen.getByText(/conteudo/i)).toBeDefined();
  });
});
