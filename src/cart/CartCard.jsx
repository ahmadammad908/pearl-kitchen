import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../cart/cartSlice";

const CartCard = (osairam) => {
  console.log("osariammm", osairam);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        maxWidth: "70vh",
        margin: "20px",
        padding: "10px 20px",
        borderRadius: "50px",
        background: "#e0e0e0",
        boxShadow: "20px 20px 60px #bebebe, -20px -20px 60px #fffff",
      }}
    >
      <img
        src={osairam.photoURL}
        width="140px"
        height={"140px"}
        style={{ borderRadius: "20px" }}
      ></img>
      <h1 style={{ marginLeft: "20px", marginTop: "20px" }}>{osairam.name}</h1>
      {/* <p style={{ marginTop: "-14px", marginLeft: "30px" }}>{osairam.price}</p> */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "-10px",
          marginLeft: "40px",
        }}
      >
        <button
          style={{
            margin: "10px",
            padding: "5px 10px",
            borderRadius: "10px",
            marginTop: "20px",
            background: "#EA5455",
            color: "white",
          }}
          onClick={() => dispatch(addToCart(osairam))}
        >
          +
        </button>
        <button
          style={{
            padding: "5px 10px",
            borderRadius: "10px",
            background: "#EA5455",
            color: "white",
            marginTop: "10px",
          }}
          onClick={() => dispatch(removeFromCart(osairam))}
        >
          -
        </button>
        <p
          style={{
            marginLeft: "20px",
            background: "#EA5455",
            padding: "5px 10px",
            color: "white",
            marginTop: "10px",
            borderRadius: "10px",
          }}
        >
          {osairam.quantity} * Rs {osairam.price}
        </p>
      </div>
    </div>
  );
};

export default CartCard;
