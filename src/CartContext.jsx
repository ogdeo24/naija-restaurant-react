import { createContext, useContext, useEffect, useMemo, useState } from "react";
const CartCtx = createContext();
export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")||"[]"));
  useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]);
  const add = (name, price) => setCart(prev=>{
    const i = prev.findIndex(x=>x.name===name);
    if(i>=0){ const c=[...prev]; c[i]={...c[i],quantity:c[i].quantity+1}; return c; }
    return [...prev,{name,price,quantity:1}];
  });
  const remove = (name)=> setCart(prev=> prev.filter(x=>x.name!==name));
  const clear = ()=> setCart([]);
  const count = useMemo(()=> cart.reduce((s,x)=>s+x.quantity,0),[cart]);
  const total = useMemo(()=> cart.reduce((s,x)=>s+x.price*x.quantity,0),[cart]);
  return <CartCtx.Provider value={{cart,add,remove,clear,count,total}}>{children}</CartCtx.Provider>;
}
export const useCart = ()=> useContext(CartCtx);
