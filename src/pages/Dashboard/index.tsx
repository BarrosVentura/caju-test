import { useQuery } from "@tanstack/react-query";
import { Columns } from "./components/Columns";
import { SearchBar } from "./components/Searchbar";
import { Container } from "./styles";
import { getRegistrations } from "~/services/registrations";
import { useLocation } from "react-router-dom";

export function DashboardPage() {
  const location = useLocation();
  const cpfParam = new URLSearchParams(location.search).get("cpf");

  const { data, isLoading, isError } = useQuery({
    queryFn(ctx) {
      return getRegistrations(ctx.queryKey[1]);
    },
    queryKey: ["registrations", cpfParam],
  });

  if (isLoading) {
    return <div>loading</div>;
  }

  if (isError || !data?.data) {
    return <div>a error ocurred</div>;
  }

  return (
    <Container>
      <SearchBar />
      <Columns registrations={data.data} />
    </Container>
  );
}
