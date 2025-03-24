import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import { IParking } from "@/services/getParkingsList";

interface FormParkingProps {
  initialValues?: Partial<IParking>;
  mode: "add" | "edit";
  onSubmit: (data: Partial<IParking>) => void; // Callback on form submit
}

const FormParking: React.FC<FormParkingProps> = ({ initialValues, mode, onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Partial<IParking>>({
    defaultValues: initialValues || {
      id: "",
      name: "",
      currency: "",
      feesType: "",
      type: "",
      lostTicketFees: 10,
      dispensers: [],
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
