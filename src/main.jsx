import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import store from "./store";
import ProductCard from "./products/ProductCard";
import Products from "./products/Products";
import CartCard from "./cart/CartCard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./cart/Cart";
import CheckOut from "./cart/CheckOut";
import SignIn from "./authentication/SignIn";
import SignUp from "./authentication/SignUp";
import ConfirmOrder from "./cart/ConfirmOrder";
// import Login from "./authentication/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <CheckOut />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/confirmOrder",
        element: <ConfirmOrder />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
