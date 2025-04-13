"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { IParking } from "./api-parking";
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
  onSubmit: (data: Partial<IParking>) => void; // Callback on form submit
}

const ParkingForm: React.FC<FormParkingProps> = ({ initialValues, mode, onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Partial<IParking>>({
    defaultValues: {
      id: initialValues?.[0] ?? "ddd",
      name: initialValues?.[1] ?? "",
      type: initialValues?.[2] ?? "perHour",
      currency: initialValues?.[3] ?? "EGP",
      feesType: initialValues?.[4] ?? "exact",
      lostTicketFees: initialValues?.[5] ?? "0",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <Controller
        name="name"
        control={control}
        rules={{ required: "Parking name is required" }}
        render={({ field }) => (
          <>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="parkingName">Parking Name</Label>
              <Input {...field} type="text" id="parkingName" placeholder="Enter name of the parking" />
            </div>
          </>
        )}
      />

      <Controller
        name="lostTicketFees"
        control={control}
        render={({ field }) => (
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="lostTicketFees">Lost Ticket Fees</Label>
            <Input {...field} type="text" id="lostTicketFees" placeholder="Enter name of the parking" />
          </div>
        )}
      />

      <div>
        <h5 className="mb-2">Fees Type</h5>
        <Controller
          name="feesType"
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Parking Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="exact">Exact</SelectItem>
                  <SelectItem value="round">Round to 1 hour</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <div>
        <h5 className="mb-2">Parking Type</h5>
        <Controller
          name="type"
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Parking Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="perHour">Per Hour</SelectItem>
                  <SelectItem value="perEntry">Per Entry</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <div>
        <h5 className="mb-2">Currency</h5>
        <Controller
          name="currency"
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="EGP">EGP</SelectItem>
                  <SelectItem value="USD">USD</SelectItem>
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

export default ParkingForm;
