"use client";
import { Button } from "@/components/ui/shadcn/ui/button";
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
import { Controller, useForm } from "react-hook-form";

const SubscriptionCardSetupForm = () => {
  const form = useForm();
  const { handleSubmit, control } = form;

  return (
    <form className="space-y-5">
      <Controller
        name="rate"
        control={control}
        rules={{ required: "dispenser name is required" }}
        render={({ field }) => (
          <>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="rate">Monthely Rate</Label>
              <Input {...field} type="text" id="rate" placeholder="Enter monthely rate" />
            </div>
          </>
        )}
      />

      <Button>Save</Button>
    </form>
  );
};

export default SubscriptionCardSetupForm;
