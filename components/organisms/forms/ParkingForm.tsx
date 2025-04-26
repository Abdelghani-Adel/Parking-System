"use client";
import React, { FC } from "react";
import { useForm, Controller, Control } from "react-hook-form";
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
import { MultiSelect } from "@/components/ui/shadcn/wrappers/MultiSelect";

interface Iprops {
  id?: string;
  onSubmit: (data: any) => void;
}

const ParkingForm: React.FC<Iprops> = ({ id, onSubmit }) => {
  const form = useForm();

  const { handleSubmit, control } = form;

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

      <div>
        <h5 className="mb-2">currency</h5>
        <Controller
          name="currency"
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Enter currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="egp">EGP</SelectItem>
                  <SelectItem value="usd">USD</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <Controller
        name="vat"
        control={control}
        render={({ field }) => (
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="vat">Vat</Label>
            <Input {...field} type="text" id="vat" placeholder="Enter VAT percentage" />
          </div>
        )}
      />

      <Controller
        name="lostTicketFees"
        control={control}
        render={({ field }) => (
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="lostTicketFees">Lost ticket fees</Label>
            <Input {...field} type="text" id="lostTicketFees" placeholder="Enter Lost ticket fees" />
          </div>
        )}
      />

      <Controller
        name="lostCardFees"
        control={control}
        render={({ field }) => (
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="lostCardFees">Lost card fees</Label>
            <Input {...field} type="text" id="lostCardFees" placeholder="Enter Lost card fees" />
          </div>
        )}
      />

      <Controller
        name="capacity"
        control={control}
        render={({ field }) => (
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="capacity">Capacity</Label>
            <Input {...field} type="text" id="capacity" placeholder="Enter capacity" />
          </div>
        )}
      />

      <Controller
        name="gracePeriod"
        control={control}
        render={({ field }) => (
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="gracePeriod">Grace period</Label>
            <Input {...field} type="text" id="gracePeriod" placeholder="Enter grace period" />
          </div>
        )}
      />

      <Controller
        name="address"
        control={control}
        render={({ field }) => (
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="address">Address</Label>
            <Input {...field} type="text" id="address" placeholder="Enter address" />
          </div>
        )}
      />

      <WeekDaysFields control={control} />

      {/* Save Button */}

      <SheetFooter>
        <SheetClose>
          <Button>Save</Button>
        </SheetClose>
      </SheetFooter>
    </form>
  );
};

interface ITypeProps {
  control: Control;
}

const WeekDaysFields: FC<ITypeProps> = ({ control }) => {
  const weekdays = [
    { label: "Saturday", value: "1" },
    { label: "Sunday", value: "2" },
    { label: "Monday", value: "3" },
    { label: "Tuesday", value: "4" },
    { label: "Wednesday", value: "5" },
    { label: "Thursday", value: "6" },
    { label: "Friday", value: "7" },
  ];

  return (
    <div>
      <h5 className="mb-2">Selected Week Days</h5>
      <Controller
        name="selectedWeekDays"
        control={control}
        render={({ field }) => (
          <MultiSelect
            options={weekdays}
            selected={field.value}
            onChange={field.onChange}
            placeholder="Select week days"
          />
        )}
      />
    </div>
  );
};
export default ParkingForm;
