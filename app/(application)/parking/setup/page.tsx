import ParkingTable from "@/components__/organisms/tables/ParkingTable";

const Page = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Parkings Configurations</h1>

      <section className="mt-5">
        <ParkingTable />
      </section>
    </div>
  );
};

export default Page;
