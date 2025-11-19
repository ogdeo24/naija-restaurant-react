export default function Contact(){
  return (
    <section id="contact" className="py-12">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="text-muted">695 Park Ave, New York, NY 10065</p>
          <p className="text-muted">Mon–Sun: 11:00 – 22:00</p>
          <iframe title="Map" width="100%" height="320" style={{border:0}} loading="lazy" allowFullScreen
                  src="https://www.google.com/maps?q=695+Park+Ave,+New+York,+NY+10065&output=embed"
                  className="rounded-xl"/>
        </div>
        <form className="bg-panel rounded-xl p-4 space-y-3">
          <div><label className="block mb-1">Name</label><input required className="w-full px-3 py-2 rounded bg-[#0e150f] border border-[#2a3a2a]"/></div>
          <div><label className="block mb-1">Email</label><input required type="email" className="w-full px-3 py-2 rounded bg-[#0e150f] border border-[#2a3a2a]"/></div>
          <div><label className="block mb-1">Message</label><textarea required rows="4" className="w-full px-3 py-2 rounded bg-[#0e150f] border border-[#2a3a2a]"/></div>
          <button className="px-4 py-2 rounded bg-accent text-black font-semibold">Send</button>
        </form>
      </div>
    </section>
  );
}
