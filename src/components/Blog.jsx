export default function Blog() {
  const posts = [
    {
      title: 'Understanding Vehicle Dynamics: The Basics',
      author: 'Tech Team',
      date: 'Oct 2025',
      excerpt:
        'An introduction to weight transfer, tire models, and suspension geometry that govern how a racecar handles on track.',
      link: 'https://www.sae.org/blog',
    },
    {
      title: 'Powertrain Choices: ICE vs EV for Student Teams',
      author: 'R&D Cell',
      date: 'Sep 2025',
      excerpt:
        'We compare internal combustion and electric architectures for collegiate competitions in terms of cost, reliability, and learning outcomes.',
      link: 'https://www.saeindia.org/',
    },
    {
      title: 'Design for Manufacturing: From CAD to the Shop Floor',
      author: 'Manufacturing',
      date: 'Aug 2025',
      excerpt:
        'Tolerances, jigs, and DFM tips to ensure your design actually gets built on time and within budget.',
      link: 'https://www.sae.org/news',
    },
  ];

  return (
    <section id="blog" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Scientific Blog</h2>
          <p className="mt-2 text-slate-600 max-w-2xl">Short reads from our members. We also link out to reputable SAE resources.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-xs font-medium text-blue-600">{p.date}</div>
              <h3 className="mt-1 text-xl font-semibold text-slate-900 group-hover:text-blue-700">{p.title}</h3>
              <p className="mt-2 text-slate-700">{p.excerpt}</p>
              <div className="mt-4 text-sm text-blue-600">Read more →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
