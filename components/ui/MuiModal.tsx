import Modal from "@mui/material/Modal";
import { ReactNode } from "react";

interface IProps {
  isOpened: boolean;
  children: ReactNode;
  onClose?: () => void;
}

export default function MuiModal(props: IProps) {
  const { isOpened, children, onClose } = props;

  return (
    <Modal
      open={isOpened}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">{children}</div>
    </Modal>
  );
}
