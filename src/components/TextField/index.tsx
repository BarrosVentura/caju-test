import { forwardRef, InputHTMLAttributes } from "react";
import { ErrorSpan, Input } from "./styles";

type Props = {
  label?: string;
  error?: string;
} & InputHTMLAttributes<any>;

export const TextField = forwardRef(function innerTextField(
  { id, label, error, ...rest }: Props,
  ref
) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <Input ref={ref} {...rest} />
      <ErrorSpan>{error}</ErrorSpan>
    </div>
  );
});
