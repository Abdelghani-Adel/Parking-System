"use client";

import BasicModal from "@/components/ui/BasicModal";
import { useLanguage } from "@/context/LanguageContext";
import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import React, { useState } from "react";
import { IoIosSave } from "react-icons/io";
import { MdOutlineAddCard } from "react-icons/md";
import DateRangePicker from "./DatePicker";
import { IoMdCloseCircleOutline } from "react-icons/io";

const catOptions = ["Truck", "Motorcycle", "Limo"];

const AddCard = () => {
  const { t } = useLanguage();
  const [isOpened, setIsOpened] = useState(false);
  const [cardType, setCardType] = React.useState("manager");
  const [categories, setCategories] = React.useState<string[]>([]);

  const onCardTypeChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setCardType(newAlignment);
  };

  const onCategoriesChange = (event: SelectChangeEvent<typeof categories>) => {
    const {
      target: { value },
    } = event;
    setCategories(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <button
        onClick={() => setIsOpened(true)}
        className="bg-green-500 py-2 px-5 rounded-lg text-white flex items-center gap-2"
      >
        <MdOutlineAddCard className="text-2xl" />
        <span>New Card</span>
      </button>

      <BasicModal isOpened={isOpened}>
        <div className="bg-white dark:bg-grey-dark p-5 rounded-lg relative">
          <h1 className="flex items-center gap-2 text-xl text-primary font-semibold mb-4">
            <MdOutlineAddCard className="text-2xl" />
            New Card
          </h1>

          <button
            onClick={() => setIsOpened(false)}
            className="flex items-center gap-2 text-red-500 p-1 rounded-full absolute top-4 right-4"
          >
            <IoMdCloseCircleOutline className="text-3xl" />
          </button>

          <div className="w-96 space-y-5">
            <div>
              {/* <h6 className="text-grey mb-2">Card Type</h6> */}
              <ToggleButtonGroup
                color="primary"
                value={cardType}
                exclusive
                onChange={onCardTypeChange}
                aria-label="card-type"
              >
                <ToggleButton value="manager">Manager</ToggleButton>
                <ToggleButton value="subscription">Subscription</ToggleButton>
                <ToggleButton value="stored">Stored Value</ToggleButton>
              </ToggleButtonGroup>
            </div>

            <FormControl fullWidth>
              <TextField id="outlined-basic" label="Card id" variant="outlined" />
            </FormControl>

            {cardType === "subscription" && (
              <>
                <FormControl fullWidth>
                  <TextField id="outlined-basic" label="Entry / Exists limit" type="number" variant="outlined" />
                </FormControl>
                <DateRangePicker />
              </>
            )}

            {cardType === "stored" && (
              <>
                <FormControl fullWidth>
                  <InputLabel id="demo-multiple-checkbox-label">Categories</InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={categories}
                    onChange={onCategoriesChange}
                    input={<OutlinedInput label="Categories" />}
                    renderValue={(selected) => selected.join(", ")}
                  >
                    {catOptions.map((category) => (
                      <MenuItem key={category} value={category}>
                        <Checkbox checked={categories.includes(category)} />
                        <ListItemText primary={category} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </>
            )}

            <button className="mt-3 w-full text-sm flex items-center justify-center gap-2 py-3 bg-primary hover:bg-primary-dark transition duration-300 px-5 rounded-lg text-white">
              <IoIosSave className="text-2xl" />
              <span>{t("save")}</span>
            </button>
          </div>
        </div>
      </BasicModal>
    </div>
  );
};

export default AddCard;
