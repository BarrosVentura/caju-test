import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "~/components/Buttons";
import { updateRegistrationStatus } from "~/services/registrations";
import { Registration } from "../Columns";
import toast from "react-hot-toast";
import { useToastModal } from "~/hooks/useToastModal";

export function ReviewedActions({
  registration,
}: {
  registration: Registration;
}) {
  const { triggerConfirm } = useToastModal();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: updateRegistrationStatus,
    mutationKey: ["update-registration", registration.id],
    onSuccess() {
      queryClient.invalidateQueries();
    },
    onError() {
      toast.error(
        "Tivemos um erro ao atualizar a informação, por favor tente novamente"
      );
    },
  });

  return (
    <Button.Small
      onClick={() =>
        triggerConfirm(registration.id, "Deseja revisar novamente?", () => {
          mutation.mutate({
            registration,
            status: "REVIEW",
          });
        })
      }
      bgcolor="#ff8858"
    >
      Revisar novamente
    </Button.Small>
  );
}
