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
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";
import { TbCancel } from "react-icons/tb";
import DispenserForm from "./dispenser-form";
import dispensers from "./dispenser-list-data.json";

const DispenserTable = () => {
  const [selectedDispenser, setSelectedDispenser] = useState<string[] | null>();
  const [isEditing, setIsEditing] = useState(false);
  const [isSuspending, setIsSuspending] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const data = transformRecordsToTable(dispensers, ["id", "name", "ip", "parkingName"]);

  const columns: MUIDataTableColumn[] = [
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
            <div
              className="flex items-center gap-4 text-xl"
              onClick={() => {
                setSelectedDispenser(rowData);
                console.log(rowData);
              }}
            >
              <button title="Edit" onClick={() => setIsEditing(true)}>
                <FaRegEdit className="text-blue-500" />
              </button>

              <button title="Suspend" onClick={() => setIsSuspending(true)}>
                <TbCancel className="text-yellow-500" />
              </button>

              <button title="Delete" onClick={() => setIsDeleting(true)}>
                <MdOutlineDelete className="text-red-500" />
              </button>
            </div>
          );
        },
      },
    },
  ];

  return (
    <>
      <MUIDatatable
        options={{
          customToolbar: () => {
            return (
              <button
                onClick={() => setIsAdding(true)}
                className="order-first text-sidebar-foreground text-3xl me-2"
                title="Add new parking"
              >
                <IoMdAddCircle />
              </button>
            );
          },
        }}
        title="Users List"
        columns={columns}
        data={data}
      />

      <Sheet open={isEditing} onOpenChange={setIsEditing}>
        <SheetContent className="sm:max-w-full w-[600px] overflow-auto">
          <SheetHeader>
            <SheetTitle>Editing Dispenser</SheetTitle>

            <DispenserForm mode="edit" onSubmit={() => {}} initialValues={selectedDispenser} />
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Sheet open={isAdding} onOpenChange={setIsAdding}>
        <SheetContent className="sm:max-w-full w-[600px] overflow-auto">
          <SheetHeader>
            <SheetTitle>Adding Dispenser</SheetTitle>

            <DispenserForm mode="add" onSubmit={() => {}} />
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <AlertDialog open={isSuspending} onOpenChange={setIsSuspending}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you Sure?</AlertDialogTitle>
            <AlertDialogDescription>You are suspending this category</AlertDialogDescription>
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
            <AlertDialogDescription>You are deleting this category</AlertDialogDescription>
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

export default DispenserTable;
