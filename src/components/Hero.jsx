import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] pt-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8Y5yq0cQzQY3Q6bO/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center py-20">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              SAEINDIA Club — IIITDM Kurnool
            </h1>
            <p className="mt-4 text-lg text-slate-700 max-w-xl">
              A student-driven motorsport and mobility community. We design, build, and race while nurturing a culture of engineering excellence, safety, and sustainability.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#events" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white font-medium shadow hover:bg-blue-700">Explore Events</a>
              <a href="#team" className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-slate-800 font-medium hover:bg-slate-50">Meet the Team</a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/90 via-white/50 to-transparent pointer-events-none rounded-2xl" />
            <div className="aspect-[4/3] w-full rounded-2xl ring-1 ring-black/5 overflow-hidden backdrop-blur">
              <img
                src="https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1920&auto=format&fit=crop"
                alt="Motorsport"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
