import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  authenticated: boolean;
  accessToken?: string;
  userEmail?: string;
  role: string;
}

const initialState: AuthState = {
  authenticated: false,
  accessToken: undefined,
  userEmail: undefined,
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
    setCredentials: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.userEmail = action.payload.email;
      state.authenticated = true;
    }
  }
});

export const { 
  authenticate, 
  unauthenticate, 
  setAccessToken, 
  setCredentials
} = authSlice.actions;