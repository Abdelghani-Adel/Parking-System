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

interface Iprops {
  id?: string;
  onSubmit: (data: any) => void;
}

const DispenserForm: React.FC<Iprops> = ({ id, onSubmit }) => {
  const form = useForm();

  const { handleSubmit, control } = form;

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
        <h5 className="mb-2">Dispenser Type</h5>
        <Controller
          name="parkingId"
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select the parking" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="2">Entry Dispenser</SelectItem>
                  <SelectItem value="1">Exit Dispenser</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <div>
        <h5 className="mb-2">Parking</h5>
        <Controller
          name="parkingId"
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select the parking" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="1">parking 1</SelectItem>
                  <SelectItem value="2">parking 2</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <SheetFooter>
        <SheetClose>
          <Button>Save</Button>
        </SheetClose>
      </SheetFooter>
    </form>
  );
};

export default DispenserForm;
