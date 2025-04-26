import TagTable from "@/components/organisms/tables/TagTable";
import React from "react";

const Page = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Tag List</h1>
      <section className="mt-5">
        <TagTable />
      </section>
    </div>
  );
};

export default Page;
