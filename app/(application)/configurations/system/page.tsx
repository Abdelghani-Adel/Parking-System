import React from "react";
import { Input } from "@/components/ui/shadcn/ui/input";
import { Label } from "@/components/ui/shadcn/ui/label";
import { Button } from "@/components/ui/shadcn/ui/button";

const Page = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">System Configurations</h1>

      <div className="grid grid-cols-3 gap-5 mt-5">
        <div className="grid w-fullitems-center gap-1.5">
          <Label htmlFor="email">Per Hour Fees</Label>
          <Input type="number" id="email" placeholder="Per Hour Fees" />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="email">Per Entry Fees</Label>
          <Input type="number" id="email" placeholder="Per Entry Fees" />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="email">Fees Round</Label>
          <Input type="number" id="email" placeholder="Fees Round" />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="email">Vat Fees</Label>
          <Input type="number" id="email" placeholder="Vat Fees" />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="email">Physical Card Cost</Label>
          <Input type="number" id="email" placeholder="Physical Card Cost" />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="email">Physical Tag Cost</Label>
          <Input type="number" id="email" placeholder="Physical Tag Cost" />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="email">Subscription tarrifs per day</Label>
          <Input type="number" id="email" placeholder="Subscription tarrifs per day" />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="email">Lost Ticket Fees</Label>
          <Input type="number" id="email" placeholder="Lost Ticket Fees" />
        </div>
      </div>

      <Button className="mt-4 block ms-auto">Save</Button>
    </div>
  );
};

export default Page;
