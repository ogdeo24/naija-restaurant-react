export default function About(){
  return (
    <section id="about" className="py-12">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-muted">Naija Bites began as a family pop-up sharing meals from Lagos. We cook with smoky peppers, fragrant spices, and fresh greens — honoring tradition while welcoming everyone to the table.</p>
          <p className="text-muted mt-3">Favorites include Party Jollof, Egusi with pounded yam, and Suya straight off the grill.</p>
        </div>
        <img src="https://images.squarespace-cdn.com/content/v1/614f831e90f08045038b4dae/9a18e8d0-efc6-4ca6-aa4c-656f7d53cd4e/Recipe-for-Egusi-Soup.png"
             alt="Egusi soup with pounded yam" className="rounded-xl shadow"/>
      </div>
    </section>
  );
}
