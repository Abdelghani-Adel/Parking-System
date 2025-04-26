import PlanTable from "@/components/organisms/tables/PlanTable";
import React from "react";

const Page = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Parking Plans</h1>
      <section className="mt-5">
        <PlanTable />
      </section>
    </div>
  );
};

export default Page;
