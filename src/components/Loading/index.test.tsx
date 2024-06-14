import { render, screen } from "@testing-library/react";
import { Loading } from ".";

describe("Loading", () => {
  it("should render correctly", () => {
    render(<Loading />);
    expect(screen.getByTitle(/icone de carregamento/i)).toBeDefined();
  });
});
