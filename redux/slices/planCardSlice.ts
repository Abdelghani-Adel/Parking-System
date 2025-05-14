// features/planCards/planCardSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "@/lib/axiosInstance";

// === Types ===

export interface IPlanCard {
  id: string;
  cardNumber: string;
  cardName: string;
  cardTypeId: string;
  policies: string[];
  startDate: string;
  period: string;
  endDate: string;
  tagId: string;
  planId: string;
}

interface PlanCardState {
  data: IPlanCard[];
  loading: boolean;
  error: string | null;
}

const initialState: PlanCardState = {
  data: [],
  loading: false,
  error: null,
};

// === Slice ===

const planCardSlice = createSlice({
  name: "planCards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlanCards.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPlanCards.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPlanCards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch plan cards";
      })
      .addCase(createPlanCard.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(updatePlanCard.fulfilled, (state, action) => {
        const index = state.data.findIndex(
          (card) => card.id === action.payload.id
        );
        if (index !== -1) state.data[index] = action.payload;
      })
      .addCase(deletePlanCard.fulfilled, (state, action) => {
        state.data = state.data.filter((card) => card.id !== action.payload);
      });
  },
});

// === Thunks ===

export const fetchPlanCards = createAsyncThunk("planCards/fetch", async () => {
  const res = await axiosInstance.get<IPlanCard[]>("/api/planCards");
  return res.data;
});

export const createPlanCard = createAsyncThunk(
  "planCards/create",
  async (newPlanCard: Omit<IPlanCard, "id">) => {
    const res = await axiosInstance.post<IPlanCard>(
      "/api/planCards",
      newPlanCard
    );
    return res.data;
  }
);

export const updatePlanCard = createAsyncThunk(
  "planCards/update",
  async (planCard: IPlanCard) => {
    const res = await axiosInstance.put<IPlanCard>(
      `/api/planCards/${planCard.id}`,
      planCard
    );
    return res.data;
  }
);

export const deletePlanCard = createAsyncThunk(
  "planCards/delete",
  async (id: string) => {
    await axiosInstance.delete(`/api/planCards/${id}`);
    return id;
  }
);

// === Exports ===

export const planCardActions = planCardSlice.actions;
export default planCardSlice.reducer;
