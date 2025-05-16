import { AuthApi, LoginRequest } from "@/services/AuthApi";
import { IUser } from "@/services/UserAPI";
import { BrowserStorage } from "@/utils/browserStorage";
import { TOKEN_KEY, USER_KEY } from "@/utils/constants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IState {
  data: {
    accessToken: string;
    user: IUser;
  } | null;
  loading: boolean;
  error: string | null;
}

const initialState: IState = {
  data: {
    accessToken: "",
    user: {
      id: "",
      email: "",
      roleId: "",
      username: "",
      phoneNumber: "",
      countryCode: "",
      image: "",
      createdAt: "",
      updatedAt: "",
      role: {
        name: "",
        tag: "",
      },
    },
  },
  loading: false,
  error: null,
};

// === Slice ===

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state = action.payload;
      });
  },
});

// === Thunks ===

export const loginUser = createAsyncThunk(
  "profile/login",
  async (loginRequest: LoginRequest) => {
    const result = await AuthApi.login(loginRequest);
    const cookie = JSON.stringify(result.data);
    BrowserStorage.setCookie(USER_KEY, cookie);
    return result.data;
  }
);

export const logoutUser = createAsyncThunk("profile/logout", async () => {
  await AuthApi.logout();
  BrowserStorage.deleteCookie(USER_KEY);
  return initialState;
});

// === Exports ===

export const profileActions = profileSlice.actions;
export default profileSlice.reducer;
