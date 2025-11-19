import Header from "./components/Header";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";

export default function App(){
  return (
    <>
      <Header />
      <section className="bg-gradient-to-b from-bg to-[#0b0c0f]">
        <div className="max-w-5xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h1 className="font-[cursive] text-5xl mb-3">Nigerian Restaurant</h1>
            <p className="text-muted">Smoky Jollof, spicy Suya, fluffy Puff-Puff — home-style flavors made fresh daily in NYC.</p>
            <a href="#menu" className="inline-block mt-5 px-4 py-2 rounded-full bg-accent text-black font-semibold">View Menu</a>
          </div>
          <div className="rounded-xl shadow min-h-[260px] bg-center bg-cover"
               style={{backgroundImage:"url(https://niyis.co.uk/cdn/shop/articles/NIGERIAN_JOLLOF_RICE_5624df8e-b726-4d62-8a2e-44a565feb504.jpg?v=1738276335)"}}>
          </div>
        </div>
      </section>
      <Menu />
      <Gallery />
      <About />
      <Contact />
      <Cart />
    </>
  );
}
