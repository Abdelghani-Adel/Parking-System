import React from "react";
import categories from "@/public/data/vehicleCategories.json";
import CardCategoryTable from "@/components/modules/category/card-category-table";
import VahicleCategoryTable from "@/components/modules/category/vehicle-category-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/shadcn/ui/tabs";

const Page = () => {
  return (
    <div>
      <Tabs defaultValue="vehicle">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="vehicle">Vehicles Categories</TabsTrigger>
          <TabsTrigger value="card">Cards Categories</TabsTrigger>
        </TabsList>
        <TabsContent value="vehicle">
          <h2 className="my-4 text-4xl font-bold">Vehicle Categories</h2>
          <VahicleCategoryTable />
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
