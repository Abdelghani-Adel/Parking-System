"use client";

import { ISystemUser } from "@/services/getUsersList";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLElement>, id: string) => {
    setAnchorEl(event.currentTarget);
    setSelectedCourse(id);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedCourse(null);
  };

  const onView = () => {
    handleClose();
  };

  const onDraft = () => {
    handleClose();
  };

  const onEdit = () => {
    handleClose();
    // router.push(`//${encrypt(id.toString())}`);
  };

  const onDelete = () => {
    handleClose();
  };

  return (
    <table className="table-default ">
      <thead>
        <tr>
          <th>#</th>
          <th>Instructor Name</th>
          <th>Email address</th>
          <th>Role</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>

            <td>
              <span className={`p-3 rounded px-2 py-1 text-xs font-semibold ${statusColors[user.role]}`}>
                {user.role}
              </span>
            </td>

            <td>
              <IconButton onClick={(e) => handleClick(e, user.id)}>
                <MoreVertIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl) && selectedCourse === user.id}
                onClose={handleClose}
                classes={{ paper: "w-48" }}
              >
                <MenuItem onClick={onView}>Edit</MenuItem>
                <MenuItem onClick={onDraft}>Suspend</MenuItem>
                <MenuItem onClick={onDelete} className="text-red-600">
                  Delete
                </MenuItem>
              </Menu>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableUsers;
