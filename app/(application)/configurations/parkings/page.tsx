import TableParkings from "@/components/molecules/TableParkings";
import React from "react";

const Page = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Parkings Configurations</h1>

      <section className="mt-5">
        <TableParkings />
      </section>
    </div>
  );
};

export default Page;
