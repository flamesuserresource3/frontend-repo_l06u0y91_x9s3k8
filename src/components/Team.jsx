export default function Team() {
  const members = [
    { name: 'Faculty Advisor', role: 'Guide & Mentor', img: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800&auto=format&fit=crop' },
    { name: 'Team Captain', role: 'Overall Lead', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop' },
    { name: 'Powertrain Lead', role: 'ICE/EV Systems', img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop' },
    { name: 'Chassis Lead', role: 'Frame & Vehicle Dynamics', img: 'https://images.unsplash.com/photo-1520975922284-9d06a93606b6?q=80&w=800&auto=format&fit=crop' },
    { name: 'Electrical Lead', role: 'Wiring & Controls', img: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=800&auto=format&fit=crop' },
    { name: 'Aero/Design', role: 'Bodywork & CFD', img: 'https://images.unsplash.com/photo-1520975940407-8c69a52adf5a?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section id="team" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Current Team</h2>
          <p className="mt-2 text-slate-600 max-w-2xl">Meet the core minds behind our builds. Cohort updates every academic year.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {members.map((m) => (
            <div key={m.name} className="rounded-xl border border-black/5 bg-white p-4 shadow-sm">
              <div className="aspect-square w-full overflow-hidden rounded-lg">
                <img src={m.img} alt={m.name} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="mt-3">
                <div className="font-semibold text-slate-900">{m.name}</div>
                <div className="text-sm text-slate-600">{m.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
