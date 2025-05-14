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

interface Iprops {
  id?: string;
}

const PlanCardForm: React.FC<Iprops> = ({ id }) => {
  const dispatch = useAppDispatch();
  const cardList = useAppSelector((state) => state.planCards.data);
  const card = cardList.find((item) => item.id === id);

  const policies = usePoliciesForSelect();
  const cardTypes = useCardTypesForSelect();
  const planOptions = usePlanTypesForSelect();

  const form = useForm<IPlanCard>({
    defaultValues: card ?? {
      cardNumber: "",
      cardName: "",
      startDate: "",
      period: "",
      endDate: "",
      tagId: "",
      planId: "",
      cardTypeId: "2",
      policies: [],
    },
  });

  const { handleSubmit, control, setValue, watch } = form;
  const startDate = watch("startDate");
  const period = watch("period");

  useEffect(() => {
    if (period) {
      const months = parseInt(period);
      const newEndDate = addMonths(new Date(startDate), months);
      setValue("endDate", newEndDate.toISOString());
    }
  }, [startDate, period, setValue]);

  const onSubmit = async (data: IPlanCard) => {
    if (id) {
      await dispatch(updatePlanCard(data));
    } else {
      await dispatch(createPlanCard(data));
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
              <Label htmlFor="cardName">Card Holder Name</Label>
              <Input
                {...field}
                type="text"
                id="cardName"
                placeholder="Enter holder name"
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

      <div>
        <h5 className="mb-2">Selected Policies</h5>
        <Controller
          name="policies"
          control={control}
          render={({ field }) => (
            <MultiSelect
              options={policies}
              selected={field.value}
              onChange={field.onChange}
              placeholder="Select policies"
            />
          )}
        />
      </div>

      <div>
        <h5 className="mb-2">Plan Type</h5>
        <Controller
          name="planId"
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Plan" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {planOptions.map((option) => (
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
  control: Control<IPlanCard>;
}

const TagSelector: FC<ITypeProps> = ({ control }) => {
  const [hasTag, setHasTag] = useState(false);

  // Get the current value of tagId from the form
  const tagId = useWatch({
    control,
    name: "tagId",
  });

  // Set hasTag to true if tagId has data
  useEffect(() => {
    if (tagId && tagId.trim() !== "") {
      setHasTag(true);
    }
  }, [tagId]);

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox
          id="hasTag"
          checked={hasTag}
          onCheckedChange={(val) => setHasTag(!!val)}
        />
        <label htmlFor="hasTag" className="text-sm font-medium leading-none">
          Has Tag
        </label>
      </div>

      {hasTag && (
        <Controller
          name="tagId"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="text"
              id="hasTag"
              placeholder="Enter tag number"
            />
          )}
        />
      )}
    </div>
  );
};

export default PlanCardForm;
