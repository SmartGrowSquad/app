import { createSlice } from "@reduxjs/toolkit";
import { LatLng } from "react-native-maps";

interface SelectedBranch { 
  brachId: number | null,
  branchName: String,
  branchAddress: String,
  branchLocation: LatLng
}
const initialState: SelectedBranch = {
  brachId: null,
  branchName: "",
  branchAddress: "",
  branchLocation: {
    latitude: 0,
    longitude: 0
  }
}
export const selectBranchSlice = createSlice({ 
  name: "loading", 
  initialState,
  reducers: {
    selectBranch: (state, action) => {
      state.brachId = action.payload.id;
      state.branchName = action.payload.name;
      state.branchAddress = action.payload.address;
      state.branchLocation = action.payload.location;
    },
    resetSelectedBranch: (state) => {
      state.brachId = null;
      state.branchName = "";
      state.branchAddress = "";
      state.branchLocation = {
        latitude: 0,
        longitude: 0
      }
    }
  }
});

export const { selectBranch, resetSelectedBranch } = selectBranchSlice.actions; 