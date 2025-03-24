import TableParkings from "@/components/molecules/TableParkings";
import { getParkingsList } from "@/services/getParkingsList";
import React from "react";

const Page = async () => {
  const parkingsList = await getParkingsList();

  return (
    <div className="p-4 space-y-4">
      <TableParkings parkings={parkingsList.records} />
    </div>
  );
};

export default Page;
