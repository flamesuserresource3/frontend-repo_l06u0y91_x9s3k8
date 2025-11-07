import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './components/Events';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Blog from './components/Blog';

function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <div>© {new Date().getFullYear()} SAEINDIA Club, IIITDM Kurnool</div>
          <div className="flex items-center gap-4">
            <a className="hover:text-blue-600" href="https://www.saeindia.org/" target="_blank" rel="noreferrer">SAEINDIA</a>
            <a className="hover:text-blue-600" href="#events">Events</a>
            <a className="hover:text-blue-600" href="#team">Team</a>
            <a className="hover:text-blue-600" href="#gallery">Gallery</a>
            <a className="hover:text-blue-600" href="#blog">Blog</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Events />
        <Team />
        <Gallery />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
