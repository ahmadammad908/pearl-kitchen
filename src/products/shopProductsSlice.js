// Import the functions you need from the SDKs you need
import { createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../authentication/firebase/Firebase";
const initialState = {
  shopId: {
    products: [],
    state: "loading",
  },
};
const shopProductsSlice = createSlice({
  name: "shopProducts",
  initialState,
  reducers: {
    setShopProducts: (state, action) => ({
      [action.payload.id]: action.payload.data,
    }),
  },
});
export default shopProductsSlice.reducer;
export const { setShopProducts } = shopProductsSlice.actions;
