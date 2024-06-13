import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTrash,
} from "react-icons/hi";
import { Actions, Card, IconAndText } from "./styles";
import { Button } from "~/components/Buttons";
import { Registration } from "../Columns";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  deleteRegistration,
  updateRegistrationStatus,
} from "~/services/registrations";

type Props = {
  data: Registration;
};

export function RegistrationCard({ data }: Props) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: updateRegistrationStatus,
    mutationKey: ["update-registration", data.id],
    onSuccess() {
      queryClient.invalidateQueries();
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteRegistration,
    mutationKey: ["delete-registration", data.id],
    onSuccess() {
      queryClient.invalidateQueries();
    },
  });

  return (
    <Card>
      <IconAndText>
        <HiOutlineUser />
        <h3>{data.employeeName}</h3>
      </IconAndText>
      <IconAndText>
        <HiOutlineMail />
        <p>{data.email}</p>
      </IconAndText>
      <IconAndText>
        <HiOutlineCalendar />
        <span>{data.admissionDate}</span>
      </IconAndText>
      <Actions>
        <Button.Small
          onClick={() =>
            mutation.mutate({
              registration: data,
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
              registration: data,
              status: "APPROVED",
            })
          }
          bgcolor="rgb(155, 229, 155)"
        >
          Aprovar
        </Button.Small>
        <Button.Small
          onClick={() =>
            mutation.mutate({
              registration: data,
              status: "REVIEW",
            })
          }
          bgcolor="#ff8858"
        >
          Revisar novamente
        </Button.Small>

        <HiOutlineTrash
          onClick={() => {
            deleteMutation.mutate(data.id);
          }}
        />
      </Actions>
    </Card>
  );
}
