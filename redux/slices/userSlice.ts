import axiosInstance from "@/lib/axiosInstance";
import { IUser, UserApi } from "@/services/UserAPI";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
  const result = await UserApi.getAll();
  return result;
});

export const createUser = createAsyncThunk(
  "users/create",
  async (newUser: IUser) => {
    const result = await UserApi.create(newUser);
    return result;
  }
);

export const updateUser = createAsyncThunk(
  "users/update",
  async (user: IUser) => {
    const result = await UserApi.update(user);
    return result;
  }
);

export const deleteUser = createAsyncThunk(
  "users/delete",
  async (id: string) => {
    await UserApi.delete(`/api/users/${id}`);
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
