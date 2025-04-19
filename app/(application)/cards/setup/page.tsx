import { Input } from "@/components/ui/shadcn/ui/input";
import { Label } from "@/components/ui/shadcn/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/shadcn/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/shadcn/ui/tabs";
import ManagerCardSetupForm from "@/components__/organisms/forms/ManagerCardSetupForm";
import StoredValueCardSetupForm from "@/components__/organisms/forms/StoredValueCardSetupForm";
import SubscriptionCardSetupForm from "@/components__/organisms/forms/SubscriptionCardSetupForm";
import PolicyTable from "@/components__/organisms/tables/PolicyTable";
import React from "react";

const Page = () => {
  return (
    <div className="space-y-4">
      <Tabs defaultValue="manager">
        <TabsList className="flex w-max m-auto">
          <TabsTrigger value="manager">Manager</TabsTrigger>
          <TabsTrigger value="subscription">Subscription</TabsTrigger>
          <TabsTrigger value="stored-value">Stored-Value</TabsTrigger>
          <TabsTrigger value="policies">Policies</TabsTrigger>
        </TabsList>

        <TabsContent value="manager">
          <h2 className="my-4 text-4xl font-bold">Manager Cards Setup</h2>

          <div className="max-w-xl">
            <ManagerCardSetupForm />
          </div>
        </TabsContent>

        <TabsContent value="subscription">
          <h2 className="my-4 text-4xl font-bold">Subscription Cards Setup</h2>

          <div className="max-w-xl">
            <SubscriptionCardSetupForm />
          </div>
        </TabsContent>

        <TabsContent value="stored-value">
          <h2 className="my-4 text-4xl font-bold">Stored-Value Cards Setup</h2>

          <div className="max-w-xl">
            <StoredValueCardSetupForm />
          </div>
        </TabsContent>

        <TabsContent value="policies">
          <h2 className="my-4 text-4xl font-bold">Policies Setup</h2>
          <PolicyTable />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;
