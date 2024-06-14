import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "~/components/Buttons";
import { updateRegistrationStatus } from "~/services/registrations";
import { Registration } from "../Columns";

export function ReviewedActions({
  registration,
}: {
  registration: Registration;
}) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: updateRegistrationStatus,
    mutationKey: ["update-registration", registration.id],
    onSuccess() {
      queryClient.invalidateQueries();
    },
  });

  return (
    <Button.Small
      onClick={() =>
        mutation.mutate({
          registration,
          status: "REVIEW",
        })
      }
      bgcolor="#ff8858"
    >
      Revisar novamente
    </Button.Small>
  );
}
