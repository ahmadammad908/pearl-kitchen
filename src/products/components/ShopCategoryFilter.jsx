import React, { useEffect, useState } from "react";

export default function ShopCategoryFilter({
  options,
  category,
  onChangeCategory,
}) {
  return (
    <div style={{ margin: "10px" }}>
      <select
        style={{
          padding: "10px 20px",
          background: "#BD1CBD",
          color: "white",
          borderRadius: "10px",
          outline: "none",
        }}
        id="search"
        name="categories"
        value={category}
        onChange={(e) => onChangeCategory(e.target.value)}
      >
        <option value="">All</option>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
