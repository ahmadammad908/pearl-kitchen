import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../cart/cartSlice";

const CartCard = (osairam) => {
  console.log("osariammm", osairam);
  const dispatch = useDispatch();
  return (
    <div>
      <img src={osairam.photoURL}></img>
      <h1>{osairam.name}</h1>
      <p>{osairam.price}</p>
      <div>
        <button
          style={{ border: "2px solid red", margin: "10px" }}
          onClick={() => dispatch(addToCart(osairam))}
        >
          +
        </button>
        <button
          style={{ border: "2px solid red" }}
          onClick={() => dispatch(removeFromCart(osairam))}
        >
          -
        </button>
      </div>
      <div>
        <p>
          {osairam.quantity} * {osairam.price}
        </p>
      </div>
    </div>
  );
};

export default CartCard;
