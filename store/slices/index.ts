import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { apiSlice } from "./apiSlice";
import { authSlice } from "./authSlice";
import { loadingSlice } from "./loadingSlice";
import { selectBranchSlice } from "./selectBranchSlice";

const rootReducer = combineReducers({
  user: userSlice.reducer,
  api: apiSlice.reducer,
  auth: authSlice.reducer,
  loading: loadingSlice.reducer,
  selectBranch: selectBranchSlice.reducer,
});

export default rootReducer;