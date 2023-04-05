import React, { useEffect, useState } from "react";
import ShopCard from "./ShopCard";
import useShops from "./useShops";
import SearchFilter from "../products/components/SearchFilter";
import CategoryFilter from "../products/components/CategoryFilter";
import { useSelector } from "react-redux";
export default function Shops() {
  const { getShops, getShopsCategories } = useShops();
  const { shops, state } = useSelector((state) => state.shops);
  const [category, setCategory] = useState("");
  const [internalSearch, setInternalSearch] = useState("");

  useEffect(() => {
    getShops({
      category,
    });
  }, [category]);

  /**
   * Filtered products.
   * By default, it is just a clone of the fetched products.
   */
  let filteredShops = [...shops];
  if (internalSearch)
    filteredShops = shops.filter((item) =>
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
        {filteredShops.length === 0 && "no result founds"}
        {filteredShops.map((shop, i) => (
          <ShopCard key={i} {...shop} />
        ))}
      </div>
    </div>
  );
}
