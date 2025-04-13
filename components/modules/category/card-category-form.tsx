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

const CardCategoryForm: React.FC<FormParkingProps> = ({ initialValues, mode, onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {
      id: initialValues?.[0] ?? "",
      categoryType: initialValues?.[1] ?? "",
      fees: initialValues?.[2] ?? "",
      parkingName: initialValues?.[3] ?? "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <h5 className="mb-2">Category Type</h5>
        <Controller
          name="categoryType"
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select the category Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="truck">Truck</SelectItem>
                  <SelectItem value="sedan">Sedan</SelectItem>
                  <SelectItem value="motorcycle">Motorcycle</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <Controller
        name="fees"
        control={control}
        render={({ field }) => (
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="ip">Fees</Label>
            <Input {...field} type="text" id="fees" placeholder="Enter fees" />
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

export default CardCategoryForm;
