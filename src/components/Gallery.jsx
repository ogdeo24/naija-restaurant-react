import { GALLERY } from "../data/menu";
export default function Gallery(){
  return (
    <section id="gallery" className="py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Image Gallery</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GALLERY.map((src,i)=>(
            <img key={i} src={src} alt={`Gallery ${i+1}`} className="w-full h-64 object-cover rounded-xl shadow"/>
          ))}
        </div>
      </div>
    </section>
  );
}
