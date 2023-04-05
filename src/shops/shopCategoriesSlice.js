// Import the functions you need from the SDKs you need
import { createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../authentication/firebase/Firebase";
const initialState = {
  shopCategories: [],
  state: "loading",
};
const shopCategoriesSlice = createSlice({
  name: "shopCategories",
  initialState,
  reducers: {
    setShopCategories: (state, action) => action.payload,
  },
});
export default shopCategoriesSlice.reducer;
export const { setShopCategories } = shopCategoriesSlice.actions;
