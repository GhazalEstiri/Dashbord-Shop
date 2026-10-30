import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
type Role = "admin" | "user" | "vendor";
type StatuUser = "Active" | "Inactive";

type User = {
  id: number;
  email: string;
  name: string;
  status: StatuUser;
  role: Role;
  adress: {
    name: string;
    path: string;
    phoneNumber: number;
    postcode: number;
  };
  // password: string;
};
type AuthState = {
  user: User | null;
  initialized: boolean;
};

const initialState: AuthState = {
  user: null,
  initialized: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    localUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setInitialized: (state) => {
      state.initialized = true;
    },
  },
});

export const { login, logout, localUser, setInitialized } = authSlice.actions;
export const authReducer = authSlice.reducer;
