import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const base = import.meta.env.BASE_URL;

    const item = {
      id: product.id,
      name: product.name || product.title || "Untitled Product",
      image: product.image?.startsWith("http")
        ? product.image
        : `${product.image}`, // ✅ fix path
      price: product.price || 0,
      quantity: product.quantity || 1,
      size: product.size || null,
      category: product.category || null,
    };

    setCart((prev) => {
      const existingItemIndex = prev.findIndex(
        (p) => p.id === item.id && p.size === item.size
      );

      if (existingItemIndex >= 0) {
        const updated = [...prev];
        updated[existingItemIndex].quantity += item.quantity;
        toast.success(
          `${item.name} (Size: ${item.size || "N/A"}) quantity updated in cart!`
        );
        return updated;
      } else {
        toast.success(`${item.name} added to cart!`);
        return [...prev, item];
      }
    });
  };

  const removeFromCart = (id, size = null) => {
    setCart((prev) =>
      prev.filter((item) => !(item.id === id && item.size === size))
    );
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
