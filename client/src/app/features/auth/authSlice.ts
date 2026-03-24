import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { loginAPI, registerAPI } from "../../../services/api/auth";
import { setToken, removeToken, getToken } from "../../../utils/token";

interface AuthState {
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: getToken(), // get from localStorage if exists
  loading: false,
  error: null,
};

// Async thunk for login
export const loginUser = createAsyncThunk(
  "auth/login",
  async (data: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await loginAPI(data);
      setToken(response.token); // save token
      return response.token;
    } catch (err: any) {
      return rejectWithValue(err.response.data.message || "Invalid Credentials");
    }
  }
);

// Async thunk for register
export const registerUser = createAsyncThunk(
  "auth/register",
  async (data: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await registerAPI(data);
      setToken(response.token); // save token after registration
      return response.token;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "Registration failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      removeToken();
    },
  },
  extraReducers: (builder) => {
    // LOGIN
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.token = action.payload;
      })
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });

    // REGISTER
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.token = action.payload; // user is logged in immediately
      })
      .addCase(registerUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
