// Import the functions you need from the SDKs you need
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      console.log(product);

      const ProductExist = state.cart.find((item) => item.id === product.id);

      if (ProductExist) {
        state.cart = state.cart.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        );
      } else {
        state.cart = [...state.cart, { ...product, quantity: 1 }];
      }
    },

    removeFromCart: (state, action) => {
      const product = action.payload;
      const ProductExist = state.cart.find((item) => item.id === product.id);
      if (ProductExist.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== product.id);
      } else {
        state.cart = state.cart.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        );
      }
    },
  },

  //
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;
