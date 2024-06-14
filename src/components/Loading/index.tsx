import { HiOutlineClock } from "react-icons/hi";
import { LoadingWrapper } from "./styles";

export function Loading() {
  return (
    <LoadingWrapper title="icone de carregamento">
      <HiOutlineClock />
    </LoadingWrapper>
  );
}
