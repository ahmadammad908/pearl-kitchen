import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import HeaderNavbar from "./components/HeaderNavbar";
import { Outlet } from "react-router-dom";
import ProductCard from "./products/ProductCard";
import CartCard from "./cart/CartCard";
import Loader from "./components/Loader";
import ErrorPage from "./components/ErrorPage";
import SignUp from "./authentication/SignUp";
import Products from "./products/Products";
function App() {
  return (
    <div>
      <HeaderNavbar />
      <Outlet />
      {/* <Products />
      <CartCard />
      <Loader />
      <ErrorPage />
      <SignUp /> */}
    </div>
  );
}

export default App;
