import { ReactNode } from "react";
import { Toaster, toast } from "react-hot-toast";

export function withToast(element: ReactNode) {
  return (
    <>
      {element}
      <Toaster />
    </>
  );
}

beforeEach(() => {
  toast.remove();
});
