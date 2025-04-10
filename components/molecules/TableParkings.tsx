"use client";

import { getParkingsList, IParking } from "@/services/getParkingsList";
import { Ban, Pencil, Trash2 } from "lucide-react";
import { MUIDataTableColumn } from "mui-datatables";
import React, { useEffect, useState } from "react";
import { FaUserAltSlash } from "react-icons/fa";
import { FaUserXmark } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";
import MUIDatatable from "../ui/MuiDataTable";
import MuiModal from "../ui/MuiModal";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/shadcn/ui/sheet";
import useParkingsList from "@/hooks/useParkingsList";
import { Button } from "../ui/shadcn/ui/button";
import { Label } from "../ui/shadcn/ui/label";
import { Input } from "../ui/shadcn/ui/input";
import { Checkbox } from "../ui/shadcn/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/shadcn/ui/select";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/shadcn/ui/dropdown-menu";
import { Separator } from "../ui/shadcn/ui/separator";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/shadcn/ui/table";

const parkingTypeColors: Record<string, string> = {
  "per entry": "bg-green-200 text-green-700",
  "per hour": "bg-blue-200 text-blue-700",
};

const calcModeColors: Record<string, string> = {
  "round 1 hour": "bg-green-200 text-green-700",
  exact: "bg-blue-200 text-blue-700",
};

const TableParkings: React.FC = () => {
  const parkings = useParkingsList();

  const [selectedParking, setSelectedParking] = useState<string[] | null>();
  const [isEditing, setIsEditing] = useState(false);
  const [isSuspending, setIsSuspending] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

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
      options: {
        customBodyRender: (value: any) => {
          return (
            <span className={`p-3 rounded px-2 py-1 text-xs font-semibold ${parkingTypeColors[value]}`}>{value}</span>
          );
        },
      },
    },
    {
      name: "Currency",
    },
    {
      name: "Calculation Mode",
      options: {
        customBodyRender: (value: any) => {
          return (
            <span className={`p-3 rounded px-2 py-1 text-xs font-semibold ${calcModeColors[value]}`}>{value}</span>
          );
        },
      },
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
          const rowData = tableMeta.rowData; // Get user data for this row

          return (
            <div
              className="flex items-center gap-4 text-xl"
              onClick={() => {
                setSelectedParking(rowData);
                console.log(rowData);
              }}
            >
              <button title="Edit" onClick={() => setIsEditing(true)}>
                <Pencil className="text-blue-500" />
              </button>

              <button title="Suspend" onClick={() => setIsSuspending(true)}>
                <Ban className="text-yellow-500" />
              </button>

              <button title="Delete" onClick={() => setIsDeleting(true)}>
                <Trash2 className="text-red-500" />
              </button>
            </div>
          );
        },
      },
    },
  ];

  return (
    <>
      <MUIDatatable title="Users List" columns={columns} data={data} />

      <Sheet open={isEditing} onOpenChange={setIsEditing}>
        <SheetContent className="sm:max-w-full w-[600px] overflow-auto">
          <SheetHeader>
            <SheetTitle>Editing "Main" Parking</SheetTitle>
            {/* <SheetDescription></SheetDescription> */}

            <div className="space-y-6 pt-5">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="parkingName">Parking Name</Label>
                <Input type="text" id="parkingName" placeholder="Enter name of the parking" />
              </div>

              <div>
                <h5 className="mb-2">Parking Type</h5>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Parking Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="perHour">Per Hour</SelectItem>
                      <SelectItem value="perEntry">Per Entry</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <LabeledInputWithCheckbox
                label="Per Hour Fees"
                inputId="perHour"
                placeholder="Enter customized value for this parking"
                checkboxLabel="Use Default (5EGP)"
                defaultValue={5}
                onChange={() => {}}
              />

              <LabeledInputWithCheckbox
                label="Per Entry Fees"
                inputId="perEntry"
                placeholder="Enter customized value for this parking"
                checkboxLabel="Use Default (5EGP)"
                defaultValue={5}
                onChange={() => {}}
              />

              <LabeledInputWithCheckbox
                label="Fees Round"
                inputId="feesRount"
                placeholder="Enter customized value for this parking"
                checkboxLabel="Use Default (5EGP)"
                defaultValue={5}
                onChange={() => {}}
              />

              <LabeledInputWithCheckbox
                label="Lost Ticket Fees"
                inputId="lostTickets"
                placeholder="Enter customized value for this parking"
                checkboxLabel="Use Default (5EGP)"
                defaultValue={5}
                onChange={() => {}}
              />

              <Separator />

              <PerVehicle />

              <SheetFooter>
                <SheetClose>
                  <Button>Save</Button>
                </SheetClose>
              </SheetFooter>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      {/* Suspend Modal */}
      <MuiModal isOpened={isSuspending}>
        <div className="bg-white dark:bg-grey-dark p-5 rounded-lg relative max-w-xl">
          <h1 className="flex items-center gap-2 text-xl text-yellow-500 font-semibold mb-4">
            <FaUserAltSlash className="text-2xl" />
            Suspend ( {selectedParking?.[1]} )
          </h1>

          <button
            onClick={() => setIsSuspending(false)}
            className="flex items-center gap-2 text-red-500 p-1 rounded-full absolute top-4 right-4"
          >
            <IoMdCloseCircleOutline className="text-3xl" />
          </button>

          <h2>
            Are you sure you want to suspend <span className="text-primary font-bold">{selectedParking?.[1]}</span> ?
          </h2>

          <button className="mt-2 w-full bg-yellow-500 text-white py-2 rounded-lg">
            Yes, suspend <span className="font-bold">{selectedParking?.[1]}</span>
          </button>
        </div>
      </MuiModal>

      {/* Delete Modal */}
      <MuiModal isOpened={isDeleting}>
        <div className="bg-white dark:bg-grey-dark p-5 rounded-lg relative max-w-xl">
          <h1 className="flex items-center gap-2 text-xl text-red-500 font-semibold mb-4">
            <FaUserXmark className="text-2xl" />
            Delete ( {selectedParking?.[1]} )
          </h1>

          <button
            onClick={() => setIsDeleting(false)}
            className="flex items-center gap-2 text-red-500 p-1 rounded-full absolute top-4 right-4"
          >
            <IoMdCloseCircleOutline className="text-3xl" />
          </button>

          <h2>
            Are you sure you want to delete <span className="text-primary font-bold">{selectedParking?.[1]}</span> ?
          </h2>

          <button className="mt-2 w-full bg-red-500 text-white py-2 rounded-lg">
            Yes, delete <span className="font-bold">{selectedParking?.[1]}</span>
          </button>
        </div>
      </MuiModal>
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

export default TableParkings;
