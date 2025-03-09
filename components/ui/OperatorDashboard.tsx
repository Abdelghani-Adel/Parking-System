"use client";

import BarChart from "../Dashboard/BarChart";
import PeakHoursTraffic from "../Dashboard/PeakHours";
import PieChart from "../Dashboard/PieChart";
import { MdAttachMoney, MdOutlineAttachMoney } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { TbParkingCircleFilled } from "react-icons/tb";
import { IoTimer } from "react-icons/io5";
import VehicleTypePieChart from "../Dashboard/VehicleTypePieChart";
import PeakHoursLine from "../Dashboard/PeakHoursLine";
import RecentTransactions from "../Dashboard/RecentTransactions";
import { FaCalculator } from "react-icons/fa6";
import PendingTickets from "../Dashboard/PendingTickets";
import { GiMoneyStack } from "react-icons/gi";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { LuTicketCheck } from "react-icons/lu";

const OperatorDashboard = () => {
  return (
    <div className="p-4 w-full">
      <div className="grid grid-cols-4 gap-2">
        <div className="bg-green-400 text-white p-2 rounded-lg">
          <h2 className="flex items-center text-xl">
            <MdAttachMoney className="text-2xl" />
            Total Revenue
          </h2>
          <p className="text-center py-3 text-2xl font-semibold">470 EGP</p>
        </div>

        <div className="bg-sky-400 text-white p-2 rounded-lg">
          <h2 className="flex gap-2 items-center text-xl">
            <FaCar className="text-2xl" />
            Total Vehicles
          </h2>
          <p className="text-center py-3 text-2xl font-semibold">16</p>
        </div>

        <div className="bg-amber-400 text-white p-2 rounded-lg">
          <h2 className="flex gap-2 items-center text-xl">
            <TbParkingCircleFilled className="text-2xl" />
            Vehicles Inside
          </h2>
          <p className="text-center py-3 text-2xl font-semibold">11</p>
        </div>

        <div className="bg-orange-400 text-white p-2 rounded-lg">
          <h2 className="flex gap-2 items-center text-xl">
            <IoTimer className="text-2xl" />
            Shift Timer
          </h2>
          <p className="text-center py-3 text-2xl font-semibold">04:16:13</p>
        </div>
      </div>

      <div className="w-full grid grid-cols-12 gap-3 mt-5 items-stretch">
        <div className="col-span-4 bg-white p-5 rounded-lg border">
          <h2 className="text-lg font-bold mb-3 text-accent flex items-center gap-2">
            <LuTicketCheck />
            Ticket Payment
          </h2>
          <div className="flex gap-5">
            <input
              type="text"
              placeholder="Enter ticket number"
              className="w-full text-xs py-2 px-2 pr-8 rounded-md focus:outline-none focus:ring-1 font-normal border-gray-200 border-2"
            />

            <button className="flex items-center gap-2 bg-accent-dark hover:bg-accent transition duration-300 px-5 rounded-lg text-white text-sm">
              <FaCalculator className="text-lg" />
              Calculate
            </button>
          </div>

          <input
            type="text"
            placeholder="Paid amount"
            className="w-full mt-3 text-xs py-2 px-2 pr-8 rounded-md focus:outline-none focus:ring-1 font-normal border-gray-200 border-2"
          />

          <p className="flex items-center gap-1 my-3 text-green-500">
            <MdOutlineAttachMoney />
            Total Amount : 50 EGP
          </p>

          <p className="flex items-center gap-1 my-3 text-amber-500">
            <MdOutlineAttachMoney />
            Change : 15 EGP
          </p>

          <div className="flex gap-5">
            <button className="w-full text-sm flex items-center justify-center gap-2 py-2 bg-accent-dark hover:bg-dark transition duration-300 px-5 rounded-lg text-white">
              <BsCreditCard2FrontFill />
              Pay With Visa
            </button>
            <button className="w-full text-sm flex items-center justify-center gap-2 py-2 bg-accent-dark hover:bg-dark transition duration-300 px-5 rounded-lg text-white">
              <GiMoneyStack className="text-2xl" />
              Pay Cash
            </button>
          </div>
        </div>

        <div className="col-span-5 bg-white p-5 rounded-lg border">
          <PeakHoursLine />
        </div>

        <div className="col-span-3 bg-white p-5 rounded-lg border">
          <VehicleTypePieChart />
        </div>

        <div className="col-span-3 bg-white p-5 rounded-lg border">
          <PieChart />
        </div>

        <div className="col-span-5 flex flex-col justify-between bg-white p-5 rounded-lg border">
          <BarChart />
        </div>

        <div className="col-span-4 bg-white p-5 rounded-lg border">
          <PendingTickets />
        </div>

        <div className="col-span-12 bg-white p-5 rounded-lg border">
          <RecentTransactions />
        </div>
      </div>
    </div>
  );
};

export default OperatorDashboard;
