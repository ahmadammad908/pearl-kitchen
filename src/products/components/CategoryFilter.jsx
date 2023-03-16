import React, { useEffect, useState } from "react";
import useProducts from "../useProducts";

export default function CategoryFilter({ category, onChangeCategory }) {
  const { getCategories } = useProducts();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories({
      onFailure: (error) => alert(JSON.stringify(error)),
      onSuccess: (ahmad) => setCategories(ahmad),
    });
  }, []);

  return (
    <div>
      <select
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
