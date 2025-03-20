"use client";

import DashParkingCarsCard from "./DashParkingCarsCard";
import DashRecentTransactions from "./DashRecentTransactions";
import DashShiftRevenueCard from "./DashShiftRevenueCard";
import DashShiftTotalCarsCard from "./DashShiftTotalCarsCard";
import TicketPayment from "./TicketPayment";

const DashboardForOperator = () => {
  return (
    <>
      <h2 className="text-2xl mb-2 font-semibold">Operator Dashboard</h2>

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
          <DashRecentTransactions />
        </div>

        <div className="col-span-5 dashboard-card">
          <TicketPayment />
        </div>
      </div>
    </>
  );
};

export default DashboardForOperator;
