import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  authenticated: boolean;
  accessToken?: string;
  refreshToken?: string;
  role: string;
}

const initialState: AuthState = {
  authenticated: false,
  role: "ROLE_CUSTOMER"
}

export const authSlice = createSlice({
  name: "auth", 
  initialState,
  reducers: {
    authenticate: (state) => {
      state.authenticated = true;
    },
    unauthenticate: (state) => {
      state.authenticated = false;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    }
  }
});

export const { authenticate, unauthenticate, setAccessToken, setRefreshToken } = authSlice.actions;