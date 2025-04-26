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

const PlanForm: React.FC<Iprops> = ({ id, onSubmit }) => {
  const form = useForm();

  const { handleSubmit, control } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="name">Plan Name</Label>
              <Input {...field} type="text" id="name" placeholder="Enter name" />
            </div>
          </>
        )}
      />

      <div>
        <h5 className="mb-2">Type</h5>
        <Controller
          name="type"
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Enter type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="ticket">ticket</SelectItem>
                  <SelectItem value="card">card</SelectItem>
                  <SelectItem value="tag">tag</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <div>
        <h5 className="mb-2">Fess calculator</h5>
        <Controller
          name="feeCalculator"
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Enter fees calculator" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="1">round 1 hour</SelectItem>
                  <SelectItem value="2">exact</SelectItem>
                  <SelectItem value="3">supscription</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <Controller
        name="rate"
        control={control}
        render={({ field }) => (
          <>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="rate">Rate</Label>
              <Input {...field} type="text" id="rate" placeholder="Enter rate" />
            </div>
          </>
        )}
      />

      <div>
        <h5 className="mb-2">Parking Type</h5>
        <Controller
          name="parkingtype"
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Enter parking type" />
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

      <div>
        <h5 className="mb-2">Parking Name</h5>
        <Controller
          name="parkingName"
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select parking name" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="1">Parking 1</SelectItem>
                  <SelectItem value="2">Parking 2</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <CategorySelector control={control} />

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

const CategorySelector: FC<ITypeProps> = ({ control }) => {
  const options = [
    { label: "Sedan", value: "1" },
    { label: "Bus", value: "2" },
    { label: "Van", value: "3" },
  ];

  return (
    <div>
      <h5 className="mb-2">Selected category types</h5>
      <Controller
        name="categoryTypes"
        control={control}
        render={({ field }) => (
          <MultiSelect
            options={options}
            selected={field.value}
            onChange={field.onChange}
            placeholder="Select category types"
          />
        )}
      />
    </div>
  );
};

export default PlanForm;
