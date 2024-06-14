import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { HiOutlineTrash } from "react-icons/hi";
import { deleteRegistration } from "~/services/registrations";

export function DeleteButton({ id }: { id: string }) {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteRegistration,
    mutationKey: ["delete-registration", id],
    onSuccess() {
      queryClient.invalidateQueries();
      toast.success("Registro excluído com sucesso");
    },
    onError() {
      toast.error(
        "Não foi possível excluir o registro, tente novamente mais tarde"
      );
    },
  });

  return (
    <HiOutlineTrash
      onClick={() => {
        deleteMutation.mutate(id);
      }}
    />
  );
}
