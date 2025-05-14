import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "@/lib/axiosInstance";

// === Types ===

export interface IPolicy {
  id: string;
  name: string;
  activeDays: string[];
  activeHours: {
    from: string;
    to: string;
  };
  dailyMax: string;
  monthlyMax: string;
}

interface PoliciesState {
  data: IPolicy[];
  loading: boolean;
  error: string | null;
}

const initialState: PoliciesState = {
  data: [],
  loading: false,
  error: null,
};

// === Thunks ===

export const fetchPolicies = createAsyncThunk("policies/fetch", async () => {
  const res = await axiosInstance.get<IPolicy[]>("/api/policies");
  return res.data;
});

export const createPolicy = createAsyncThunk(
  "policies/create",
  async (newPolicy: IPolicy) => {
    const res = await axiosInstance.post<IPolicy>("/api/policies", newPolicy);
    return res.data;
  }
);

export const updatePolicy = createAsyncThunk(
  "policies/update",
  async (policy: IPolicy) => {
    const res = await axiosInstance.put<IPolicy>(
      `/api/policies/${policy.id}`,
      policy
    );
    return res.data;
  }
);

export const deletePolicy = createAsyncThunk(
  "policies/delete",
  async (id: string) => {
    await axiosInstance.delete(`/api/policies/${id}`);
    return id;
  }
);

// === Slice ===

const policySlice = createSlice({
  name: "policies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPolicies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPolicies.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPolicies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch policies";
      })
      .addCase(createPolicy.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(updatePolicy.fulfilled, (state, action) => {
        const index = state.data.findIndex((p) => p.id === action.payload.id);
        if (index !== -1) state.data[index] = action.payload;
      })
      .addCase(deletePolicy.fulfilled, (state, action) => {
        state.data = state.data.filter((p) => p.id !== action.payload);
      });
  },
});

// === Exports ===

export const policyActions = policySlice.actions;
export default policySlice.reducer;
