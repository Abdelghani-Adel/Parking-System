"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import { IParking } from "@/services/getParkingsList";

interface FormParkingProps {
  initialValues?: string[] | null | undefined;
  mode: "add" | "edit";
  onSubmit: (data: Partial<IParking>) => void; // Callback on form submit
}

const FormParking: React.FC<FormParkingProps> = ({ initialValues, mode, onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Partial<IParking>>({
    defaultValues: {
      id: initialValues?.[0] ?? "",
      name: initialValues?.[1] ?? "",
      type: initialValues?.[2] ?? "",
      currency: initialValues?.[3] ?? "",
      feesType: initialValues?.[4] ?? "",
      lostTicketFees: initialValues?.[5] ?? "0",
      // dispensers: initialValues?.dispensers ?? [],
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      {/* Email Field */}
      <FormControl fullWidth>
        <Controller
          name="name"
          control={control}
          rules={{ required: "Name is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Parking Name"
              variant="outlined"
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          )}
        />
      </FormControl>

      <FormControl fullWidth>
        <Controller
          name="lostTicketFees"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Lost Ticket Fees"
              variant="outlined"
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          )}
        />
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="role-label">Calculation Mode</InputLabel>
        <Controller
          name="type"
          control={control}
          render={({ field }) => (
            <Select {...field} labelId="role-label" label="Role">
              <MenuItem value="per hour">Per Hour</MenuItem>
              <MenuItem value="per entry">Per Entry</MenuItem>
            </Select>
          )}
        />
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="role-label">currency</InputLabel>
        <Controller
          name="currency"
          control={control}
          render={({ field }) => (
            <Select {...field} labelId="role-label" label="Role">
              <MenuItem value="EGP">EGP</MenuItem>
              <MenuItem value="Dollar">Dollar</MenuItem>
            </Select>
          )}
        />
      </FormControl>

      {/* Save Button */}
      <Button type="submit" variant="contained" color="primary" fullWidth className="py-3 rounded-lg text-white">
        Save
      </Button>
    </form>
  );
};

export default FormParking;
