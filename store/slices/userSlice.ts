import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  email: string;
  authenticated: boolean;
  role: string;
}

const initialState: UserState = {
  name: "",
  email: "",
  authenticated: false,
  role: ""
}

export const userSlice = createSlice({
  name: "user", 
  initialState,
  reducers: {}
});