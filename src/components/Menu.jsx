import { useEffect, useState } from "react";
import { useCart } from "../CartContext";

export default function Menu() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const { add } = useCart();

  useEffect(() => {
    async function fetchMenu() {
      try {
        const res = await fetch("https://naija-restaurant-api.onrender.com/api/menu");
        const data = await res.json();
        setMenu(data);
      } catch (err) {
        console.error("Error fetching menu:", err);
      }
      setLoading(false);
    }

    fetchMenu();
  }, []);

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Our Menu</h1>

        {loading && <p className="text-muted">Loading menu...</p>}

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {menu.map((item) => (
            <div
              key={item._id}
              className="bg-panel rounded-xl shadow p-4 flex flex-col"
            >
              <img
                src={item.img}
                alt={item.name}
                className="rounded-lg h-48 w-full object-cover mb-3"
              />
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-muted text-sm">{item.desc}</p>
              <span className="text-accent text-lg font-bold mt-2">
                ${item.price}
              </span>

              <button
                onClick={() =>
                  add({
                    name: item.name,
                    price: item.price,
                    quantity: 1,
                  })
                }
                className="mt-auto px-4 py-2 rounded bg-accent text-black font-semibold hover:opacity-90"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Optional Table View */}
        <h2 className="text-3xl font-bold mt-12 mb-4">Menu Table View</h2>
        <div className="overflow-x-auto border border-[#2b2f36] rounded-xl">
          <table className="w-full text-left text-white">
            <thead className="bg-[#1f242d] text-accent">
              <tr>
                <th className="p-3">Item</th>
                <th className="p-3">Description</th            >
                <th className="p-3">Price</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item) => (
                <tr
                  key={item._id + "-table"}
                  className="border-t border-[#2b2f36]"
                >
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.desc}</td>
                  <td className="p-3">${item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
