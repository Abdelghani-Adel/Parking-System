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

const ManagerCardSetupForm = () => {
  const form = useForm();
  const { handleSubmit, control } = form;

  return (
    <form className="space-y-5">
      {/* <Controller
        name="name"
        control={control}
        rules={{ required: "dispenser name is required" }}
        render={({ field }) => (
          <>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="name">Dispenser Name</Label>
              <Input {...field} type="text" id="name" placeholder="Enter name of the dispenser" />
            </div>
          </>
        )}
      />

      <Button>Save</Button> */}
    </form>
  );
};

export default ManagerCardSetupForm;
