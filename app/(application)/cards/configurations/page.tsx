import { Input } from "@/components/ui/shadcn/ui/input";
import { Label } from "@/components/ui/shadcn/ui/label";
import React from "react";

const Page = () => {
  return (
    <div className="space-y-4">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="lostTicketFees">Supscription Monthly Rate</Label>
        <Input type="text" id="lostTicketFees" placeholder="Enter name of the parking" />
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="lostTicketFees">Stored Value fixed Rate</Label>
        <Input type="text" id="lostTicketFees" placeholder="Enter name of the parking" />
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="lostTicketFees">Stored Value variable Rate</Label>
        <Input type="text" id="lostTicketFees" placeholder="Enter name of the parking" />
      </div>
    </div>
  );
};

export default Page;
