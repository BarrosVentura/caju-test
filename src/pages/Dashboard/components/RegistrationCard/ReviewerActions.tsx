import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "~/components/Buttons";
import { updateRegistrationStatus } from "~/services/registrations";
import { Registration } from "../Columns";

export function ReviewerActions({
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
    <>
      <Button.Small
        onClick={() =>
          mutation.mutate({
            registration,
            status: "REPROVED",
          })
        }
        bgcolor="rgb(255, 145, 154)"
      >
        Reprovar
      </Button.Small>
      <Button.Small
        onClick={() =>
          mutation.mutate({
            registration,
            status: "APPROVED",
          })
        }
        bgcolor="rgb(155, 229, 155)"
      >
        Aprovar
      </Button.Small>
    </>
  );
}
