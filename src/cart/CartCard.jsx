import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../cart/cartSlice";
import toast, { Toaster } from "react-hot-toast";
const CartCard = (osairam) => {
  console.log("osariammm", osairam);
  const dispatch = useDispatch();
  const error = () => toast.error("You Deleted the Item.");
  const success = () => toast.success("Your add one more Item ");
  return (
    <>
      <div className="notificationContainer">
        <p> </p>{" "}
      </div>{" "}
      <Toaster position="top-center" reverseOrder={true} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          maxWidth: "70vh",
          margin: "20px",
          padding: "10px 20px",
          borderRadius: "50px",
          background: "#E0E0E0",
          boxShadow: "20px 20px 60px #BEBEBE, -20px -20px 60px #fffff",
        }}
      >
        <img
          src={osairam.photoURL}
          width="140px"
          height={"140px"}
          style={{ borderRadius: "20px" }}
        ></img>
        <h1 style={{ marginLeft: "20px", marginTop: "20px" }}>
          {osairam.name}
        </h1>
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
            onClick={() => dispatch(addToCart(osairam))(success())}
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
            onClick={() => dispatch(removeFromCart(osairam))(error())}
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
    </>
  );
};
export default CartCard;
