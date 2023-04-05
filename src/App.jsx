import { Outlet } from "react-router-dom";
import "./App.css";
import CartCard from "./cart/CartCard";
import HeaderNavbar from "./components/HeaderNavbar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCart } from "./cart/cartSlice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const previousCart = localStorage.getItem("cart");
    if (previousCart) {
      dispatch(setCart(JSON.parse(previousCart)));
    }
  });
  return (
    <>
      <HeaderNavbar />
      <Outlet />
    </>
  );
}
export default App;
