import * as React from "react";
import { ReactNode } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface IProps {
  isOpened: boolean;
  children: ReactNode;
  onClose?: () => void;
}

export default function BasicModal(props: IProps) {
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
