import React from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";

const Cart = () => {
  const { cart, state } = useSelector((state) => state.cart);

  let totalPrice = 0;
  cart.forEach((osairam) => {
    totalPrice += osairam.quantity * osairam.price;
  });
  return (
    <div>
      {cart.map((osairam, i) => (
        <CartCard key={i} {...osairam} />
      ))}
      <div>
        <h2 className="TotalPrice1">Total Price: Rs {totalPrice}</h2>
      </div>
    </div>
  );
};

export default Cart;
