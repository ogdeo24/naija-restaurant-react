import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartCtx = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


  const add = (item) => {
    setCart((prev) => {
      const index = prev.findIndex((x) => x.name === item.name);

      if (index >= 0) {
        const updated = [...prev];
        updated[index] = {
          ...updated[index],
          quantity: updated[index].quantity + 1,
        };
        return updated;
      }

      return [...prev, { ...item, quantity: item.quantity ?? 1 }];
    });
  };

  const remove = (name) => {
    setCart((prev) => prev.filter((x) => x.name !== name));
  };

  const clear = () => setCart([]);

  const count = useMemo(
    () => cart.reduce((sum, x) => sum + x.quantity, 0),
    [cart]
  );

  const total = useMemo(
    () => cart.reduce((sum, x) => sum + x.price * x.quantity, 0),
    [cart]
  );

  return (
    <CartCtx.Provider value={{ cart, add, remove, clear, count, total }}>
      {children}
    </CartCtx.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartCtx);
  if (!ctx) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return ctx;
};
