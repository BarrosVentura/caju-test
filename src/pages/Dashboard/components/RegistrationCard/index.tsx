import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
} from "react-icons/hi";
import { Actions, Card, IconAndText } from "./styles";
import { Registration } from "../Columns";
import { DeleteButton } from "./DeleteButton";
import { ReviewedActions } from "./ReviewedActions";
import { ReviewerActions } from "./ReviewerActions";

type Props = {
  data: Registration;
};

export function RegistrationCard({ data }: Props) {
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
        {data.status != "REVIEW" ? (
          <ReviewedActions registration={data} />
        ) : (
          <ReviewerActions registration={data} />
        )}

        <DeleteButton id={data.id} />
      </Actions>
    </Card>
  );
}
