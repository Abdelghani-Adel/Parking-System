import React from "react";
import ParkingTable from "./parking-table";

const ParkingScreen = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Parkings Configurations</h1>

      <section className="mt-5">
        <ParkingTable />
      </section>
    </div>
  );
};

export default ParkingScreen;
