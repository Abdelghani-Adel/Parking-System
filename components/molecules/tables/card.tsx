import React from "react";
import { MdPendingActions } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import AddParkingCard from "../AddParkingCard";

const cards = [
  {
    id: "TXN001",
    cardType: "Manager",
  },
  {
    id: "TXN002",
    cardType: "Stored Value",
  },
  {
    id: "TXN003",
    cardType: "Subscription",
  },
  {
    id: "TXN004",
    cardType: "Manager",
  },
  {
    id: "TXN005",
    cardType: "Manager",
  },
  {
    id: "TXN005",
    cardType: "Manager",
  },
  {
    id: "TXN005",
    cardType: "Manager",
  },
  {
    id: "TXN005",
    cardType: "Manager",
  },
  {
    id: "TXN005",
    cardType: "Manager",
  },
];

const CardTable = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold mb-3 text-primary dark:text-grey-light flex items-center gap-2">
          <MdPendingActions />
          Cards List
        </h2>

        <AddParkingCard />
      </div>

      <div className="h-64 overflow-y-auto border border-grey-light  rounded-lg w-full">
        <table className="min-w-full border border-grey-light dark:bg-greyrounded-lg">
          <thead className="bg-grey-light dark:bg-grey">
            <tr>
              <th className="px-6 py-2 text-start text-gray-600 text-sm">ID</th>
              <th className="px-6 py-2 text-start text-gray-600 text-sm">Card Type</th>
              <th className="px-6 py-2 text-start text-gray-600 text-sm">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {cards.map((txn) => (
              <tr key={txn.id} className="border-b">
                <td className="px-6 py-2">{txn.id}</td>
                <td className="px-6 py-2">{txn.cardType}</td>
                <td className="px-6 py-2">
                  <div className="flex gap-2">
                    <button>
                      <FaEdit className="text-2xl text-green-500" />
                    </button>
                    <button>
                      <MdDeleteOutline className="text-2xl text-red-500" />
                    </button>
                    <button>
                      <BsInfoCircle className="text-xl text-blue-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CardTable;
