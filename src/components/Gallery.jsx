export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop'
  ];

  return (
    <section id="gallery" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Gallery</h2>
          <p className="mt-2 text-slate-600 max-w-2xl">Snapshots from our workshops, builds, and events.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {images.map((src, idx) => (
            <div key={idx} className="relative overflow-hidden rounded-lg">
              <img src={src} alt={`Gallery ${idx + 1}`} className="h-40 w-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
