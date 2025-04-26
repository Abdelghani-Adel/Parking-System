import DispenserTable from "@/components/organisms/tables/DispenserTable";
import React from "react";

const Page = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Dispensers Configurations</h1>

      <section className="mt-5">
        <DispenserTable />
      </section>
    </div>
  );
};

export default Page;
