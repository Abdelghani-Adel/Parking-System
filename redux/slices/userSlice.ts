import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "@/lib/axiosInstance";

// === Types ===

export interface IUser {
  id: string;
  name: string;
  email: string;
  roleId: string;
  phone: string;
}

interface UsersState {
  data: IUser[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  data: [],
  loading: false,
  error: null,
};

// === Thunks ===

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const res = await axiosInstance.get<IUser[]>("/api/users");
  return res.data;
});

export const createUser = createAsyncThunk(
  "users/create",
  async (newUser: IUser) => {
    const res = await axiosInstance.post<IUser>("/api/users", newUser);
    return res.data;
  }
);

export const updateUser = createAsyncThunk(
  "users/update",
  async (user: IUser) => {
    const res = await axiosInstance.put<IUser>(`/api/users/${user.id}`, user);
    return res.data;
  }
);

export const deleteUser = createAsyncThunk(
  "users/delete",
  async (id: string) => {
    await axiosInstance.delete(`/api/users/${id}`);
    return id;
  }
);

// === Slice ===

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch users";
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.data.findIndex((u) => u.id === action.payload.id);
        if (index !== -1) state.data[index] = action.payload;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.data = state.data.filter((u) => u.id !== action.payload);
      });
  },
});

// === Exports ===

export const userActions = userSlice.actions;
export default userSlice.reducer;
