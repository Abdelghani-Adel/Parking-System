"use client";

import DashParkingCarsCard from "./DashParkingCarsCard";
import DashPeakHours from "./DashPeakHours";
import DashPendingTickets from "./DashPendingTickets";
import DashRecentTransactions from "./DashRecentTransactions";
import DashShiftCarsBarchart from "./DashShiftCarsBarchart";
import DashShiftRevenueCard from "./DashShiftRevenueCard";
import DashShiftTotalCarsCard from "./DashShiftTotalCarsCard";
import TicketPayment from "./TicketPayment";

const DashboardForSupervisor = () => {
  return (
    <>
      <h2 className="text-2xl mb-2 font-semibold">SuperVisor Dashboard</h2>

      <div className="grid grid-cols-3 gap-4">
        <div className="dashboard-card">
          <DashShiftRevenueCard />
        </div>

        <div className="dashboard-card">
          <DashShiftTotalCarsCard />
        </div>

        <div className="dashboard-card">
          <DashParkingCarsCard />
        </div>
      </div>

      <div className="w-full grid grid-cols-12 gap-4 mt-4 items-stretch">
        <div className="col-span-7 dashboard-card">
          <DashPeakHours />
        </div>

        <div className="col-span-5 dashboard-card">{/* <TicketPayment /> */}</div>

        <div className="col-span-4 dashboard-card">
          <DashPendingTickets />
        </div>

        <div className="col-span-8 flex flex-col justify-between dashboard-card">
          <DashShiftCarsBarchart />
        </div>

        <div className="col-span-12 dashboard-card">
          <DashRecentTransactions />
        </div>
      </div>
    </>
  );
};

export default DashboardForSupervisor;
