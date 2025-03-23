"use client";

import { ISystemUser } from "@/services/getUsersList";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaUserPen } from "react-icons/fa6";
import { FaUserAltSlash } from "react-icons/fa";
import { FaUserXmark } from "react-icons/fa6";
import MuiModal from "../ui/MuiModal";
import { IoMdCloseCircleOutline } from "react-icons/io";
import FormUser from "./FormUser";
import MUIDatatable from "../ui/MuiDataTable";
import { MUIDataTableColumn } from "mui-datatables";

const statusColors: Record<string, string> = {
  "super admin": "bg-green-200 text-green-700",
  admin: "bg-blue-200 text-blue-700",
  supervisor: "bg-orange-100 text-orange-700",
  operator: "bg-gray-100 text-gray-700",
};

interface IProps {
  users: ISystemUser[];
}

const TableUsers: React.FC<IProps> = (props) => {
  const [selectedUser, setSelectedUser] = useState<string[] | null>();
  const [isEditing, setIsEditing] = useState(false);
  const [isSuspending, setIsSuspending] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const onRowClick = (x: any, y: any) => {
    console.log(x);
    console.log(y);
  };

  const data = transformRecordsToArray(props.users);

  const columns: MUIDataTableColumn[] = [
    {
      name: "id",
    },
    {
      name: "name",
    },

    {
      name: "Role",
      options: {
        customBodyRender: (value: any, tableMeta: any) => {
          const user = tableMeta.rowData; // Get user data for this row

          return <span className={`p-3 rounded px-2 py-1 text-xs font-semibold ${statusColors[value]}`}>{value}</span>;
        },
      },
    },
    {
      name: "Email Address",
    },
    {
      name: "Phone",
    },
    {
      name: "Actions",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value: any, tableMeta: any) => {
          const user = tableMeta.rowData; // Get user data for this row

          return (
            <div className="flex items-center gap-4 text-xl" onClick={() => setSelectedUser(user)}>
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
            Edit ( {selectedUser?.[1]} )
          </h1>

          <button
            onClick={() => setIsEditing(false)}
            className="flex items-center gap-2 text-red-500 p-1 rounded-full absolute top-4 right-4"
          >
            <IoMdCloseCircleOutline className="text-3xl" />
          </button>

          <FormUser
            mode="edit"
            initialValues={{ email: selectedUser?.[3], phone: selectedUser?.[4], role: selectedUser?.[2] }}
            onSubmit={(data) => {}}
          />
        </div>
      </MuiModal>

      {/* Suspend Modal */}
      <MuiModal isOpened={isSuspending}>
        <div className="bg-white dark:bg-grey-dark p-5 rounded-lg relative max-w-xl">
          <h1 className="flex items-center gap-2 text-xl text-yellow-500 font-semibold mb-4">
            <FaUserAltSlash className="text-2xl" />
            Suspend ( {selectedUser?.[1]} )
          </h1>

          <button
            onClick={() => setIsSuspending(false)}
            className="flex items-center gap-2 text-red-500 p-1 rounded-full absolute top-4 right-4"
          >
            <IoMdCloseCircleOutline className="text-3xl" />
          </button>

          <h2>
            Are you sure you want to suspend <span className="text-primary font-bold">{selectedUser?.[1]}</span> ?
          </h2>

          <button className="mt-2 w-full bg-yellow-500 text-white py-2 rounded-lg">
            Yes, suspend <span className="font-bold">{selectedUser?.[1]}</span>
          </button>
        </div>
      </MuiModal>

      {/* Delete Modal */}
      <MuiModal isOpened={isDeleting}>
        <div className="bg-white dark:bg-grey-dark p-5 rounded-lg relative max-w-xl">
          <h1 className="flex items-center gap-2 text-xl text-red-500 font-semibold mb-4">
            <FaUserXmark className="text-2xl" />
            Delete ( {selectedUser?.[1]} )
          </h1>

          <button
            onClick={() => setIsDeleting(false)}
            className="flex items-center gap-2 text-red-500 p-1 rounded-full absolute top-4 right-4"
          >
            <IoMdCloseCircleOutline className="text-3xl" />
          </button>

          <h2>
            Are you sure you want to delete <span className="text-primary font-bold">{selectedUser?.[1]}</span> ?
          </h2>

          <button className="mt-2 w-full bg-red-500 text-white py-2 rounded-lg">
            Yes, delete <span className="font-bold">{selectedUser?.[1]}</span>
          </button>
        </div>
      </MuiModal>
    </>
  );
};

function transformRecordsToArray<T extends Record<string, any>>(records: T[]): string[][] {
  return records.map((record) => Object.values(record).map((value) => String(value)));
}

export default TableUsers;
