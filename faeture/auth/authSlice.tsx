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
  // password: string;
};
type AuthState = {
  user: User | null;
};

const initialState: AuthState = {
  user: null,
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
    localUser:(state,action :PayloadAction<User>)=>{
      state.user=action.payload
    }
  },
});

export const { login, logout,localUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
