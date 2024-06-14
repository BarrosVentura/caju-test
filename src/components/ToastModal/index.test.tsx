import { render, screen } from "@testing-library/react";
import { ToastModal } from ".";

describe("ToastModal", () => {
  it("should render correctly", () => {
    render(<ToastModal>content</ToastModal>);

    expect(screen.getByText(/content/)).toBeDefined();
  });
});
