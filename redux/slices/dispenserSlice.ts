import axiosInstance from "@/lib/axiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type IDispenser = {
  id: string;
  name: string;
  parkingId: string;
  status: string;
  dispenserUrl: string;
  dispenserTypeId: string;
};

type DispensersState = {
  data: IDispenser[];
  loading: boolean;
  error: string | null;
};

const initialState: DispensersState = {
  data: [],
  loading: false,
  error: null,
};

// === Thunks ===

export const fetchDispensers = createAsyncThunk(
  "dispensers/fetch",
  async () => {
    const res = await axiosInstance.get<IDispenser[]>("/api/dispensers");
    return res.data;
  }
);

export const createDispenser = createAsyncThunk(
  "dispensers/create",
  async (newDispenser: IDispenser) => {
    const res = await axiosInstance.post<IDispenser>(
      "/api/dispensers",
      newDispenser
    );
    return res.data;
  }
);

export const updateDispenser = createAsyncThunk(
  "dispensers/update",
  async (dispenser: IDispenser) => {
    const res = await axiosInstance.put<IDispenser>(
      `/api/dispensers/${dispenser.id}`,
      dispenser
    );
    return res.data;
  }
);

export const deleteDispenser = createAsyncThunk(
  "dispensers/delete",
  async (id: string) => {
    await axiosInstance.delete(`/api/dispensers/${id}`);
    return id;
  }
);

// === Slice ===

const dispenserSlice = createSlice({
  name: "dispensers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDispensers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDispensers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchDispensers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch dispensers";
      })
      .addCase(createDispenser.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(updateDispenser.fulfilled, (state, action) => {
        const index = state.data.findIndex((d) => d.id === action.payload.id);
        if (index !== -1) state.data[index] = action.payload;
      })
      .addCase(deleteDispenser.fulfilled, (state, action) => {
        state.data = state.data.filter((d) => d.id !== action.payload);
      });
  },
});

export const dispenserActions = dispenserSlice.actions;
export default dispenserSlice.reducer;
