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
import tagList from "@/public/data/tag-list.json";
import { transformRecordsToTable } from "@/utils/transform";
import { MUIDataTableColumn } from "mui-datatables";
import { FC, useState } from "react";
import { FaFileInvoiceDollar, FaRegEdit, FaRegPlayCircle } from "react-icons/fa";
import { GiCardExchange } from "react-icons/gi";
import { IoMdAddCircle } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";
import TagForm from "../forms/TagForm";

const TagTable = () => {
  const [selectedTag, setSelectedTag] = useState<string[] | null>();
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const columnOrder = transformRecordsToTable(tagList, [
    "id",
    "tagNumber",
    "name",
    "type",
    "plan",
    "policies",
    "startDate",
    "endDate",
  ]);

  const tableHeaders: MUIDataTableColumn[] = [
    {
      name: "ID",
    },
    {
      name: "Tag Number",
    },
    {
      name: "Tag Name",
    },
    {
      name: "Tag Type",
    },
    {
      name: "Plan",
    },
    {
      name: "Policies",
    },
    {
      name: "Start Date",
    },
    {
      name: "End Date",
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
              setSelectedData={(data) => setSelectedTag(data)}
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
      <MUIDatatable options={tableOptions} columns={tableHeaders} data={columnOrder} />

      <Sheet open={isEditing} onOpenChange={setIsEditing}>
        <SheetContent className="w-96 overflow-auto">
          <SheetHeader>
            <SheetTitle>Editing Tag</SheetTitle>

            <TagForm onSubmit={() => {}} id={"1"} />
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Sheet open={isAdding} onOpenChange={setIsAdding}>
        <SheetContent className="w-96 overflow-auto">
          <SheetHeader>
            <SheetTitle>Adding Tag</SheetTitle>

            <TagForm onSubmit={() => {}} />
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <AlertDialog open={isDeleting} onOpenChange={setIsDeleting}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you Sure?</AlertDialogTitle>
            <AlertDialogDescription>You are deleting this Tag</AlertDialogDescription>
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
    <div className="flex items-center gap-4 text-xl" onClick={() => props.setSelectedData(props.clickedRowData)}>
      <button title="Edit" onClick={() => props.onStartEdit()}>
        <FaRegEdit className="text-blue-500" />
      </button>

      <button title="Delete" onClick={() => props.onStartDelete()}>
        <MdOutlineDelete className="text-red-500" />
      </button>

      <button title="Lost" onClick={() => props.onTestConnection()}>
        <GiCardExchange className="text-yellow-500" />
      </button>

      <button title="Print Invoice" onClick={() => props.onTestConnection()}>
        <FaFileInvoiceDollar className="text-cyan-500" />
      </button>

      <button title="Activate" onClick={() => props.onTestConnection()}>
        <FaRegPlayCircle className="text-green-500" />
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

export default TagTable;
