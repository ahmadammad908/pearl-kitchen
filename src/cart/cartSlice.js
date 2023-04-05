// Import the functions you need from the SDKs you need
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    addToCart: (state, action) => {
      const product = action.payload;
      const ProductExist = state.cart.find((item) => item.id === product.id);

      let cart = [];

      if (ProductExist) {
        cart = state.cart.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        );
      } else {
        cart = [...state.cart, { ...product, quantity: 1 }];
      }

      state.cart = cart;
      localStorage.setItem("cart", JSON.stringify(cart));
    },
    removeFromCart: (state, action) => {
      const product = action.payload;
      const ProductExist = state.cart.find((item) => item.id === product.id);

      let cart = [];

      if (ProductExist.quantity === 1) {
        cart = state.cart.filter((item) => item.id !== product.id);
      } else {
        cart = state.cart.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        );
      }

      state.cart = cart;
      localStorage.setItem("cart", JSON.stringify(cart));
    },
  },
});

export default cartSlice.reducer;
export const { setCart, addToCart, removeFromCart } = cartSlice.actions;
