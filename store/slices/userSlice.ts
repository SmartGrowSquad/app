import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  email: string;
  location?: string | null;
  role: string;
}

const initialState: UserState = {
  name: "",
  email: "",
  location: null,
  role: ""
}

export const userSlice = createSlice({
  name: "user", 
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.location = action.payload.location;
      state.role = action.payload.role;
    },
    resetUserData: (state) => {
      state.name = "";
      state.email = "";
      state.location = null;
      state.role = "";
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    }
  }
});

export const { setUser } = userSlice.actions;