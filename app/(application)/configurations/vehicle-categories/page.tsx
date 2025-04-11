import React from "react";
import categories from "@/public/data/vehicleCategories.json";
import TableVehicleCategories from "@/components/molecules/TableVehicleCategories";

const Page = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Vehicle Categories Configurations</h1>

      <TableVehicleCategories categories={categories} />
    </div>
  );
};

export default Page;
