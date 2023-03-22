import React from "react";
import { Link } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import { useSelector } from "react-redux";
const HeaderNavbar = () => {
  const { cart } = useSelector((state) => state.cart);
  return (
    <div>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-pink-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">
              <Link to={"/"}>Pearl Kitchen</Link>
            </span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center"></nav>
          <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            <Link
              to={"/cart"}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p style={{ fontSize: "26px", color: "#bd1cbd" }}>
                <BiShoppingBag />
              </p>
              {/* <BiShoppingBag /> */}
              <p
                style={{
                  marginTop: "-10px",
                  color: "#bd1cbd",
                }}
              >
                {!!cart.length && cart.length}
              </p>
            </Link>
            {/* <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg> */}
          </button>
        </div>
      </header>
    </div>
  );
};

export default HeaderNavbar;
