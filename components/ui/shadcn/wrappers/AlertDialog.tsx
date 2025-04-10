"use client";

import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialog as ShadCnAlertDialog,
} from "../ui/alert-dialog";
import { FC, ReactNode } from "react";

/**
<AlertDialog
  trigger={<button>Delete a user</button>}
  title="Delete a user"
  description="Are you sure you want to delete the user"
  actionText="Confirm"
  onAction={() => {}}
/>
*/

type AlertDialogProps = {
  trigger: ReactNode;
  title: string;
  description: string;
  cancelText?: string;
  actionText: string;
  onAction: () => void;
};

const AlertDialog: FC<AlertDialogProps> = (props) => {
  const { title, description, trigger, cancelText = "Cancel", actionText, onAction } = props;

  return (
    <ShadCnAlertDialog>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{cancelText}</AlertDialogCancel>
          <AlertDialogAction onClick={onAction}>{actionText}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </ShadCnAlertDialog>
  );
};

export default AlertDialog;
