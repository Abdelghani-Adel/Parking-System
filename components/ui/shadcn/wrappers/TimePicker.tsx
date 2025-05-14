// components/ui/time-picker.tsx
"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { CalendarIcon } from "lucide-react";

type TimePickerProps = {
  value?: string;
  onChange: (time: string) => void;
  placeholder?: string;
  className?: string;
};

export const TimePicker: React.FC<TimePickerProps> = ({
  value,
  onChange,
  placeholder = "Pick a time",
  className,
}) => {
  const [open, setOpen] = useState(false);
  const selectedDate = value ? new Date(`1970-01-01T${value}:00`) : null;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "justify-start text-left font-normal",
            !value && "text-muted-foreground",
            className
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value || placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => {
            if (date) {
              const formattedTime = format(date, "HH:mm");
              onChange(formattedTime);
            } else {
              onChange("");
            }
            setOpen(false);
          }}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="HH:mm"
          inline
        />
      </PopoverContent>
    </Popover>
  );
};
