"use client";

import { ISystemUser } from "@/services/getUsersList";
import { MUIDataTableColumn } from "mui-datatables";
import React, { useState } from "react";
import { FaUserAltSlash } from "react-icons/fa";
import { FaUserPen, FaUserXmark } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";
import MUIDatatable from "../ui/MuiDataTable";
import MuiModal from "../ui/MuiModal";
import FormUser from "./FormUser";
import { IParking } from "@/services/getParkingsList";
import FormParking from "./FormParking";

const statusColors: Record<string, string> = {
  "super admin": "bg-green-200 text-green-700",
  admin: "bg-blue-200 text-blue-700",
  supervisor: "bg-orange-100 text-orange-700",
  operator: "bg-gray-100 text-gray-700",
};

interface IProps {
  parkings: IParking[];
}

const TableParkings: React.FC<IProps> = (props) => {
  const [selectedParking, setSelectedParking] = useState<string[] | null>();
  const [isEditing, setIsEditing] = useState(false);
  const [isSuspending, setIsSuspending] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const data = transformRecordsToArray(
    props.parkings,
    ["id", "name", "type", "currency", "feesType", "lostTicketFees"],
    ["dispensers"]
  );

  const columns: MUIDataTableColumn[] = [
    {
      name: "id",
    },
    {
      name: "name",
    },
    {
      name: "type",
      options: {
        customBodyRender: (value: any) => {
          return <span className={`p-3 rounded px-2 py-1 text-xs font-semibold ${statusColors[value]}`}>{value}</span>;
        },
      },
    },
    {
      name: "currency",
    },
    {
      name: "Fees Type",
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
          const user = tableMeta.rowData; // Get user data for this row

          return (
            <div className="flex items-center gap-4 text-xl" onClick={() => setSelectedParking(user)}>
              <button title="Edit" onClick={() => setIsEditing(true)}>
                <FaUserPen className="text-blue-500" />
              </button>

              <button title="Suspend" onClick={() => setIsSuspending(true)}>
                <FaUserAltSlash className="text-yellow-500" />
              </button>

              <button title="Delete" onClick={() => setIsDeleting(true)}>
                <FaUserXmark className="text-red-500" />
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

      {/* Edit Modal */}
      <MuiModal isOpened={isEditing}>
        <div className="bg-white dark:bg-grey-dark p-5 rounded-lg relative max-w-xl">
          <h1 className="flex items-center gap-2 text-xl text-primary font-semibold mb-4">
            <FaUserPen className="text-2xl" />
            Edit ( {selectedParking?.[1]} )
          </h1>

          <button
            onClick={() => setIsEditing(false)}
            className="flex items-center gap-2 text-red-500 p-1 rounded-full absolute top-4 right-4"
          >
            <IoMdCloseCircleOutline className="text-3xl" />
          </button>

          {/* <FormParking
            mode="edit"
            initialValues={{ name: selectedParking?.[3], phone: selectedParking?.[4], role: selectedParking?.[2] }}
            onSubmit={(data) => {}}
          /> */}
        </div>
      </MuiModal>

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

export default TableParkings;
