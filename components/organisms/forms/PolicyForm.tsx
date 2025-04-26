"use client";
import { Button } from "@/components/ui/shadcn/ui/button";
import { Input } from "@/components/ui/shadcn/ui/input";
import { Label } from "@/components/ui/shadcn/ui/label";
import { SheetClose, SheetFooter } from "@/components/ui/shadcn/ui/sheet";
import { MultiSelect } from "@/components/ui/shadcn/wrappers/MultiSelect";
import React, { FC } from "react";
import { Control, Controller, useForm } from "react-hook-form";

interface Iprops {
  id?: string;
  onSubmit: (data: any) => void;
}

const PolicyForm: React.FC<Iprops> = ({ id, onSubmit }) => {
  const form = useForm();
  const { handleSubmit, control, watch } = form;
  const policyType = watch("policyType");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="name">Policy Name</Label>
              <Input {...field} type="text" id="name" placeholder="Enter name of the policy" />
            </div>
          </>
        )}
      />

      <WeekDaysFields control={control} />
      <Controller
        name="dailyMax"
        control={control}
        render={({ field }) => (
          <>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="dailyMax">Max Per Day</Label>
              <Input {...field} type="text" id="dailyMax" placeholder="Enter max per day" />
            </div>
          </>
        )}
      />

      <Controller
        name="monthlyMax"
        control={control}
        render={({ field }) => (
          <>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="monthlyMax">Max Per month</Label>
              <Input {...field} type="text" id="maxPerDay" placeholder="Enter max per month" />
            </div>
          </>
        )}
      />

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
      <h5 className="mb-2">Active Days</h5>
      <Controller
        name="activeDays"
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

export default PolicyForm;
