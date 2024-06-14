import { ReactNode } from "react";
import { ModalWrapper } from "./styles";

export function ToastModal({ children }: { children: ReactNode }) {
  return <ModalWrapper>{children}</ModalWrapper>;
}
