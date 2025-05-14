"use client";
import { Button } from "@/components/ui/shadcn/ui/button";
import { Checkbox } from "@/components/ui/shadcn/ui/checkbox";
import { Input } from "@/components/ui/shadcn/ui/input";
import { Label } from "@/components/ui/shadcn/ui/label";
import { SheetClose, SheetFooter } from "@/components/ui/shadcn/ui/sheet";
import { MultiSelect } from "@/components/ui/shadcn/wrappers/MultiSelect";
import { TimePicker } from "@/components/ui/shadcn/wrappers/TimePicker";
import { useWeekDaysForSelect } from "@/hooks/selectOptions";
import {
  createPolicy,
  IPolicy,
  updatePolicy,
} from "@/redux/slices/policySlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React, { FC, useEffect, useState } from "react";
import {
  Control,
  Controller,
  FieldValues,
  useForm,
  useWatch,
} from "react-hook-form";

interface Iprops {
  id?: string;
}

const PolicyForm: React.FC<Iprops> = ({ id }) => {
  const dispatch = useAppDispatch();
  const policiesList = useAppSelector((state) => state.policies.data);
  const policy = policiesList.find((item) => item.id === id);

  const form = useForm<IPolicy>({
    defaultValues: policy ?? {
      id: "",
      name: "",
      activeDays: [],
      activeHours: {
        from: "",
        to: "",
      },
      dailyMax: "",
      monthlyMax: "",
    },
  });
  const { handleSubmit, control, reset } = form;

  const onSubmit = (data: IPolicy) => {
    if (id) {
      dispatch(updatePolicy(data));
    } else {
      dispatch(createPolicy(data));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="name">Policy Name</Label>
              <Input
                {...field}
                type="text"
                id="name"
                placeholder="Enter name of the policy"
              />
            </div>
          </>
        )}
      />

      <WeekDaysFields control={control} />

      <WorkingHours control={control} />

      <MaxPerDay control={control} />

      <MaxPerMonth control={control} />

      <SheetFooter>
        <SheetClose>
          <Button>Save</Button>
        </SheetClose>
      </SheetFooter>
    </form>
  );
};

interface ITypeProps {
  control: Control<IPolicy>;
}

const WorkingHours: FC<ITypeProps> = ({ control }) => {
  const [selected, setSelected] = useState(false);

  const from = useWatch({
    control,
    name: "activeHours.from",
  });
  const to = useWatch({
    control,
    name: "activeHours.to",
  });

  // Set hasTag to true if tagId has data
  useEffect(() => {
    if ((from && from.trim() !== "") || (to && to.trim() !== "")) {
      setSelected(true);
    }
  }, [from, to]);

  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <Checkbox
          id="workingHours"
          checked={selected}
          onCheckedChange={(val) => setSelected(!!val)}
        />
        <label
          htmlFor="workingHours"
          className="text-sm font-medium leading-none"
        >
          Working Hours
        </label>
      </div>

      {selected && (
        <div className="flex gap-5">
          <Controller
            name="activeHours.from"
            control={control}
            render={({ field }) => (
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="from">From</Label>
                <TimePicker value={field.value} onChange={field.onChange} />
              </div>
            )}
          />
          <Controller
            name="activeHours.to"
            control={control}
            render={({ field }) => (
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="to">To</Label>
                <TimePicker value={field.value} onChange={field.onChange} />
              </div>
            )}
          />
        </div>
      )}
    </div>
  );
};

const MaxPerMonth: FC<ITypeProps> = ({ control }) => {
  const [selected, setSelected] = useState(false);

  const monthlyMax = useWatch({
    control,
    name: "monthlyMax",
  });

  useEffect(() => {
    if (monthlyMax && monthlyMax.trim() !== "") {
      setSelected(true);
    }
  }, [monthlyMax]);

  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <Checkbox
          id="maxPerMonth"
          checked={selected}
          onCheckedChange={(val) => setSelected(!!val)}
        />
        <label
          htmlFor="maxPerMonth"
          className="text-sm font-medium leading-none"
        >
          Max Per month
        </label>
      </div>

      {selected && (
        <Controller
          name="monthlyMax"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="text"
              id="maxPerDay"
              placeholder="Enter max per month"
            />
          )}
        />
      )}
    </div>
  );
};

const MaxPerDay: FC<ITypeProps> = ({ control }) => {
  const [selected, setSelected] = useState(false);

  const dailyMax = useWatch({
    control,
    name: "dailyMax",
  });

  useEffect(() => {
    if (dailyMax && dailyMax.trim() !== "") {
      setSelected(true);
    }
  }, [dailyMax]);

  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <Checkbox
          id="maxPerDay"
          checked={selected}
          onCheckedChange={(val) => setSelected(!!val)}
        />
        <label htmlFor="maxPerDay" className="text-sm font-medium leading-none">
          Max Per Day
        </label>
      </div>

      {selected && (
        <Controller
          name="dailyMax"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="text"
              id="dailyMax"
              placeholder="Enter max per day"
            />
          )}
        />
      )}
    </div>
  );
};

const WeekDaysFields: FC<ITypeProps> = ({ control }) => {
  const [selected, setSelected] = useState(false);

  const weekdays = useWeekDaysForSelect();

  const activeDays = useWatch({
    control,
    name: "activeDays",
  });

  useEffect(() => {
    if (activeDays && activeDays.length > 0) {
      setSelected(true);
    }
  }, [activeDays]);

  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <Checkbox
          id="activeDays"
          checked={selected}
          onCheckedChange={(val) => setSelected(!!val)}
        />
        <label
          htmlFor="activeDays"
          className="text-sm font-medium leading-none"
        >
          Active Days
        </label>
      </div>

      {selected && (
        <Controller
          name="activeDays"
          control={control}
          render={({ field }) => (
            <MultiSelect
              options={weekdays}
              selected={field.value}
              onChange={field.onChange}
              placeholder="Select week days"
            />
          )}
        />
      )}
    </div>
  );
};

export default PolicyForm;
