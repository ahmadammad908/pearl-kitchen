import {
  arrayUnion,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useDispatch } from "react-redux";
import { db } from "../authentication/firebase/Firebase";
import { setShops } from "./shopsSlice";
import { setShopCategories } from "./shopCategoriesSlice";

export default function useShops() {
  const dispatch = useDispatch();

  async function getShops({ onSuccess, onFailure, category }) {
    try {
      /**
       * All products reference.
       */
      const shopsRef = collection(db, "shops");
      /**
       * Products by category reference
       */
      const shopsByCatRef = query(
        shopsRef,
        where("categories", "array-contains", category)
      );

      const querySnapshot = await getDocs(category ? shopsByCatRef : shopsRef);

      const shops = [];

      querySnapshot.forEach((doc) => {
        shops.push({
          ...doc.data(),
          id: doc.id,
        });
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });

      dispatch(
        setShops({
          shops,
          state: "loaded",
        })
      );
    } catch (error) {
      dispatch(
        setShops({
          shops: [],
          state: "failed",
        })
      );
    }
  }

  async function getShopsCategories({ onSuccess, onFailure }) {
    try {
      const q = collection(db, "categories");
      const querySnapshot = await getDocs(q);
      const shopCategories = [];
      querySnapshot.forEach((doc) => {
        shopCategories.push(doc.data());
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
      dispatch(
        setShopCategories({
          shopCategories,
          state: "loaded",
        })
      );
    } catch (error) {
      dispatch(
        setShopCategories({
          shopCategories: [],
          state: "failed",
        })
      );
    }
  }

  async function getShopBySlug({ onSuccess, onFailure, slug }) {
    try {
      /**
       * All products reference.
       */
      const shopsRef = collection(db, "shops");

      /**
       * Products by category reference
       */
      const shopsBySlugRef = query(shopsRef, where("slug", "==", slug));

      const querySnapshot = await getDocs(shopsBySlugRef);

      const shops = [];

      querySnapshot.forEach((doc) => {
        shops.push({
          ...doc.data(),
          id: doc.id,
        });
      });

      onSuccess(shops[0]);
    } catch (error) {
      console.error(error);
      onFailure("Something went wrong");
    }
  }
  return { getShops, getShopBySlug, getShopsCategories };
}
