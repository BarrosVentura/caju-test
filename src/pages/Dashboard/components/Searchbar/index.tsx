import { HiRefresh } from "react-icons/hi";
import { useHistory, useLocation } from "react-router-dom";
import { IconButton } from "~/components/Buttons/IconButton";
import { Button } from "~/components/Buttons";
import { Actions, Container } from "./styles";
import { routes } from "~/router/routes";
import { TextField } from "~/components/TextField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CpfSchema, cpfSchema } from "./schema";
import { useQueryClient } from "@tanstack/react-query";
import { ChangeEvent, useEffect } from "react";
import { cpf } from "~/utils/cpf";

const CPF_WITH_MASK_LENGTH = 14;

export function SearchBar() {
  const history = useHistory();
  const location = useLocation();
  const queryClient = useQueryClient();

  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
    clearErrors
  } = useForm<CpfSchema>({
    resolver: zodResolver(cpfSchema),
  });

  useEffect(() => {
    setValue("cpf", cpf.createMask(cpf.getFromURL(location.search)));
  }, [location.search, setValue]);

  function handleCpfSearch(data: CpfSchema) {
    const searchParams = new URLSearchParams();
    searchParams.set("cpf", data.cpf);

    history.push(`${routes.dashboard}?${searchParams.toString()}`);
  }

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser);
  };

  return (
    <Container>
      <TextField
        placeholder="Digite um CPF válido"
        error={errors["cpf"]?.message}
        {...register("cpf", {
          onChange: (event: ChangeEvent<HTMLInputElement>) => {
            const { target } = event;
            target.value = cpf.createMask(target.value) ?? "";
            if (target.value.length == CPF_WITH_MASK_LENGTH) {
              handleSubmit(handleCpfSearch)();
            }
          },
        })}
      />
      <Actions>
        <IconButton
          aria-label="refetch"
          onClick={() => {
            queryClient.invalidateQueries();
            setValue("cpf", "");
            clearErrors("cpf")
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
