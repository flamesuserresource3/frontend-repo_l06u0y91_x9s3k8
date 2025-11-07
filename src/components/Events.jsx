export default function Events() {
  const events = [
    {
      title: 'Workshops & Skill Ups',
      date: 'Monthly',
      description:
        'Hands-on sessions covering CAD/CAE, vehicle dynamics, combustion, EV systems, and fabrication best practices.',
    },
    {
      title: 'Competitions',
      date: 'Annual',
      description:
        'Participation in national SAEINDIA collegiate competitions like BAJA, SUPRA, and eBAJA focusing on end-to-end vehicle build.',
    },
    {
      title: 'Talks & Tech Nights',
      date: 'Bi-weekly',
      description:
        'Industry expert lectures, alumni AMAs, and peer-led deep dives into motorsport engineering and innovation.',
    },
  ];

  return (
    <section id="events" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Events</h2>
          <p className="mt-2 text-slate-600 max-w-2xl">What we run through the year to build engineering depth and team spirit.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e) => (
            <div key={e.title} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-sm font-medium text-blue-600">{e.date}</div>
              <h3 className="mt-1 text-xl font-semibold text-slate-900">{e.title}</h3>
              <p className="mt-2 text-slate-700">{e.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
