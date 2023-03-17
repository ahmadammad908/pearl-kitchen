// Import the functions you need from the SDKs you need
import { createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../authentication/firebase/Firebase";

const initialState = {
  categories: [],
  state: "loading",
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action) => action.payload,
  },
});

export default categoriesSlice.reducer;
export const { setCategories } = categoriesSlice.actions;
