import { Collumns } from "./components/Columns";
import { SearchBar } from "./components/Searchbar";
import { Container } from "./styles";

export function DashboardPage() {
  return (
    <Container>
      <SearchBar />
      <Collumns registrations={[]} />
    </Container>
  );
}
