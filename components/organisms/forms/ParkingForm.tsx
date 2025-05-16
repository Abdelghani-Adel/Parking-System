"use client";
import { Button } from "@/components/ui/shadcn/ui/button";
import { Checkbox } from "@/components/ui/shadcn/ui/checkbox";
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
import { Separator } from "@/components/ui/shadcn/ui/separator";
import { SheetFooter } from "@/components/ui/shadcn/ui/sheet";
import { MultiSelect } from "@/components/ui/shadcn/wrappers/MultiSelect";
import { TimePicker } from "@/components/ui/shadcn/wrappers/TimePicker";
import {
  useCurrenciesForSelect,
  useWeekDaysForSelect,
} from "@/hooks/selectOptions";
import { createParking, updateParking } from "@/redux/slices/parkingSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { IParking } from "@/services/ParkingApi";
import React, { FC } from "react";
import { Control, Controller, useForm } from "react-hook-form";

interface IProps {
  id?: string;
  onClose: () => void;
}

const ParkingForm: React.FC<IProps> = ({ id, onClose }) => {
  const dispatch = useAppDispatch();
  const parkingList = useAppSelector((state) => state.parkings.data);
  const parking = parkingList.find((item) => item.id === id);
  const currencies = useCurrenciesForSelect();

  const form = useForm<IParking>({
    defaultValues: parking ?? {
      id: "",
      name: "",
      currencyId: "1",
      vatPercentage: "",
      lostTicketFee: "",
      lostCardFee: "",
      lostTagFee: "",
      totalCapacity: "",
      entryGracePeriod: "",
      exitGracePeriod: "",
      cardGracePeriod: "",
      tagGracePeriod: "",
      address: "",
      isActive: false,
      workingDays: [],
      workingHours: {
        from: "",
        to: "",
      },
    },
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  const onSubmit = async (data: IParking) => {
    if (id) {
      await dispatch(updateParking(data));
    } else {
      await dispatch(createParking(data));
    }

    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <Controller
        name="isActive"
        control={control}
        render={({ field }) => (
          <>
            <div className="flex items-center space-x-2 mt-5">
              <Checkbox
                id="isActive"
                checked={field.value}
                onCheckedChange={field.onChange}
              />
              <label
                htmlFor="isActive"
                className="text-sm font-medium leading-none"
              >
                Is Active
              </label>
            </div>
          </>
        )}
      />

      <Controller
        name="name"
        control={control}
        rules={{ required: "Parking name is required" }}
        render={({ field }) => (
          <div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="parkingName">Parking Name</Label>
              <Input
                {...field}
                type="text"
                id="parkingName"
                placeholder="Enter name of the parking"
              />
            </div>

            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name?.message}
              </p>
            )}
          </div>
        )}
      />

      <div>
        <h5 className="mb-2">currency</h5>
        <Controller
          name="currencyId"
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose the currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {currencies.map((option) => (
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
        name="totalCapacity"
        control={control}
        render={({ field }) => (
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="capacity">Capacity</Label>
            <Input
              {...field}
              type="text"
              id="capacity"
              placeholder="Enter capacity"
            />
          </div>
        )}
      />
      <Controller
        name="address"
        control={control}
        render={({ field }) => (
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="address">Address</Label>
            <Input
              {...field}
              type="text"
              id="address"
              placeholder="Enter address"
            />
          </div>
        )}
      />

      <Separator />
      <h5 className="font-bold text-xl">Working Hours</h5>
      <div className="flex gap-5">
        <Controller
          name="workingHours.from"
          control={control}
          render={({ field }) => (
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="from">From</Label>
              <TimePicker value={field.value} onChange={field.onChange} />
            </div>
          )}
        />
        <Controller
          name="workingHours.to"
          control={control}
          render={({ field }) => (
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="to">To</Label>
              <TimePicker value={field.value} onChange={field.onChange} />
            </div>
          )}
        />
      </div>
      <WeekDaysFields control={control} />

      <Separator />

      <h5 className="font-bold text-xl">Fees</h5>

      <div className="grid grid-cols-3 gap-2">
        <Controller
          name="vatPercentage"
          control={control}
          render={({ field }) => (
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="vat">Vat</Label>
              <Input {...field} type="text" id="vat" placeholder="Enter VAT" />
            </div>
          )}
        />
        <Controller
          name="lostTicketFee"
          control={control}
          render={({ field }) => (
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="lostTicketFees">Lost ticket</Label>
              <Input
                {...field}
                type="text"
                id="lostTicketFees"
                placeholder="Enter fees"
              />
            </div>
          )}
        />
        <Controller
          name="lostCardFee"
          control={control}
          render={({ field }) => (
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="lostCardFees">Lost card</Label>
              <Input
                {...field}
                type="text"
                id="lostCardFees"
                placeholder="Enter fees"
              />
            </div>
          )}
        />
      </div>

      <Separator />
      <h5 className="font-bold text-xl">Grace Periods</h5>

      <div className="grid grid-cols-2 gap-4">
        <Controller
          name="entryGracePeriod"
          control={control}
          render={({ field }) => (
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="entry_grace_period">Entry</Label>
              <Input
                {...field}
                type="text"
                id="entry_grace_period"
                placeholder="Entry grace period"
              />
            </div>
          )}
        />
        <Controller
          name="exitGracePeriod"
          control={control}
          render={({ field }) => (
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="exit_grace_period">Exit</Label>
              <Input
                {...field}
                type="text"
                id="exit_grace_period"
                placeholder="Exit grace period"
              />
            </div>
          )}
        />
        <Controller
          name="cardGracePeriod"
          control={control}
          render={({ field }) => (
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="exit_grace_period">Card</Label>
              <Input
                {...field}
                type="text"
                id="card_grace_period"
                placeholder="Card grace period"
              />
            </div>
          )}
        />
        <Controller
          name="tagGracePeriod"
          control={control}
          render={({ field }) => (
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="exit_grace_period">Tag</Label>
              <Input
                {...field}
                type="text"
                id="tag_grace_period"
                placeholder="Tag grace period"
              />
            </div>
          )}
        />
      </div>

      <Separator />
      <SheetFooter>
        <Button type="submit">Save</Button>
      </SheetFooter>
    </form>
  );
};

interface IWeekDaysProps {
  control: Control<IParking>;
}

const WeekDaysFields: FC<IWeekDaysProps> = ({ control }) => {
  const weekdays = useWeekDaysForSelect();

  return (
    <div>
      <h5 className="mb-2">Selected Week Days</h5>
      <Controller
        name="workingDays"
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
    </div>
  );
};

export default ParkingForm;
