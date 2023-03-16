import React, { useEffect, useState } from "react";

const ProductCard = (product) => {
  return (
    <div>
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

          <a href="#" class="action">
            Add to Cart
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
