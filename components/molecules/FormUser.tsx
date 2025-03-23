import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";

interface UserFormValues {
  email: string;
  password: string;
  phone: string;
  role: string;
}

interface FormUserProps {
  initialValues?: Partial<UserFormValues>; // For editing an existing user
  mode: "add" | "edit"; // Determines form mode
  onSubmit: (data: UserFormValues) => void; // Callback on form submit
}

const FormUser: React.FC<FormUserProps> = ({ initialValues, mode, onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UserFormValues>({
    defaultValues: initialValues || {
      email: "",
      password: "",
      phone: "",
      role: "operator",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      {/* Email Field */}
      <FormControl fullWidth>
        <Controller
          name="email"
          control={control}
          rules={{ required: "Email is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              variant="outlined"
              error={!!errors.email}
              helperText={errors.email?.message}
              InputProps={{
                readOnly: mode === "edit", // Read-only when editing
              }}
            />
          )}
        />
      </FormControl>

      {
        <FormControl fullWidth>
          <Controller
            name="password"
            control={control}
            rules={{
              required: mode === "add" ? "Password is required" : false,
            }}
            render={({ field }) => (
              <TextField
                {...field}
                type="password"
                label={mode === "edit" ? "New Password (Optional)" : "Password"}
                variant="outlined"
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            )}
          />
        </FormControl>
      }

      {/* Phone Field */}
      <FormControl fullWidth>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => <TextField {...field} label="Phone" variant="outlined" />}
        />
      </FormControl>

      {/* Role Selection */}
      <FormControl fullWidth>
        <InputLabel id="role-label">Role</InputLabel>
        <Controller
          name="role"
          control={control}
          render={({ field }) => (
            <Select {...field} labelId="role-label" label="Role">
              <MenuItem value="super admin">Super Admin</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="supervisor">Supervisor</MenuItem>
              <MenuItem value="operator">Operator</MenuItem>
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

export default FormUser;
