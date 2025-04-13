"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
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
import { Button } from "@/components/ui/shadcn/ui/button";
import { SheetClose, SheetFooter } from "@/components/ui/shadcn/ui/sheet";

interface FormParkingProps {
  initialValues?: string[] | null | undefined;
  mode: "add" | "edit";
  onSubmit: (data: any) => void; // Callback on form submit
}

const DispenserForm: React.FC<FormParkingProps> = ({ initialValues, mode, onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {
      id: initialValues?.[0] ?? "",
      name: initialValues?.[1] ?? "",
      ip: initialValues?.[2] ?? "",
      parkingName: initialValues?.[2] ?? "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <Controller
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

      <Controller
        name="ip"
        control={control}
        render={({ field }) => (
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="ip">IP Address</Label>
            <Input {...field} type="text" id="ip" placeholder="Enter IP Address" />
          </div>
        )}
      />

      <div>
        <h5 className="mb-2">Parking</h5>
        <Controller
          name="parkingName"
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select the parking" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="parking1">parking 1</SelectItem>
                  <SelectItem value="parking2">parking 2</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      {/* Save Button */}

      <SheetFooter>
        <SheetClose>
          <Button>Save</Button>
        </SheetClose>
      </SheetFooter>
    </form>
  );
};

export default DispenserForm;
