"use client";

import React from "react";
import { MdPendingActions } from "react-icons/md";

const transactions = [
  {
    id: "TXN001",
    payment: "$15.00 (Cash)",
    time: "10:30 AM",
    status: "Success",
  },
  {
    id: "TXN002",
    payment: "$20.00 (Card)",
    time: "11:15 AM",
    status: "Pending",
  },
  {
    id: "TXN003",
    payment: "$12.50 (Card)",
    time: "12:00 PM",
    status: "Failed",
  },
  {
    id: "TXN004",
    payment: "$18.00 (Cash)",
    time: "12:45 PM",
    status: "Success",
  },
  {
    id: "TXN005",
    payment: "$25.00 (Card)",
    time: "1:30 PM",
    status: "Success",
  },
  {
    id: "TXN005",
    payment: "$25.00 (Card)",
    time: "1:30 PM",
    status: "Success",
  },
  {
    id: "TXN005",
    payment: "$25.00 (Card)",
    time: "1:30 PM",
    status: "Success",
  },
  {
    id: "TXN005",
    payment: "$25.00 (Card)",
    time: "1:30 PM",
    status: "Success",
  },
  {
    id: "TXN005",
    payment: "$25.00 (Card)",
    time: "1:30 PM",
    status: "Success",
  },
];

const statusColors: Record<string, string> = {
  Success: "text-green-600 bg-green-100",
  Pending: "text-yellow-600 bg-yellow-100",
  Failed: "text-red-600 bg-red-100",
};

const DashPendingTickets = () => {
  return (
    <>
      <h2 className="text-lg font-bold mb-3 text-primary dark:text-grey-light flex items-center gap-2">
        <MdPendingActions />
        Pending Tickets
      </h2>

      <div className="h-60 overflow-y-auto border border-grey-light rounded-lg w-full">
        <table className="min-w-full border border-grey-light rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-2 text-start text-gray-600 text-sm">ID</th>
              <th className="px-6 py-2 text-start text-gray-600 text-sm">Check-In</th>
              <th className="px-6 py-2 text-start text-gray-600 text-sm">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {transactions.map((txn) => (
              <tr key={txn.id} className="border-b">
                <td className="px-6 py-2">{txn.id}</td>
                <td className="px-6 py-2">{txn.time}</td>
                <td className="px-6 py-2">
                  <button className="underline underline-offset-2 text-accent">Calculate</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DashPendingTickets;
