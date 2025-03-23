"use client";

import React from "react";
import MUIDataTable, { MUIDataTableOptions, MUIDataTableColumn } from "mui-datatables";

interface MUIDatatableProps {
  title?: string; // Optional title
  columns: MUIDataTableColumn[]; // Accepts both strings or objects for more customization
  data: Array<Array<string | number | boolean>>; // 2D array for data
  options?: MUIDataTableOptions; // Custom options (optional)
}

const MUIDatatable: React.FC<MUIDatatableProps> = ({ title = "Data Table", columns, data, options }) => {
  const defaultOptions: MUIDataTableOptions = {
    filterType: "multiselect",
    responsive: "standard",
    selectableRows: "none",
    pagination: false,
    searchAlwaysOpen: true,
    // customToolbar: () => <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Add User</button>,
  };

  // Merge default options with any passed options
  const mergedOptions: MUIDataTableOptions = { ...defaultOptions, ...options };

  return (
    <div className="muidatatable">
      <MUIDataTable title={""} data={data} columns={columns} options={mergedOptions} />
    </div>
  );
};

export default MUIDatatable;
