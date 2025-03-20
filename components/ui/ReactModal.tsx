"use client";
import React, { FC, ReactNode, useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#fff",
  },
};

Modal.setAppElement("#modalContainer");

interface IProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const ReactModal: FC<IProps> = (props) => {
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.onClose}
        style={customStyles}
        overlayClassName="absolute top-0 left-0 w-full h-full bg-black/35"
      >
        {props.children}
      </Modal>
    </div>
  );
};

export default ReactModal;
