import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "@/lib/axiosInstance";
import { CurrencyApi, ICurrency } from "@/services/CurrencyAPI";

interface IState {
  data: ICurrency[];
  loading: boolean;
  error: string | null;
}

const initialState: IState = {
  data: [],
  loading: false,
  error: null,
};

// === Slice ===

const currencySlice = createSlice({
  name: "currencies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCurrencies.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
  },
});

// === Thunks ===

export const fetchCurrencies = createAsyncThunk("currency/fetch", async () => {
  const result = await CurrencyApi.getAll();
  return result;
});

// === Exports ===

export const currencyActions = currencySlice.actions;
export default currencySlice.reducer;
