import toast from "react-hot-toast";
import { HiExclamationCircle } from "react-icons/hi";
import { Button } from "~/components/Buttons";
import { ToastModal } from "~/components/ToastModal";

export function useToastModal() {
  function triggerConfirm(id: string, title: string, callback: () => void) {
    toast.dismiss();
    toast(
      <ToastModal>
        <p>{title}</p>
        <div>
          <Button.Small
            bgcolor="rgb(155, 229, 155)"
            onClick={() => {
              callback();
              toast.dismiss(id);
            }}
          >
            sim
          </Button.Small>
          <Button.Small
            bgcolor="rgb(255, 145, 154)"
            onClick={() => toast.dismiss()}
          >
            não
          </Button.Small>
        </div>
      </ToastModal>,
      {
        id,
        duration: Infinity,
        icon: <HiExclamationCircle style={{ width: "26px", height: "26px" }} />,
      }
    );
  }

  return {
    triggerConfirm,
  };
}
