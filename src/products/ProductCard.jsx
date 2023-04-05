import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";
import toast, { Toaster } from "react-hot-toast";
const ProductCard = (product) => {
  console.log("Products", product);
  const dispatch = useDispatch();
  const success = () => toast.success("Your Item added in your Bucket");
  return (
    <>
      <div className="notificationContainer">
        <p> </p>{" "}
      </div>{" "}
      <Toaster position="top-center" reverseOrder={true} />
      <div style={{ padding: "30px" }}>
        <div class="card">
          <div class="image">
            <img
              src={product.photoURL}
              style={{ width: "250px", height: "220px" }}
            ></img>
          </div>
          <div class="content">
            <a href="#">
              <span class="title" style={{ display: "none" }}></span>
            </a>
            <div className="desc1">
              <p style={{ marginTop: "60px" }}>{product.name}</p>
            </div>
            <h4 style={{ marginTop: "10px" }}>Rs {product.price}</h4>
            <button
              onClick={() => dispatch(addToCart(product))(success())}
              className="btn"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductCard;
