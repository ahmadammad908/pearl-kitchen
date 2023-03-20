import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";

const CartCard = (osairam) => {
  return (
    <div>
      <img src={osairam.photoURL}></img>
    </div>
  );
};

export default CartCard;
