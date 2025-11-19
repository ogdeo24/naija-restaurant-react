import { MENU } from "../data/menu";
import { useCart } from "../CartContext";
export default function Menu(){
  const { add } = useCart();
  return (
    <section id="menu" className="py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Our Menu</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {MENU.map(item=>(
            <article key={item.name} className="bg-panel rounded-xl overflow-hidden shadow">
              <img src={item.img} alt={item.name} className="w-full h-48 object-cover"/>
              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{item.name}</h3>
                  <span className="text-accent font-bold">${item.price}</span>
                </div>
                <p className="text-muted text-sm">{item.desc}</p>
                <button onClick={()=>add(item.name,item.price)} className="mt-2 px-3 py-2 rounded-full bg-accent text-black font-semibold">
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
