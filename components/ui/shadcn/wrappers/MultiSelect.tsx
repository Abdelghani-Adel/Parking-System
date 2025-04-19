// components/multi-select.tsx
"use client";

import { useState } from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { Button } from "../ui/button";
import { Command, CommandGroup, CommandItem } from "../ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

type Option = {
  label: string;
  value: string;
};

type MultiSelectProps = {
  options: Option[];
  selected?: string[]; // Optional external state
  onChange?: (values: string[]) => void;
  placeholder?: string;
  className?: string;
};

export function MultiSelect({
  options,
  selected: controlledSelected,
  onChange,
  placeholder = "Select...",
  className,
}: MultiSelectProps) {
  const [open, setOpen] = useState(false);
  const [internalSelected, setInternalSelected] = useState<string[]>([]);

  const isControlled = controlledSelected !== undefined;
  const selected = isControlled ? controlledSelected : internalSelected;

  const updateSelection = (newSelected: string[]) => {
    if (isControlled) {
      onChange?.(newSelected);
    } else {
      setInternalSelected(newSelected);
    }
  };

  const toggleSelect = (value: string) => {
    const newSelected = selected.includes(value) ? selected.filter((v) => v !== value) : [...selected, value];
    updateSelection(newSelected);
  };

  const removeItem = (value: string) => {
    updateSelection(selected.filter((v) => v !== value));
  };

  const clearAll = () => updateSelection([]);

  return (
    <div className={cn("w-full", className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" role="combobox" className="w-full justify-between">
            {selected.length > 0 ? `${selected.length} selected` : placeholder}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-[300px] p-0">
          <Command>
            <CommandGroup>
              {options.map((item) => (
                <CommandItem key={item.value} onSelect={() => toggleSelect(item.value)}>
                  <div
                    className={cn(
                      "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                      selected.includes(item.value) && "bg-primary text-white"
                    )}
                  >
                    {selected.includes(item.value) && <Check className="h-4 w-4" />}
                  </div>
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>

      {/* {selected.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {selected.map((value) => {
            const item = options.find((opt) => opt.value === value);
            return (
              <Badge key={value} variant="secondary" className="flex items-center gap-1">
                {item?.label}
                <X className="h-3 w-3 cursor-pointer" onClick={() => removeItem(value)} />
              </Badge>
            );
          })}
          <Button variant="link" className="text-xs px-1" onClick={clearAll}>
            Clear all
          </Button>
        </div>
      )} */}
    </div>
  );
}
