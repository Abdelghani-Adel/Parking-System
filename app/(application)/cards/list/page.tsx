import ManagerCardTable from "@/components/organisms/tables/ManagerCardTable";
import PlanCardTable from "@/components/organisms/tables/PlanCardTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/shadcn/ui/tabs";

const Page = () => {
  return (
    <div className="space-y-4">
      <Tabs defaultValue="manager">
        <TabsList className="flex w-max m-auto">
          <TabsTrigger value="manager">Manager</TabsTrigger>
          <TabsTrigger value="plan">Plan</TabsTrigger>
        </TabsList>

        <TabsContent value="manager">
          <h2 className="my-4 text-4xl font-bold">Manager Cards List</h2>
          <ManagerCardTable />
        </TabsContent>

        <TabsContent value="plan">
          <h2 className="my-4 text-4xl font-bold">Plan Cards List</h2>
          <PlanCardTable />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;
