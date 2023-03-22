import React from "react";
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
      <h1></h1>
      <div></div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 style={{ fontSize: "50px", marginTop: "-10px" }}>CheckOut</h1>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "80px" }}
      >
        <table style={{ border: "2px solid red" }}>
          <tr style={{ border: "2px solid red" }}>
            <th style={{ border: "2px solid red" }}>Name</th>
            <th>Quantity</th>
            <th style={{ border: "2px solid red" }}>Price</th>
          </tr>

          {cart.map((osairam) => (
            <tr style={{ border: "2px solid red" }}>
              <td style={{ border: "2px solid red" }}>{osairam.name}</td>
              <td style={{ border: "2px solid red" }}>{osairam.quantity}</td>
              <td style={{ border: "2px solid red" }}>
                {osairam.price * osairam.quantity}
              </td>
            </tr>
          ))}
          <div style={{ marginTop: "-60px" }}>
            <h1>Total Price Rs {totalPrice}</h1>
          </div>
        </table>
      </div>
    </div>
  );
};

export default CheckOut;
