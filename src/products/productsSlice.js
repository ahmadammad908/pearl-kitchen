// Import the functions you need from the SDKs you need
import { createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../authentication/firebase/Firebase";
const initialState = {
  products: [],
  state: "loading",
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => action.payload,
  },
});
export default productsSlice.reducer;
export const { setProducts } = productsSlice.actions;
