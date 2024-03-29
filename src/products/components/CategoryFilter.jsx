import React, { useEffect, useState } from "react";
import useProducts from "../useProducts";
import { useSelector } from "react-redux";

export default function CategoryFilter({ category, onChangeCategory }) {
  const { getCategories } = useProducts();
  const { categories, state } = useSelector((state) => state.categories);

  useEffect(() => {
    getCategories({});
  }, []);

  console.log("hello", { state });

  return (
    <div style={{ margin: "10px" }}>
      <select
        style={{
          padding: "10px 20px",
          background: "#bd1cbd",
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
        {categories.map((category) => (
          <option value={category.name}>{category.name}</option>
        ))}
      </select>
    </div>
  );
}
