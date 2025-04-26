import ManagerCardTable from "@/components/organisms/tables/ManagerCardTable";
import StoredValueCardTable from "@/components/organisms/tables/StoredValueCardTable";
import SubscriptionCardTable from "@/components/organisms/tables/SubscriptionCardTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/shadcn/ui/tabs";

const Page = () => {
  return (
    <div className="space-y-4">
      <Tabs defaultValue="manager">
        <TabsList className="flex w-max m-auto">
          <TabsTrigger value="manager">Manager</TabsTrigger>
          <TabsTrigger value="subscription">Subscription</TabsTrigger>
          <TabsTrigger value="stored-value">Stored-Value</TabsTrigger>
        </TabsList>

        <TabsContent value="manager">
          <h2 className="my-4 text-4xl font-bold">Manager Cards List</h2>
          <ManagerCardTable />
        </TabsContent>

        <TabsContent value="subscription">
          <h2 className="my-4 text-4xl font-bold">Subscription Cards List</h2>
          <SubscriptionCardTable />
        </TabsContent>

        <TabsContent value="stored-value">
          <h2 className="my-4 text-4xl font-bold">Stored-Value Cards List</h2>
          <StoredValueCardTable />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;
