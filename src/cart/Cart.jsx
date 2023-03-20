import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";
import CartCard from "./CartCard";

const Cart = () => {
  const { cart, state } = useSelector((state) => state.cart);

  return (
    <div>
      {cart.map((osairam, i) => (
        <CartCard key={i} {...osairam} />
      ))}
    </div>
  );
};

export default Cart;
