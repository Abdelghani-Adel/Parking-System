"use client";
import { Button } from "@/components/ui/shadcn/ui/button";
import { Calendar } from "@/components/ui/shadcn/ui/calendar";
import { Checkbox } from "@/components/ui/shadcn/ui/checkbox";
import { Input } from "@/components/ui/shadcn/ui/input";
import { Label } from "@/components/ui/shadcn/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/shadcn/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/shadcn/ui/select";
import { SheetClose, SheetFooter } from "@/components/ui/shadcn/ui/sheet";
import { cn } from "@/components/ui/shadcn/utils";
import { MultiSelect } from "@/components/ui/shadcn/wrappers/MultiSelect";
import {
  useCardTypesForSelect,
  usePlanTypesForSelect,
  usePoliciesForSelect,
} from "@/hooks/selectOptions";
import {
  createPlanCard,
  IPlanCard,
  updatePlanCard,
} from "@/redux/slices/planCardSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { formatDate } from "@/utils/date";
import { CalendarIcon } from "lucide-react";
import React, { FC, useEffect, useState } from "react";
import { Control, Controller, useForm, useWatch } from "react-hook-form";
import { addMonths } from "date-fns";
import {
  createManagerCard,
  IManagerCard,
  updateManagerCard,
} from "@/redux/slices/managerCardSlice";

interface Iprops {
  id?: string;
}

const ManagerCardForm: React.FC<Iprops> = ({ id }) => {
  const dispatch = useAppDispatch();
  const cardList = useAppSelector((state) => state.managerCards.data);
  const card = cardList.find((item) => item.id === id);

  const cardTypes = useCardTypesForSelect();

  const form = useForm<IManagerCard>({
    defaultValues: card ?? {
      id: "",
      cardNumber: "",
      cardName: "Jane Smith",
      startDate: "",
      cardTypeId: "1",
      period: "",
      endDate: "",
    },
  });

  const { handleSubmit, control } = form;

  const onSubmit = async (data: IManagerCard) => {
    if (id) {
      await dispatch(updateManagerCard(data));
    } else {
      await dispatch(createManagerCard(data));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <Controller
        name="cardNumber"
        control={control}
        render={({ field }) => (
          <>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="parkingName">Card Number</Label>
              <Input
                {...field}
                type="text"
                id="cardNumber"
                placeholder="Enter card number"
              />
            </div>
          </>
        )}
      />

      <Controller
        name="cardName"
        control={control}
        render={({ field }) => (
          <>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="cardName">Card Name</Label>
              <Input
                {...field}
                type="text"
                id="cardName"
                placeholder="Enter card name"
              />
            </div>
          </>
        )}
      />

      <div>
        <h5 className="mb-2">Card Type</h5>
        <Controller
          name="cardTypeId"
          control={control}
          render={({ field }) => (
            <Select
              value={field.value}
              onValueChange={field.onChange}
              disabled
              defaultValue="1"
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Card Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {cardTypes.map((option) => (
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

      <Controller
        name="startDate"
        control={control}
        render={({ field }) => (
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="startDate">Start Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {field.value ? (
                    formatDate(field.value)
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={new Date(field.value)}
                  onSelect={field.onChange}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        )}
      />

      <Controller
        name="period"
        control={control}
        render={({ field }) => (
          <div>
            <h5 className="mb-2">Select Period (months)</h5>
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {[...Array(12)].map((_, i) => (
                    <SelectItem key={i + 1} value={(i + 1).toString()}>
                      {i + 1} month{i > 0 && "s"}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        )}
      />

      <Controller
        name="endDate"
        control={control}
        render={({ field }) => (
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="endDate">End Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !field.value && "text-muted-foreground"
                  )}
                  disabled
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {field.value ? (
                    formatDate(field.value)
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={new Date(field.value)}
                  onSelect={field.onChange}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
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

export default ManagerCardForm;
