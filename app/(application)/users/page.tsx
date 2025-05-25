"use client";

import UserTable from "@/components/organisms/tables/UserTable";

const Page = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">Users Setup</h1>

      <section className="mt-5">
        <UserTable />
      </section>
    </>
  );
};

export default Page;
