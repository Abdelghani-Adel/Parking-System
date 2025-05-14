"use client";
import React, { useEffect } from "react";
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
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  createDispenser,
  IDispenser,
  updateDispenser,
} from "@/redux/slices/dispenserSlice";
import {
  useDispenserTypesForSelect,
  useParkingsForSelect,
} from "@/hooks/selectOptions";

interface Iprops {
  id?: string;
}

const DispenserForm: React.FC<Iprops> = ({ id }) => {
  const dispatch = useAppDispatch();
  const dispenserList = useAppSelector((state) => state.dispensers.data);
  const dispenser = dispenserList.find((item) => item.id === id);
  const dispenserTypes = useDispenserTypesForSelect();
  const parkings = useParkingsForSelect();

  const form = useForm<IDispenser>({
    defaultValues: dispenser ?? {
      id: "",
      name: "",
      parkingId: "",
      status: "",
      dispenserUrl: "",
      dispenserTypeId: "",
    },
  });

  const { handleSubmit, control } = form;

  const onSubmit = (data: IDispenser) => {
    if (id) {
      dispatch(updateDispenser(data));
    } else {
      dispatch(createDispenser(data));
    }
  };

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
              <Input
                {...field}
                type="text"
                id="name"
                placeholder="Enter name of the dispenser"
              />
            </div>
          </>
        )}
      />

      <Controller
        name="dispenserUrl"
        control={control}
        render={({ field }) => (
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="ip">Dispenser URL</Label>
            <Input
              {...field}
              type="text"
              id="ip"
              placeholder="Enter dispenser url"
            />
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
                  {dispenserTypes.map((option) => (
                    <SelectItem key={option.id} value={option.id}>
                      {option.name}
                    </SelectItem>
                  ))}
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
                  {parkings.map((option) => (
                    <SelectItem key={option.id} value={option.id}>
                      {option.name}
                    </SelectItem>
                  ))}
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
