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

const StoredValueCardSetupForm = () => {
  const form = useForm();
  const { handleSubmit, control } = form;

  return (
    <form className="space-y-5">
      <div>
        <h5 className="mb-2">Parking Type</h5>
        <Controller
          name="parkingType"
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-full bg-white">
                <SelectValue placeholder="Select the parking type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="1">Per Hour</SelectItem>
                  <SelectItem value="2">Per Entry</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <Button>Save</Button>
    </form>
  );
};

export default StoredValueCardSetupForm;
