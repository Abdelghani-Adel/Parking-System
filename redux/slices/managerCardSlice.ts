// features/planCards/planCardSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "@/lib/axiosInstance";

// === Types ===

export interface IManagerCard {
  id: string;
  cardNumber: string;
  cardName: string;
  cardTypeId: string;
  startDate: string;
  period: string;
  endDate: string;
}

interface ManagerCardState {
  data: IManagerCard[];
  loading: boolean;
  error: string | null;
}

const initialState: ManagerCardState = {
  data: [],
  loading: false,
  error: null,
};

// === Slice ===

const managerCardSlice = createSlice({
  name: "managerCards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchManagerCards.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchManagerCards.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchManagerCards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch plan cards";
      })
      .addCase(createManagerCard.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(updateManagerCard.fulfilled, (state, action) => {
        const index = state.data.findIndex(
          (card) => card.id === action.payload.id
        );
        if (index !== -1) state.data[index] = action.payload;
      })
      .addCase(deleteManagerCard.fulfilled, (state, action) => {
        state.data = state.data.filter((card) => card.id !== action.payload);
      });
  },
});

// === Thunks ===

export const fetchManagerCards = createAsyncThunk(
  "managerCards/fetch",
  async () => {
    const res = await axiosInstance.get<IManagerCard[]>("/api/managerCards");
    return res.data;
  }
);

export const createManagerCard = createAsyncThunk(
  "managerCards/create",
  async (newPlanCard: Omit<IManagerCard, "id">) => {
    const res = await axiosInstance.post<IManagerCard>(
      "/api/managerCards",
      newPlanCard
    );
    return res.data;
  }
);

export const updateManagerCard = createAsyncThunk(
  "managerCards/update",
  async (planCard: IManagerCard) => {
    const res = await axiosInstance.put<IManagerCard>(
      `/api/managerCards/${planCard.id}`,
      planCard
    );
    return res.data;
  }
);

export const deleteManagerCard = createAsyncThunk(
  "managerCards/delete",
  async (id: string) => {
    await axiosInstance.delete(`/api/managerCards/${id}`);
    return id;
  }
);

// === Exports ===

export const managerCardActions = managerCardSlice.actions;
export default managerCardSlice.reducer;
