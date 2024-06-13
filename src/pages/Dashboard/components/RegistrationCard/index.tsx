import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTrash,
} from "react-icons/hi";
import { Actions, Card, IconAndText } from "./styles";
import { Button } from "~/components/Buttons";

type Props = {
  data: any;
};

const RegistrationCard = (props: Props) => {
  return (
    <Card>
      <IconAndText>
        <HiOutlineUser />
        <h3>{props.data.employeeName}</h3>
      </IconAndText>
      <IconAndText>
        <HiOutlineMail />
        <p>{props.data.email}</p>
      </IconAndText>
      <IconAndText>
        <HiOutlineCalendar />
        <span>{props.data.admissionDate}</span>
      </IconAndText>
      <Actions>
        <Button.Small bgcolor="rgb(255, 145, 154)">Reprovar</Button.Small>
        <Button.Small bgcolor="rgb(155, 229, 155)">Aprovar</Button.Small>
        <Button.Small bgcolor="#ff8858">Revisar novamente</Button.Small>

        <HiOutlineTrash />
      </Actions>
    </Card>
  );
};

export default RegistrationCard;
