import React, { useEffect, useState } from "react";
import ShopPrdouctsCard from "./ShopPrdouctsCard";
import useProducts from "../products/useProducts";
import SearchFilter from "../products/components/SearchFilter";
import ShopCategoryFilter from "../products/components/ShopCategoryFilter";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useShops from "./useShops";

export default function ShopsProducts() {
  const { getShopProducts } = useProducts();
  const { getShopBySlug } = useShops();
  const { shopProduct, state } = useSelector((state) => state.shopProducts);
  const [category, setCategory] = useState("");
  const [internalSearch, setInternalSearch] = useState("");

  const { slug } = useParams();

  const [shop, setShop] = useState();
  const [products, setProducts] = useState([]);

  const categories = shop?.categories || [];

  useEffect(() => {
    getShopBySlug({
      slug,
      onSuccess: (shop) => {
        console.log({ shop });
        setShop(shop);

        getShopProducts({
          id: shop.id,
          onSuccess: (products) => setProducts(products),
          onFailure: (message) => console.error(message),
        });
      },
      onFailure: (message) => console.error(message),
    });
  }, []);

  //   return <>{slug}</>;

  //   useEffect(() => {
  //     getShops({
  //       category,
  //     });
  //   }, [category]);

  /**
   * Filtered products.
   * By default, it is just a clone of the fetched products.
   */
  let filteredProducts = [...products];

  if (category) {
    filteredProducts = products.filter(
      (product) => product.category == category
    );
  }

  if (internalSearch)
    filteredProducts = products.filter((item) =>
      item.name.toLowerCase().includes(internalSearch.toLowerCase())
    );

  return (
    <>
      {slug}
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <ShopCategoryFilter
            options={categories}
            category={category}
            onChangeCategory={(category) => setCategory(category)}
          />
          <SearchFilter
            internalSearch={internalSearch}
            // setInternalSearch={setInternalSearch}
            onChangeSearch={(internalSearch) =>
              setInternalSearch(internalSearch)
            }
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
          {filteredProducts.map((product, i) => (
            <ShopPrdouctsCard key={i} {...product} />
          ))}
        </div>
      </div>
    </>
  );
}
