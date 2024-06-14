import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { HiOutlineTrash } from "react-icons/hi";
import { Button } from "~/components/Buttons";
import { useToastModal } from "~/hooks/useToastModal";
import { deleteRegistration } from "~/services/registrations";

export function DeleteButton({ id }: { id: string }) {
  const { triggerConfirm } = useToastModal();
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteRegistration,
    mutationKey: ["delete-registration", id],
    onSuccess() {
      queryClient.invalidateQueries();
      toast.dismiss();
      toast.success("Registro excluído com sucesso");
    },
    onError() {
      toast.error(
        "Não foi possível excluir o registro, tente novamente mais tarde"
      );
    },
  });

  return (
    <Button.Small
      onClick={() => {
        triggerConfirm(id, "Deseja excluir esse registro?", () => {
          deleteMutation.mutate(id);
        });
      }}
    >
      <HiOutlineTrash />
    </Button.Small>
  );
}
