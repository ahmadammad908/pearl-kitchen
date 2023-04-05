import React from "react";
import { useNavigate } from "react-router-dom";

const ShopCard = (shop) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{ padding: "30px" }}
        onClick={() => navigate(`/ShopProducts/${shop.slug}`)}
      >
        <div class="card">
          <div class="image">
            <img
              src={shop.photoURL}
              style={{ width: "100%", height: "220px" }}
            ></img>
          </div>
          <div class="content">
            <a href="#">
              <span class="title" style={{ display: "none" }}></span>
            </a>
            <div className="desc1">
              <p style={{ marginTop: "60px" }}>{shop.name}</p>
            </div>
            <h4 style={{ marginTop: "10px" }}>{shop.address}</h4>
          </div>
        </div>
      </div>
    </>
  );
};
export default ShopCard;
