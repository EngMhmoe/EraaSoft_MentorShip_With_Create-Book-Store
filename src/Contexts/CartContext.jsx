import { createContext, useEffect, useState } from "react";

export const useAddToCartContextProvider = createContext();

export function CartProvider({ children }) {
  const [carts, setCart] = useState([]);

  useEffect(() => {
    const SaveCart = JSON.parse(localStorage.getItem("AddToCart")) || [];

    setCart(SaveCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("AddToCart", JSON.stringify(carts));
  }, [carts]);
}
