"use client";
import React, { FC, useState } from "react";
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

      <div>
        <h5 className="mb-2">Policy Type</h5>
        <Controller
          name="policyType"
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Parking Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="weekdays">Week Days</SelectItem>
                  <SelectItem value="timeframe">Time Frame</SelectItem>
                  <SelectItem value="maxperday">Max Per Day</SelectItem>
                  <SelectItem value="maxpermonth">Max Per Month</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <WeekDaysFields control={control} policyType={policyType} />
      <MaxPerDayFields control={control} policyType={policyType} />
      <MaxPerMonthFields control={control} policyType={policyType} />

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
  policyType: string;
}

const WeekDaysFields: FC<ITypeProps> = ({ control, policyType }) => {
  if (policyType !== "weekdays") return null;

  const weekdays = [
    { label: "Sunday", value: "2" },
    { label: "Monday", value: "3" },
    { label: "Tuesday", value: "4" },
    { label: "Wednesday", value: "5" },
    { label: "Thursday", value: "6" },
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

const TimeframeFields: FC<ITypeProps> = ({ control, policyType }) => {
  if (policyType !== "timeframe") return null;

  return (
    <Controller
      name="maxPerDay"
      control={control}
      render={({ field }) => (
        <>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="maxPerDay">Max Per Day</Label>
            <Input {...field} type="text" id="maxPerDay" placeholder="Enter max per day" />
          </div>
        </>
      )}
    />
  );
};

const MaxPerDayFields: FC<ITypeProps> = ({ control, policyType }) => {
  if (policyType !== "maxperday") return null;

  return (
    <Controller
      name="maxPerDay"
      control={control}
      render={({ field }) => (
        <>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="maxPerDay">Max Per Day</Label>
            <Input {...field} type="text" id="maxPerDay" placeholder="Enter max per day" />
          </div>
        </>
      )}
    />
  );
};

const MaxPerMonthFields: FC<ITypeProps> = ({ control, policyType }) => {
  if (policyType !== "maxpermonth") return null;

  return (
    <Controller
      name="maxpermonth"
      control={control}
      render={({ field }) => (
        <>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="maxpermonth">Max Per Month</Label>
            <Input {...field} type="text" id="maxpermonth" placeholder="Enter max per month" />
          </div>
        </>
      )}
    />
  );
};

export default PolicyForm;
