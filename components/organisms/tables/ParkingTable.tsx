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
import ParkingForm from "../forms/ParkingForm";
import { useAppSelector } from "@/redux/store";
import { useCurrencyDictionary } from "@/hooks/dictionaries";

const ParkingTable = () => {
  const parkings = useAppSelector((state) => state.parkings.data);
  const currencyDictionary = useCurrencyDictionary();

  const [selectedId, setSelectedId] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const columnOrder = transformRecordsToTable(parkings, [
    "id",
    "name",
    "currencyId",
    "vatPercentage",
    "isActive",
    "lostTicketFee",
    "lostCardFee",
    "totalCapacity",
    "address",
  ]);

  const tableHeaders: MUIDataTableColumn[] = [
    {
      name: "ID",
    },
    {
      name: "Name",
    },
    {
      name: "Currency",
      options: {
        customBodyRender: (value: string) => {
          return currencyDictionary[value] || value;
        },
      },
    },
    {
      name: "Vat",
    },
    {
      name: "Active",
    },
    {
      name: "Lost Ticket Fees",
    },
    {
      name: "Lost Card Fees",
    },
    {
      name: "Capacity",
    },
    {
      name: "Address",
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
            <SheetTitle className="text-2xl">Edit Parking</SheetTitle>

            <ParkingForm id={selectedId} onClose={() => setIsEditing(false)} />
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Sheet open={isAdding} onOpenChange={setIsAdding}>
        <SheetContent className="w-96 overflow-auto">
          <SheetHeader>
            <SheetTitle className="text-2xl">Adding Parking</SheetTitle>
            <ParkingForm onClose={() => setIsAdding(false)} />
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <AlertDialog open={isDeleting} onOpenChange={setIsDeleting}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you Sure?</AlertDialogTitle>
            <AlertDialogDescription>
              You are deleting this Parking
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

export default ParkingTable;
