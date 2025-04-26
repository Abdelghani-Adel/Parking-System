import PolicyTable from "@/components/organisms/tables/PolicyTable";
import React from "react";

const Page = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Parking Policies</h1>
      <section className="mt-5">
        <PolicyTable />
      </section>
    </div>
  );
};

export default Page;
