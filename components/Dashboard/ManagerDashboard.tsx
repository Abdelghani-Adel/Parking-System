"use client";

import ParkingCarsCard from "./ParkingCarsCard";
import PeakHoursAreaChart from "./PeakHoursAreaChart";
import PendingTickets from "./PendingTickets";
import RecentTransactions from "./RecentTransactions";
import ShiftCarsBarChart from "./ShiftCarsBarChart";
import ShiftRevenueCard from "./ShiftRevenueCard";
import ShiftTotalCars from "./ShiftTotalCars";
import TicketPayment from "./TicketPayment";

const ManagerDashboard = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white dark:bg-grey-darker dark:text-grey-light rounded-lg p-4">
          <ShiftRevenueCard />
        </div>

        <div className="bg-white dark:bg-grey-darker dark:text-grey-light rounded-lg p-4">
          <ShiftTotalCars />
        </div>

        <div className="bg-white dark:bg-grey-darker dark:text-grey-light rounded-lg p-4">
          <ParkingCarsCard />
        </div>
      </div>

      <div className="w-full grid grid-cols-12 gap-4 mt-4 items-stretch">
        <div className="col-span-7 bg-white dark:bg-grey-darker dark:text-grey-light p-5 rounded-lg">
          <PeakHoursAreaChart />
          {/* <RecentTransactions /> */}
        </div>

        <div className="col-span-5 bg-white dark:bg-grey-darker dark:text-grey-light p-5 rounded-lg">
          <TicketPayment />
        </div>

        <div className="col-span-4 bg-white dark:bg-grey-darker dark:text-grey-light p-5 rounded-lg">
          <PendingTickets />
        </div>

        <div className="col-span-8 flex flex-col justify-between bg-white dark:bg-grey-darker dark:text-grey-light p-5 rounded-lg">
          <ShiftCarsBarChart />
        </div>

        <div className="col-span-12 bg-white dark:bg-grey-darker dark:text-grey-light p-5 rounded-lg">
          <RecentTransactions />
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;
