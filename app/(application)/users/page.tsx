import UserTable from "@/components__/organisms/tables/UserTable";

const Page = async () => {
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
