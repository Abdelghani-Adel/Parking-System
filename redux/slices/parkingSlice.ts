// features/parkings/parkingSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "@/lib/axiosInstance";

// === Types ===

export interface IParking {
  id: string;
  name: string;
  currency: string;
  vat: string;
  lost_ticket_fees: string;
  lost_card_fees: string;
  capacity: string;
  entry_grace_period: string;
  exit_grace_period: string;
  card_grace_period: string;
  tag_grace_period: string;
  address: string;
  is_active: boolean;
  working_days: string[];
  workingHours: {
    from: string;
    to: string;
  };
}

interface ParkingsState {
  data: IParking[];
  loading: boolean;
  error: string | null;
}

const initialState: ParkingsState = {
  data: [],
  loading: false,
  error: null,
};

// === Slice ===

const parkingSlice = createSlice({
  name: "parkings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchParkings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchParkings.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchParkings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch parkings";
      })
      .addCase(createParking.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(updateParking.fulfilled, (state, action) => {
        const index = state.data.findIndex((p) => p.id === action.payload.id);
        if (index !== -1) state.data[index] = action.payload;
      })
      .addCase(deleteParking.fulfilled, (state, action) => {
        state.data = state.data.filter((p) => p.id !== action.payload);
      });
  },
});

// === Thunks ===

export const fetchParkings = createAsyncThunk("parkings/fetch", async () => {
  const res = await axiosInstance.get<IParking[]>("/api/parkings");
  return res.data;
});

export const createParking = createAsyncThunk(
  "parkings/create",
  async (newParking: IParking) => {
    const res = await axiosInstance.post<IParking>("/api/parkings", newParking);
    return res.data;
  }
);

export const updateParking = createAsyncThunk(
  "parkings/update",
  async (parking: IParking) => {
    const res = await axiosInstance.put<IParking>(
      `/api/parkings/${parking.id}`,
      parking
    );
    return res.data;
  }
);

export const deleteParking = createAsyncThunk(
  "parkings/delete",
  async (id: string) => {
    await axiosInstance.delete(`/api/parkings/${id}`);
    return id;
  }
);

// === Exports ===

export const parkingActions = parkingSlice.actions;
export default parkingSlice.reducer;
