import { HiRefresh } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import { IconButton } from "~/components/Buttons/IconButton";
import { Button } from "~/components/Buttons";
import { Actions, Container } from "./styles";
import { routes } from "~/router/routes";
import { TextField } from "~/components/TextField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CpfSchema, cpfSchema } from "./schema";
import { useObserveParam } from "~/hooks/useObserveParam";
import { useQueryClient } from "@tanstack/react-query";

export function SearchBar() {
  const history = useHistory();
  const queryClient = useQueryClient();

  const {
    register,
    watch,
    formState: { errors },
  } = useForm<CpfSchema>({
    resolver: zodResolver(cpfSchema),
  });

  const observedCpf = watch("cpf");
  useObserveParam(observedCpf, "cpf");

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser);
  };

  return (
    <Container>
      <TextField
        placeholder="Digite um CPF válido"
        error={errors["cpf"]?.message}
        {...register("cpf")}
      />
      <Actions>
        <IconButton
          aria-label="refetch"
          onClick={() => {
            queryClient.invalidateQueries();
            history.replace(routes.dashboard);
          }}
        >
          <HiRefresh />
        </IconButton>
        <Button.Default onClick={() => goToNewAdmissionPage()}>
          Nova Admissão
        </Button.Default>
      </Actions>
    </Container>
  );
}
