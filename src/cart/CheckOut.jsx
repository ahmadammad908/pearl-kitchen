import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const CheckOut = () => {
  const { cart, state } = useSelector((state) => state.cart);
  let totalPrice = 0;
  cart.forEach((osairam) => {
    totalPrice += osairam.quantity * osairam.price;
  });
  console.log("checkoooooooooooo", cart);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1
          style={{
            fontSize: "50px",
            marginTop: "-10px",
            color: "rgb(234, 84, 85)",
          }}
        >
          {" "}
          Summary
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "80px",
          flexWrap: "wrap",
        }}
      >
        <table style={{ background: "rgb(334, 89, 85)", margin: "20px" }}>
          <tr style={{ border: "2px solid red" }}>
            <th style={{ border: "2px solid red", color: "white" }}>Name</th>
            <th style={{ padding: "20px", color: "white" }}>Quantity</th>
            <th
              style={{
                border: "2px solid red",
                padding: "20px",
                color: "white",
              }}
            >
              Price
            </th>
          </tr>
          {cart.map((osairam) => (
            <tr style={{}}>
              <td
                style={{
                  border: "2px solid red",
                  padding: "20px",
                  color: "white",
                }}
              >
                {osairam.name}
              </td>
              <td
                style={{
                  border: "2px solid red",
                  padding: " 20px 50px",
                  color: "white",
                }}
              >
                {osairam.quantity}
              </td>
              <td
                style={{
                  border: "2px solid red",
                  padding: "20px 50px",
                  color: "white",
                }}
              >
                Rs: {osairam.price * osairam.quantity}
              </td>
            </tr>
          ))}
          <div style={{ marginTop: "-60px", padding: "5px" }}>
            <h1 style={{ color: "white" }}>
              {" "}
              <span style={{ fontWeight: "bold", color: "white" }}>
                Total Price
              </span>{" "}
              : Rs {totalPrice}
            </h1>
          </div>
        </table>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "20px" }}
      >
        <Link to={"/signIn"}>
          <h1
            style={{
              background: "rgb(234, 84, 85)",
              padding: "10px 30px",
              borderRadius: "10px",
              color: "white",
              outline: "none",
              border: "none",
            }}
          >
            <button>Confirm Order</button>
          </h1>
        </Link>
      </div>
    </div>
  );
};
export default CheckOut;
