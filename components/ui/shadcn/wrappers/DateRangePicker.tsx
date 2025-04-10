"use client";

import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { FC } from "react";
import { DateRange } from "react-day-picker";

type DateRangePickerProps = {
  value?: DateRange;
  onChange: (range: DateRange | undefined) => void;
  placeholder?: string;
};

const DateRangePicker: FC<DateRangePickerProps> = (props) => {
  const { value, onChange, placeholder = "Pick a date range" } = props;

  return (
    <div className="grid gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn("w-[300px] justify-start text-left font-normal", !value && "text-muted-foreground")}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {value?.from ? (
              value.to ? (
                <>
                  {format(value.from, "PP")} - {format(value.to, "PP")}
                </>
              ) : (
                format(value.from, "PP")
              )
            ) : (
              <span>{placeholder}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-2">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={value?.from}
            selected={value}
            onSelect={onChange}
            numberOfMonths={2}
          />

          <Button className="ms-auto block" onClick={() => onChange(undefined)}>
            Reset
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DateRangePicker;
