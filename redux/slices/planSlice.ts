import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "@/lib/axiosInstance";

// === Types ===

export interface IPlan {
  id: string;
  name: string;
  planTypeId: string;
  feesCalculatorId: string;
  rate: string;
  parkingTypeId: string;
  parkingId: string;
  status: string;
  categoryTypes: string[];
  validity: {
    from: string;
    to: string;
  };
}

interface PlansState {
  data: IPlan[];
  loading: boolean;
  error: string | null;
}

const initialState: PlansState = {
  data: [],
  loading: false,
  error: null,
};

// === Slice ===

const planSlice = createSlice({
  name: "plans",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlans.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPlans.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPlans.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch plans";
      })
      .addCase(createPlan.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(updatePlan.fulfilled, (state, action) => {
        const index = state.data.findIndex((p) => p.id === action.payload.id);
        if (index !== -1) state.data[index] = action.payload;
      })
      .addCase(deletePlan.fulfilled, (state, action) => {
        state.data = state.data.filter((p) => p.id !== action.payload);
      });
  },
});

// === Thunks ===

export const fetchPlans = createAsyncThunk("plans/fetch", async () => {
  const res = await axiosInstance.get<IPlan[]>("/api/plans");
  return res.data;
});

export const createPlan = createAsyncThunk(
  "plans/create",
  async (newPlan: IPlan) => {
    const res = await axiosInstance.post<IPlan>("/api/plans", newPlan);
    return res.data;
  }
);

export const updatePlan = createAsyncThunk(
  "plans/update",
  async (plan: IPlan) => {
    const res = await axiosInstance.put<IPlan>(`/api/plans/${plan.id}`, plan);
    return res.data;
  }
);

export const deletePlan = createAsyncThunk(
  "plans/delete",
  async (id: string) => {
    await axiosInstance.delete(`/api/plans/${id}`);
    return id;
  }
);

// === Exports ===

export const planActions = planSlice.actions;
export default planSlice.reducer;
