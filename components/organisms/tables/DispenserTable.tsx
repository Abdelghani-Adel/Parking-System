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
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/shadcn/ui/sheet";
import { transformRecordsToTable } from "@/utils/transform";
import { MUIDataTableColumn } from "mui-datatables";
import { FC, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";
import { PiPlugsConnectedBold } from "react-icons/pi";
import DispenserForm from "../forms/DispenserForm";
import { useAppSelector } from "@/redux/store";
import {
  useDispenserTypeDictionary,
  useParkingDictionary,
} from "@/hooks/dictionaries";

const DispenserTable = () => {
  const dispenserList = useAppSelector((state) => state.dispensers.data);
  const parkingDictionary = useParkingDictionary();
  const dispenserTypesDictionary = useDispenserTypeDictionary();

  const [selectedId, setSelectedId] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const columnOrder = transformRecordsToTable(dispenserList, [
    "id",
    "name",
    "dispenserUrl",
    "status",
    "dispenserTypeId",
    "parkingId",
  ]);

  const tableHeaders: MUIDataTableColumn[] = [
    {
      name: "id",
    },
    {
      name: "Name",
    },
    {
      name: "Dispenser URL",
    },
    {
      name: "Status",
      options: {
        customBodyRender: (value: string) => {
          const isOnline = value.toLowerCase() === "online";
          return (
            <div
              className={`flex items-center gap-2 px-2 py-1 rounded-full text-xs font-medium w-max ${
                isOnline
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isOnline ? "bg-green-500" : "bg-red-500"
                }`}
              />
              {value}
            </div>
          );
        },
      },
    },
    {
      name: "Dispenser Type",
      options: {
        customBodyRender: (value: string) => {
          return dispenserTypesDictionary[value] || value;
        },
      },
    },
    {
      name: "Parking",
      options: {
        customBodyRender: (value: string) => {
          return parkingDictionary[value] || value;
        },
      },
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
              setSelectedData={(data) => setSelectedId(data[0])}
              onStartEdit={() => setIsEditing(true)}
              onStartDelete={() => setIsDeleting(true)}
              onTestConnection={() => {}}
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
      <MUIDatatable
        options={tableOptions}
        columns={tableHeaders}
        data={columnOrder}
      />

      <Sheet open={isEditing} onOpenChange={setIsEditing}>
        <SheetContent className="w-96 overflow-auto">
          <SheetHeader>
            <SheetTitle>Editing Dispenser</SheetTitle>

            <DispenserForm id={selectedId} />
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Sheet open={isAdding} onOpenChange={setIsAdding}>
        <SheetContent className="w-96 overflow-auto">
          <SheetHeader>
            <SheetTitle>Adding Dispenser</SheetTitle>

            <DispenserForm />
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <AlertDialog open={isDeleting} onOpenChange={setIsDeleting}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you Sure?</AlertDialogTitle>
            <AlertDialogDescription>
              You are deleting this Dispenser
            </AlertDialogDescription>
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
  onStartDelete: () => void;
  onTestConnection: () => void;
  clickedRowData: string[];
}

const ActionsColumn: FC<IActionsProps> = (props) => {
  return (
    <div
      className="flex items-center gap-4 text-xl"
      onClick={() => props.setSelectedData(props.clickedRowData)}
    >
      <button title="Edit" onClick={() => props.onStartEdit()}>
        <FaRegEdit className="text-blue-500" />
      </button>

      <button title="Delete" onClick={() => props.onStartDelete()}>
        <MdOutlineDelete className="text-red-500" />
      </button>

      <button title="Test Connection" onClick={() => props.onTestConnection()}>
        <PiPlugsConnectedBold className="text-green-500" />
      </button>
    </div>
  );
};

const AddButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="order-first text-sidebar-foreground text-3xl me-2"
      title="Add new parking"
    >
      <IoMdAddCircle />
    </button>
  );
};

export default DispenserTable;
