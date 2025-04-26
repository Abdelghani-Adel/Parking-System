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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/shadcn/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/shadcn/ui/calendar";
import { cn } from "@/components/ui/shadcn/utils";
import { useEffect } from "react";
import { addMonths, isValid } from "date-fns";
import { Checkbox } from "@/components/ui/shadcn/ui/checkbox";

interface Iprops {
  id?: string;
  onSubmit: (data: any) => void;
}

const ManagerCardForm: React.FC<Iprops> = ({ id, onSubmit }) => {
  const form = useForm();

  const { handleSubmit, control, setValue, watch } = form;
  const startDate = watch("startDate");
  const period = watch("period");

  useEffect(() => {
    if (isValid(startDate) && period) {
      const months = parseInt(period);
      const newEndDate = addMonths(new Date(startDate), months);
      setValue("endDate", newEndDate);
    }
  }, [startDate, period, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <Controller
        name="cardNumber"
        control={control}
        render={({ field }) => (
          <>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="parkingName">Card Number</Label>
              <Input {...field} type="text" id="cardNumber" placeholder="Enter card number" />
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
              <Input {...field} type="text" id="cardName" placeholder="Enter card name" />
            </div>
          </>
        )}
      />

      <div>
        <h5 className="mb-2">Card Type</h5>
        <Controller
          name="cardType"
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange} disabled defaultValue="manager">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Card Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="manager">Manager Card</SelectItem>
                  <SelectItem value="subscription">Subscription Card</SelectItem>
                  <SelectItem value="storedValue">Stored-Value Card</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <div>
        <h5 className="mb-2">Plan</h5>
        <Controller
          name="plan"
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Plan" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="1">plan 1</SelectItem>
                  <SelectItem value="2">plan 2</SelectItem>
                  <SelectItem value="3">plan 3</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <PolicySelector control={control} />

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
                  className={cn("w-full justify-start text-left font-normal", !field.value && "text-muted-foreground")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus />
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
                  className={cn("w-full justify-start text-left font-normal", !field.value && "text-muted-foreground")}
                  disabled
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus />
              </PopoverContent>
            </Popover>
          </div>
        )}
      />

      <TagSelector control={control} />

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

const PolicySelector: FC<ITypeProps> = ({ control }) => {
  const weekdays = [
    { label: "Policy 1", value: "1" },
    { label: "Policy 2", value: "2" },
    { label: "Policy 3", value: "3" },
  ];

  return (
    <div>
      <h5 className="mb-2">Selected Policies</h5>
      <Controller
        name="selectedPolicies"
        control={control}
        render={({ field }) => (
          <MultiSelect
            options={weekdays}
            selected={field.value}
            onChange={field.onChange}
            placeholder="Select policies"
          />
        )}
      />
    </div>
  );
};

const TagSelector: FC<ITypeProps> = ({ control }) => {
  const [hasTag, setHasTag] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="hasTag" checked={hasTag} onCheckedChange={(val) => setHasTag(!!val)} />
        <label htmlFor="hasTag" className="text-sm font-medium leading-none">
          Has Tag
        </label>
      </div>

      {hasTag && (
        <div>
          <h5 className="mb-2">Tag</h5>
          <Controller
            name="tag"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange} defaultValue="manager">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Tag" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="manager">Tag 1</SelectItem>
                    <SelectItem value="subscription">Tag 2</SelectItem>
                    <SelectItem value="storedValue">Tag 3</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
        </div>
      )}
    </div>
  );
};

export default ManagerCardForm;
