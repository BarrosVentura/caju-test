import { useMutation, useQueryClient } from "@tanstack/react-query";
import { HiOutlineTrash } from "react-icons/hi";
import { deleteRegistration } from "~/services/registrations";

export function DeleteButton({ id }: { id: string }) {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteRegistration,
    mutationKey: ["delete-registration", id],
    onSuccess() {
      queryClient.invalidateQueries();
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
