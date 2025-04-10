"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

type DatePickerProps = {
  selected?: Date;
  placeholder?: string;
  fromDate?: Date;
  toDate?: Date;
  dateFormat?: "dd/MM/yyyy" | "dd.MM.yyyy" | "dd-MM-yyyy";
  onSelect?: (date?: Date) => void;
};

export function DatePicker({
  selected,
  onSelect,
  placeholder = "Pick a date",
  dateFormat,
  fromDate,
  toDate,
}: DatePickerProps) {
  return (
    <div className="grid gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn("w-[280px] justify-start text-left font-normal", !selected && "text-muted-foreground")}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {selected ? format(selected, dateFormat ?? "PPP") : <span>{placeholder}</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={selected}
            onSelect={onSelect}
            initialFocus
            fromDate={fromDate}
            toDate={toDate}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
