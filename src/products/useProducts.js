// Import the functions you need from the SDKs you need
import { collection, getDocs, query, where } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { db } from "../authentication/firebase/Firebase";
import { setProducts } from "./productsSlice";
import { setCategories } from "./categoriesSlice";
export default function useProducts() {
  const dispatch = useDispatch();

  async function getProducts({ onSuccess, onFailure, category }) {
    try {
      /**
       * All products reference.
       */
      const productsRef = collection(db, "products");

      /**
       * Products by category reference
       */
      const productsByCatRef = query(
        productsRef,
        where("category", "==", category)
      );

      const querySnapshot = await getDocs(
        category ? productsByCatRef : productsRef
      );
      const products = [];

      querySnapshot.forEach((doc) => {
        products.push(doc.data());
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });

      dispatch(
        setProducts({
          products,
          state: "loaded",
        })
      );
    } catch (error) {
      dispatch(
        setProducts({
          products: [],
          state: "failed",
        })
      );
    }
  }

  async function getCategories({ onSuccess, onFailure }) {
    try {
      const q = collection(db, "categories");

      const querySnapshot = await getDocs(q);
      const categories = [];

      querySnapshot.forEach((doc) => {
        categories.push(doc.data());
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
      dispatch(
        setCategories({
          categories,
          state: "loaded",
        })
      );
    } catch (error) {
      dispatch(
        setCategories({
          categories: [],
          state: "failed",
        })
      );
    }
  }

  return { getProducts, getCategories };
}
