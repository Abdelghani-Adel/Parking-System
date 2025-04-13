import React from "react";
import DispenserTable from "./dispenser-table";

const DispenserScreen = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Dispensers Configurations</h1>

      <section className="mt-5">
        <DispenserTable />
      </section>
    </div>
  );
};

export default DispenserScreen;
