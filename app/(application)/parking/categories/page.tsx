import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/shadcn/ui/tabs";
import CardCategoryTable from "@/components__/organisms/tables/CardCategoryTable";
import TicketCategoryTable from "@/components__/organisms/tables/TicketCategoryTable";

const Page = () => {
  return (
    <div>
      <Tabs defaultValue="ticket">
        <TabsList className="flex w-max m-auto">
          <TabsTrigger value="ticket">Ticket Categories</TabsTrigger>
          <TabsTrigger value="card">Cards Categories</TabsTrigger>
        </TabsList>

        <TabsContent value="ticket">
          <h2 className="my-4 text-4xl font-bold">Ticket Categories</h2>
          <TicketCategoryTable />
        </TabsContent>

        <TabsContent value="card">
          <h2 className="my-4 text-4xl font-bold">Cards Categories</h2>
          <CardCategoryTable />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;
