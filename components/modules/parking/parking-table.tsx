"use client";

import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/shadcn/ui/alert-dialog";
import { AlertDialog } from "@radix-ui/react-alert-dialog";
import { MUIDataTableColumn } from "mui-datatables";
import React, { useState } from "react";
import { FaRegEdit, FaUserAltSlash } from "react-icons/fa";
import { FaUserXmark } from "react-icons/fa6";
import { IoMdAddCircle, IoMdCloseCircleOutline } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";
import { TbCancel } from "react-icons/tb";
import MUIDatatable from "../../ui/MuiDataTable";
import MuiModal from "../../ui/MuiModal";
import { Button } from "../../ui/shadcn/ui/button";
import { Checkbox } from "../../ui/shadcn/ui/checkbox";
import { Input } from "../../ui/shadcn/ui/input";
import { Label } from "../../ui/shadcn/ui/label";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../../ui/shadcn/ui/sheet";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../ui/shadcn/ui/table";
import ParkingForm from "./parking-form";
import useParkingsList from "./useParkingsList";

const ParkingTable: React.FC = () => {
  const parkings = useParkingsList();

  const [selectedParking, setSelectedParking] = useState<string[] | null>();
  const [isEditing, setIsEditing] = useState(false);
  const [isSuspending, setIsSuspending] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  if (!parkings) return null;

  const data = transformRecordsToArray(
    parkings,
    ["id", "name", "type", "currency", "feesType", "lostTicketFees"],
    ["dispensers"]
  );

  const columns: MUIDataTableColumn[] = [
    {
      name: "id",
    },
    {
      name: "Name",
    },
    {
      name: "Type",
    },
    {
      name: "Currency",
    },
    {
      name: "Calculation Mode",
    },
    {
      name: "Lost Ticket Fees",
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
                setSelectedParking(rowData);
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
            <SheetTitle>Editing "Main" Parking</SheetTitle>
            <ParkingForm mode="edit" onSubmit={() => {}} initialValues={selectedParking} />
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Sheet open={isAdding} onOpenChange={setIsAdding}>
        <SheetContent className="sm:max-w-full w-[600px] overflow-auto">
          <SheetHeader>
            <SheetTitle>Adding New Parking</SheetTitle>
            <ParkingForm mode="add" onSubmit={() => {}} />
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <AlertDialog open={isSuspending} onOpenChange={setIsSuspending}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you Sure?</AlertDialogTitle>
            <AlertDialogDescription>You are suspending this parking</AlertDialogDescription>
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
            <AlertDialogDescription>You are deleting this parking</AlertDialogDescription>
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

function transformRecordsToArray<T extends Record<string, any>>(
  records: T[],
  orderedKeys: (keyof T)[], // Defines custom order and included keys
  excludeKeys: (keyof T)[] = [] // Keys to exclude
): string[][] {
  return records.map(
    (record) =>
      orderedKeys
        .filter((key) => !excludeKeys.includes(key)) // Exclude unwanted keys
        .map((key) => String(record[key] ?? "")) // Stringify values, handles missing keys
  );
}

interface LabeledInputWithCheckboxProps {
  label: string;
  inputId: string;
  placeholder?: string;
  checkboxLabel?: string;
  defaultValue?: number | string;
  onChange: (value: number | string) => void;
}

const LabeledInputWithCheckbox: React.FC<LabeledInputWithCheckboxProps> = ({
  label,
  inputId,
  placeholder,
  checkboxLabel,
  defaultValue,
  onChange,
}) => {
  const [checked, setChecked] = useState(true);
  return (
    <div className="grid w-full items-center gap-1.5">
      <div className="flex justify-between items-center">
        <Label htmlFor={inputId}>{label}</Label>

        <div className="flex items-center space-x-1">
          <Checkbox id={`${inputId}-checkbox`} checked={checked} onCheckedChange={(checked) => setChecked(!!checked)} />
          <Label
            htmlFor={`${inputId}-checkbox`}
            className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {checkboxLabel}
          </Label>
        </div>
      </div>

      {!checked && (
        <Input
          type="number"
          id={inputId}
          placeholder={placeholder}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      )}
    </div>
  );
};

const PerVehicle = () => {
  const [checked, setChecked] = useState(false);
  const [useDefault, setUseDefault] = useState(true);

  return (
    <>
      <div className="flex items-center space-x-1">
        <Checkbox id="perVehicle" checked={checked} onCheckedChange={(checked) => setChecked(!!checked)} />
        <Label
          htmlFor="perVehicle"
          className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Per Vehicle fees
        </Label>
      </div>

      {checked && (
        <div className="flex items-center space-x-1">
          <Checkbox id="useDefault" checked={useDefault} onCheckedChange={(checked) => setUseDefault(!!checked)} />
          <Label
            htmlFor="useDefault"
            className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Use default vehicle fees
          </Label>
        </div>
      )}

      {!useDefault && checked && <EditableTable />}
    </>
  );
};

type Person = {
  id: number;
  name: string;
  email: string;
};

const initialData: Person[] = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];
function EditableTable() {
  const [formData, setFormData] = useState<Person[]>(initialData);
  const [editRowId, setEditRowId] = useState<number | null>(null);
  const [newRow, setNewRow] = useState<Person | null>(null);

  const handleChange = <K extends keyof Person>(index: number, key: K, value: Person[K]) => {
    const updated = [...formData];
    updated[index] = {
      ...updated[index],
      [key]: value,
    };
    setFormData(updated);
  };

  const handleNewChange = <K extends keyof Person>(key: K, value: Person[K]) => {
    if (newRow) {
      setNewRow({
        ...newRow,
        [key]: value,
      });
    }
  };

  const handleAddNew = () => {
    const newId = formData.length > 0 ? formData[formData.length - 1].id + 1 : 1;
    setNewRow({ id: newId, name: "", email: "" });
  };

  const handleSaveNew = () => {
    if (newRow) {
      setFormData([...formData, newRow]);
      setNewRow(null);
    }
  };

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Per Hour</TableHead>
            <TableHead>Per Entry</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>{editRowId === 1 ? <Input defaultValue="Truck" onChange={(e) => {}} /> : "Truck"}</TableCell>
            <TableCell>{editRowId === 1 ? <Input defaultValue="10" onChange={(e) => {}} /> : "10"}</TableCell>
            <TableCell>{editRowId === 1 ? <Input defaultValue="20" onChange={(e) => {}} /> : "20"}</TableCell>
            <TableCell>
              {editRowId === 1 ? (
                <Button size="sm" onClick={() => setEditRowId(null)}>
                  Save
                </Button>
              ) : (
                <Button size="sm" variant="secondary" onClick={() => setEditRowId(1)}>
                  Edit
                </Button>
              )}
            </TableCell>
          </TableRow>

          {newRow && (
            <TableRow>
              <TableCell>
                <Input value={newRow.name} onChange={(e) => {}} placeholder="Name" />
              </TableCell>
              <TableCell>
                <Input value={newRow.email} onChange={(e) => {}} placeholder="Per Hour Fees" />
              </TableCell>
              <TableCell>
                <Input value={newRow.email} onChange={(e) => {}} placeholder="Per Entry Fees" />
              </TableCell>
              <TableCell>
                <Button size="sm" onClick={handleSaveNew}>
                  Save
                </Button>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {!newRow && (
        <Button variant="outline" onClick={handleAddNew}>
          + Add New Vehicle Category
        </Button>
      )}
    </div>
  );
}

export default ParkingTable;
