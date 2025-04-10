"use client";
import { FC, ReactNode } from "react";

import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Dialog as ShadcnDialog,
} from "../ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";

/**
<Dialog
  trigger={<button>open dialog</button>}
  closer={<button className="ms-auto bg-gray-100 p-3 rounded-lg">Close dialog</button>}
  title="ddd"
  description="ddd"
>
  dialog content
</Dialog>
*/

interface DialogProps {
  trigger: ReactNode;
  closer?: ReactNode;
  title: string;
  description: string;
  children: ReactNode;
}

const Dialog: FC<DialogProps> = (props) => {
  const { trigger, closer, children, title, description } = props;

  return (
    <ShadcnDialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        {children}

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>{closer}</DialogClose>
        </DialogFooter>
      </DialogContent>
    </ShadcnDialog>
  );
};

export default Dialog;
