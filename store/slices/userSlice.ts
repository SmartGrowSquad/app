import { createSlice } from "@reduxjs/toolkit";
import { PurchaseDto } from "../types";

interface UserState {
  id: number
  name: string;
  email: string;
  location?: string | null;
  role: string;
  purchase: PurchaseDto[];
}

const initialState: UserState = {
  id: 0,
  name: "test",
  email: "test@email.com",
  location: null,
  role: "ROLE_CUSTOMER",
  purchase: []
}

export const userSlice = createSlice({
  name: "user", 
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(action.payload);
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.location = action.payload.location;
      state.role = action.payload.role;
      state.purchase = action.payload.purchase;
    },
    resetUserData: (state) => {
      state.id = 0;
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