// Import the functions you need from the SDKs you need
import { createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../authentication/firebase/Firebase";
const initialState = {
  shops: [],
  state: "loading",
};
const shopsSlice = createSlice({
  name: "shops",
  initialState,
  reducers: {
    setShops: (state, action) => action.payload,
  },
});
export default shopsSlice.reducer;
export const { setShops } = shopsSlice.actions;
