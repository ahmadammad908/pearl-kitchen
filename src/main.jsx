import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import Cart from "./cart/Cart";
import Products from "./products/Products";
import CheckOut from "./cart/CheckOut";
import SignIn from "./authentication/SignIn";
import SignUp from "./authentication/SignUp";
import ConfirmOrder from "./cart/ConfirmOrder";
import Shops from "./shops/Shops";
import ShopsProducts from "./shops/ShopsProducts";
/**
 * 1. Standalone Shop component.
 * 2. Get slug, fetch shop by slug, store shop in slug.
 * 3. Get products of shop by id.
 * 4. Display products of shop.
 */
// function Shop() {
//   const { slug } = useParams();
//   const [shop, setShop] = React.useState();
//   const [products, setProducts] = React.useState([]);
//   React.useEffect(() => {
//     getShopBySlug({
//       slug,
//       onSuccess: (shop) => {
//         setShop(shop);
//         getProductsById({
//           id: shop.id,
//           onSuccess: (products) => setProducts(products),
//           onFailure: (message) => console.error(message),
//         });
//       },
//       onFailure: (message) => console.error(message),
//     });
//   }, []);
//   return <>{slug}</>;
// }
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Products />,
        // path: "",
        // element: <Shops />,
      },
      {
        path: "shopproducts/:slug",
        element: <ShopsProducts />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <CheckOut />,
      },
      {
        path: "signIn",
        element: <SignIn />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
      {
        path: "confirmOrder",
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
