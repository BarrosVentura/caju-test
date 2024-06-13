import { IconButtonStyled } from "./styles";

type IconButtonProps = {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>;

export function IconButton({ children, ...rest }: IconButtonProps) {
  return <IconButtonStyled {...rest}>{children}</IconButtonStyled>;
}
