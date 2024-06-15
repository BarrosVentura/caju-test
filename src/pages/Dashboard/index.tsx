import { useQuery } from "@tanstack/react-query";
import { Columns } from "./components/Columns";
import { SearchBar } from "./components/Searchbar";
import { Container } from "./styles";
import { getRegistrations } from "~/services/registrations";
import { useLocation } from "react-router-dom";
import { cpf } from "~/utils/cpf";

export function DashboardPage() {
  const location = useLocation();

  const { data } = useQuery({
    queryFn(ctx) {
      return getRegistrations(ctx.queryKey[1]);
    },
    queryKey: ["registrations", cpf.getFromURL(location.search)],
    meta: {
      error:
        "Tivemos um erro ao buscar os registros, tente novamente mais tarde",
      success: "Dados atualizados com sucesso",
    },
  });

  return (
    <Container>
      <SearchBar />
      <Columns registrations={data?.data} />
    </Container>
  );
}
