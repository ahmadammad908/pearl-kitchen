import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import useProducts from "./useProducts";
import SearchFilter from "./components/SearchFilter";
import CategoryFilter from "./components/CategoryFilter";
import { useSelector } from "react-redux";

export default function Products() {
  const { getProducts } = useProducts();
  const { products, state } = useSelector((state) => state.products);

  const [category, setCategory] = useState("");

  const [internalSearch, setInternalSearch] = useState("");

  useEffect(() => {
    getProducts({
      category,
    });
  }, [category]);

  /**
   * Filtered products.
   * By default, it is just a clone of the fetched products.
   */
  let filteredProducts = [...products];

  if (internalSearch)
    filteredProducts = products.filter((item) =>
      item.name.toLowerCase().includes(internalSearch.toLowerCase())
    );

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <CategoryFilter
          category={category}
          onChangeCategory={(category) => setCategory(category)}
        />
        <SearchFilter
          internalSearch={internalSearch}
          // setInternalSearch={setInternalSearch}
          onChangeSearch={(internalSearch) => setInternalSearch(internalSearch)}
        />
      </div>
      <div
        className="box"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: "0px",
        }}
      >
        {filteredProducts.length === 0 && "no result founds"}
        {filteredProducts.map((product, i) => (
          <ProductCard key={i} {...product} />
        ))}
      </div>
    </div>
  );
}
