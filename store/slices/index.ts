import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { apiSlice } from "./apiSlice";

const rootReducer = combineReducers({
  user: userSlice.reducer,
  api: apiSlice.reducer,
});

export default rootReducer;