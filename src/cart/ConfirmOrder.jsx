import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
const ConfirmOrder = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2 style={{ fontSize: "130px", color: "#EC4899" }}>
          <AiFillCheckCircle />
        </h2>
      </div>
      <div style={{ display: "flex", justifyContent: "center", margin: "5px" }}>
        <h1 style={{ fontSize: "23px" }}>
          Your <span style={{ color: "#EC4899" }}>Order</span> Has been
          Confirmed
        </h1>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", fontSize: "20PX" }}
      >
        <h1>
          Thank You For <span style={{ color: "#EC4899" }}>Choosing Us</span>
        </h1>
      </div>
    </>
  );
};
export default ConfirmOrder;
