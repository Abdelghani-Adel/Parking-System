// features/parkings/parkingSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "@/lib/axiosInstance";
import ParkingApi, { IParking } from "@/services/ParkingApi";

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
  const result = await ParkingApi.getAll();
  return result;
});

export const createParking = createAsyncThunk(
  "parkings/create",
  async (newParking: IParking) => {
    const result = await ParkingApi.create(newParking);
    return result;
  }
);

export const updateParking = createAsyncThunk(
  "parkings/update",
  async (parking: IParking) => {
    const result = await ParkingApi.update(parking);
    return result;
  }
);

export const deleteParking = createAsyncThunk(
  "parkings/delete",
  async (id: string) => {
    await ParkingApi.delete(id);
    return id;
  }
);

// === Exports ===

export const parkingActions = parkingSlice.actions;
export default parkingSlice.reducer;
