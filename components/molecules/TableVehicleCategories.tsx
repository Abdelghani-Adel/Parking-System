"use client";

import { MUIDataTableColumn } from "mui-datatables";
import React, { FC, useState } from "react";
import MUIDatatable from "../ui/MuiDataTable";
import { transformRecordsToArray } from "@/utils/transform";
import { FaRegEdit } from "react-icons/fa";
import { TbCancel } from "react-icons/tb";
import { MdOutlineDelete } from "react-icons/md";

export interface IVehicleCategory {
  id: string;
  name: string;
  perHour: string;
  perEntry: string;
}

interface IProps {
  categories: IVehicleCategory[];
}

const TableVehicleCategories: FC<IProps> = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState<string[] | null>();
  const [isEditing, setIsEditing] = useState(false);
  const [isSuspending, setIsSuspending] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const data = transformRecordsToArray(categories);

  const columns: MUIDataTableColumn[] = [
    {
      name: "ID",
    },
    {
      name: "Name",
    },
    {
      name: "Per Hour Fees",
    },
    {
      name: "Per Entry Fees",
    },
    {
      name: "Actions",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value: any, tableMeta: any) => {
          const user = tableMeta.rowData; // Get user data for this row

          return (
            <div className="flex items-center gap-4 text-xl" onClick={() => setSelectedCategory(user)}>
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

  return <MUIDatatable title="Users List" columns={columns} data={data} />;
};

export default TableVehicleCategories;
