"use client";

import { FormControl, FormHelperText, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [period, setPeriod] = useState<number>(1);

  // Calculate end date: 60 months (5 years) after the start date
  const endDate = startDate
    ? new Date(startDate.getFullYear(), startDate.getMonth() + period, startDate.getDate())
    : null;

  return (
    <>
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="period">Subscription Period</InputLabel>
        <OutlinedInput
          endAdornment={<InputAdornment position="end">Months</InputAdornment>}
          type="number"
          label="Subscription Period"
          onChange={(e) => setPeriod(Number(e.target.value) || 1)}
        />
      </FormControl>

      <div className="flex gap-2">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="yyyy-MM-dd"
          className="w-full mt-1 p-2 border rounded"
          customInput={<MUIDateInput label="Start Date" />}
        />
        <DatePicker
          selected={endDate}
          readOnly
          dateFormat="yyyy-MM-dd"
          className="w-full mt-1 p-2 border rounded bg-gray-100 cursor-not-allowed"
          customInput={<MUIDateInput label="End Date" />}
        />
      </div>
    </>
  );
};

// Custom MUI-styled input for react-datepicker
const MUIDateInput = forwardRef<HTMLInputElement, { value?: string; onClick?: () => void; label?: string }>(
  ({ value, onClick, label }, ref) => (
    <TextField
      fullWidth
      variant="outlined"
      label={label}
      value={value}
      onClick={onClick}
      inputRef={ref} // Properly assigns the ref
      placeholder="Select start date"
      InputProps={{
        readOnly: true, // Prevents manual input
      }}
    />
  )
);

export default DateRangePicker;
