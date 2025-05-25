import TicketPayment from "@/components/molecules/dashboard/TicketPayment";
import POSForm from "@/components/organisms/forms/POSForm";
import React from "react";

const Page = () => {
  return (
    <div className="p-4">
      <div className="m-auto max-w-3xl">
        {/* <TicketPayment /> */}
        <POSForm />
      </div>
    </div>
  );
};

export default Page;
