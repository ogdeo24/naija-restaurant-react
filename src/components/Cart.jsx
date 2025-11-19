import { useCart } from "../CartContext";
export default function Cart(){
  const { cart, total, remove, clear } = useCart();
  return (
    <section id="cart" className="py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Your Cart</h2>
        {cart.length===0 ? <p className="text-muted">Your cart is empty.</p> : (
          <div className="bg-panel rounded-xl p-4 shadow">
            <ul className="divide-y divide-[#222836]">
              {cart.map(item=>(
                <li key={item.name} className="py-3 flex items-center justify-between">
                  <p className="font-semibold">{item.name} <span className="text-muted">x{item.quantity}</span></p>
                  <div className="flex items-center gap-4">
                    <span>${(item.price*item.quantity).toFixed(2)}</span>
                    <button onClick={()=>remove(item.name)} className="px-3 py-1 rounded bg-[#2a2f3a] hover:bg-[#343b49]">Remove</button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between mt-4">
              <strong>Total: ${total.toFixed(2)}</strong>
              <div className="space-x-2">
                <button onClick={clear} className="px-3 py-2 rounded bg-[#2a2f3a] hover:bg-[#343b49]">Clear Cart</button>
                <button className="px-4 py-2 rounded bg-accent text-black font-semibold">Checkout</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
