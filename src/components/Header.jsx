import { useCart } from "../CartContext";
export default function Header(){
  const { count } = useCart();
  return (
    <header className="sticky top-0 z-50 bg-[#0e0f12cc] backdrop-blur border-b border-[#1b1f29]">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-semibold">
          <span className="font-[cursive] text-3xl">Naija Bites</span><span className="text-accent">.</span>
        </a>
        <nav className="hidden sm:flex gap-4">
          <a href="#menu" className="hover:text-accent">Menu</a>
          <a href="#gallery" className="hover:text-accent">Gallery</a>
          <a href="#about" className="hover:text-accent">About</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
        </nav>
        <a href="#cart" className="flex items-center gap-2 text-accent font-bold">🛒
          <span className="inline-flex w-6 h-6 items-center justify-center rounded-full bg-accent text-black">{count}</span>
        </a>
      </div>
    </header>
  );
}
