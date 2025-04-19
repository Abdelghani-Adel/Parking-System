"use client";

import MUIDatatable from "@/components/ui/MuiDataTable";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/shadcn/ui/alert-dialog";
import { Button } from "@/components/ui/shadcn/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/shadcn/ui/sheet";
import { transformRecordsToTable } from "@/utils/transform";
import { MUIDataTableColumn } from "mui-datatables";
import { FC, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";
import { TbCancel } from "react-icons/tb";
import { PiPlugsConnectedBold } from "react-icons/pi";
import userList from "@/public/data/user-list.json";
import UserForm from "../forms/UserForm";

const UserTable = () => {
  const [selectedDispenser, setSelectedUser] = useState<string[] | null>();
  const [isEditing, setIsEditing] = useState(false);
  const [isSuspending, setIsSuspending] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const columnOrder = transformRecordsToTable(userList, ["id", "name", "role", "email", "phone"]);

  const tableHeaders: MUIDataTableColumn[] = [
    {
      name: "id",
    },
    {
      name: "Name",
    },
    {
      name: "ip",
    },
    {
      name: "status",
    },
    {
      name: "parkingName",
    },
    {
      name: "Actions",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value: any, tableMeta: any) => {
          const rowData = tableMeta.rowData;
          return (
            <ActionsColumn
              clickedRowData={rowData}
              setSelectedData={(data) => setSelectedUser(data)}
              onStartEdit={() => setIsEditing(true)}
              onStartSuspend={() => setIsSuspending(true)}
              onStartDelete={() => setIsDeleting(true)}
            />
          );
        },
      },
    },
  ];

  const tableOptions = {
    customToolbar: () => {
      return <AddButton onClick={() => setIsAdding(true)} />;
    },
  };

  return (
    <>
      <MUIDatatable options={tableOptions} columns={tableHeaders} data={columnOrder} />

      <Sheet open={isEditing} onOpenChange={setIsEditing}>
        <SheetContent className="sm:max-w-full w-[600px] overflow-auto">
          <SheetHeader>
            <SheetTitle>Editing User</SheetTitle>

            <UserForm onSubmit={() => {}} id={"1"} />
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Sheet open={isAdding} onOpenChange={setIsAdding}>
        <SheetContent className="sm:max-w-full w-[600px] overflow-auto">
          <SheetHeader>
            <SheetTitle>Adding User</SheetTitle>

            <UserForm onSubmit={() => {}} />
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <AlertDialog open={isSuspending} onOpenChange={setIsSuspending}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you Sure?</AlertDialogTitle>
            <AlertDialogDescription>You are suspending this User</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Yes, suspend</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={isDeleting} onOpenChange={setIsDeleting}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you Sure?</AlertDialogTitle>
            <AlertDialogDescription>You are deleting this User</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button variant="destructive">Yes, delete</Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

interface IActionsProps {
  setSelectedData: (data: string[]) => void;
  onStartEdit: () => void;
  onStartSuspend: () => void;
  onStartDelete: () => void;
  clickedRowData: string[];
}

const ActionsColumn: FC<IActionsProps> = (props) => {
  return (
    <div className="flex items-center gap-4 text-xl" onClick={() => props.setSelectedData(props.clickedRowData)}>
      <button title="Edit" onClick={() => props.onStartEdit()}>
        <FaRegEdit className="text-blue-500" />
      </button>

      <button title="Suspend" onClick={() => props.onStartSuspend()}>
        <TbCancel className="text-yellow-500" />
      </button>

      <button title="Delete" onClick={() => props.onStartDelete()}>
        <MdOutlineDelete className="text-red-500" />
      </button>
    </div>
  );
};

const AddButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button onClick={onClick} className="order-first text-sidebar-foreground text-3xl me-2" title="Add new parking">
      <IoMdAddCircle />
    </button>
  );
};

export default UserTable;
