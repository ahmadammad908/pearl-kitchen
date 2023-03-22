import React from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, state } = useSelector((state) => state.cart);

  let totalPrice = 0;
  cart.forEach((osairam) => {
    totalPrice += osairam.quantity * osairam.price;
  });

  return (
    <div>
      {cart.length === 0 && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1
            style={{
              fontSize: "30px",
              padding: "10px 20px",
              background: "#EA5455",
              borderRadius: "20px",
              color: "white",
            }}
          >
            No Items are added
          </h1>
        </div>
      )}

      {cart.map((osairam, i) => (
        <CartCard key={i} {...osairam} />
      ))}
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "20px",
          }}
        >
          <h2
            className="Total Price"
            style={{
              fontSize: "30px",
              padding: "10px 20px",
              background: "#EA5455",
              color: "white",
              borderRadius: "10px",
            }}
          >
            Total Price
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "20px",
            padding: "20px",
          }}
        >
          <h3
            style={{
              fontSize: "30px",
              padding: "10px 20px",
              background: "#EA5455",
              color: "white",
              borderRadius: "10px",
            }}
          >
            Rs {totalPrice}
          </h3>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "20px",
          }}
        >
          <Link
            to={"/checkout"}
            style={{
              padding: "10px 20px",
              background: "#EA5455",
              borderRadius: "10px",
              color: "white",
            }}
          >
            Proceed To checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
