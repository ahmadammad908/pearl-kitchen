import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/productsSlice";
import categoriesReducer from "./products/categoriesSlice";
import cartReducer from "./cart/cartSlice";
import shopReducer from "./shops/shopsSlice";
import shopCategoriesReducer from "./shops/shopCategoriesSlice";
import shopProductsReducer from "./products/shopProductsSlice";
const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    shops: shopReducer,
    shopCategories: shopCategoriesReducer,
    shopProducts: shopProductsReducer,
  },
});
export default store;
