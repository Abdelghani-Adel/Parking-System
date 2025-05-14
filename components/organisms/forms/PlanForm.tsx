"use client";
import React, { FC, useEffect } from "react";
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
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { createPlan, IPlan, updatePlan } from "@/redux/slices/planSlice";
import {
  useFeeCalculatorForSelect,
  useParkingsForSelect,
  useParkingTypesForSelect,
  usePlanTypesForSelect,
  useVehicleTypesForSelect,
} from "@/hooks/selectOptions";

interface Iprops {
  id?: string;
}

const PlanForm: React.FC<Iprops> = ({ id }) => {
  const dispatch = useAppDispatch();
  const plansList = useAppSelector((state) => state.plans.data);
  const plan = plansList.find((item) => item.id === id);

  const parkingOptions = useParkingsForSelect();
  const VEHICLE_TYPES = useVehicleTypesForSelect();
  const PLAN_TYPES = usePlanTypesForSelect();
  const FEES_CALCULATORS = useFeeCalculatorForSelect();
  const PARKING_TYPES = useParkingTypesForSelect();

  const form = useForm<IPlan>({
    defaultValues: plan ?? {
      id: "",
      name: "",
      planTypeId: "",
      feesCalculatorId: "",
      rate: "",
      parkingTypeId: "",
      parkingId: "",
      status: "",
      categoryTypes: [],
      validity: {
        from: "",
        to: "",
      },
    },
  });

  const { handleSubmit, control } = form;

  const onSubmit = (data: IPlan) => {
    if (id) {
      dispatch(updatePlan(data));
    } else {
      dispatch(createPlan(data));
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
              <Label htmlFor="name">Plan Name</Label>
              <Input
                {...field}
                type="text"
                id="name"
                placeholder="Enter name"
              />
            </div>
          </>
        )}
      />

      <div>
        <h5 className="mb-2">Type</h5>
        <Controller
          name="planTypeId"
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Enter type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {PLAN_TYPES.map((option) => (
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
        <h5 className="mb-2">Fess calculator</h5>
        <Controller
          name="feesCalculatorId"
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Enter fees calculator" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {FEES_CALCULATORS.map((option) => (
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
        name="rate"
        control={control}
        render={({ field }) => (
          <>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="rate">Rate</Label>
              <Input
                {...field}
                type="text"
                id="rate"
                placeholder="Enter rate"
              />
            </div>
          </>
        )}
      />

      <div>
        <h5 className="mb-2">Parking Type</h5>
        <Controller
          name="parkingTypeId"
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Enter parking type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {PARKING_TYPES.map((option) => (
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
                <SelectValue placeholder="Select parking" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {parkingOptions.map((parking) => (
                    <SelectItem key={parking.id} value={parking.id}>
                      {parking.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <div>
        <h5 className="mb-2">Selected category types</h5>
        <Controller
          name="categoryTypes"
          control={control}
          render={({ field }) => (
            <MultiSelect
              options={VEHICLE_TYPES}
              selected={field.value}
              onChange={field.onChange}
              placeholder="Select category types"
            />
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

export default PlanForm;
