import { InputHTMLAttributes } from "react";
import { ErrorSpan, Input } from "./styles";

type Props = {
  label?: string;
  error?: string;
} & InputHTMLAttributes<any>;

export function TextField({ id, label, error, ...rest }: Props) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <Input {...rest} />
      <ErrorSpan>{error}</ErrorSpan>
    </div>
  );
}
