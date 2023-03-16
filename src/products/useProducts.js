// Import the functions you need from the SDKs you need
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../authentication/firebase/Firebase";

export default function useProducts() {
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
      onSuccess(products);
    } catch (error) {
      onFailure(error);
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
      onSuccess(categories);
    } catch (error) {
      onFailure(error);
    }
  }

  return { getProducts, getCategories };
}
