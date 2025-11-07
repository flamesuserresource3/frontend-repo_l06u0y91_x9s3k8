import { useState } from 'react';
import { Menu, X, Rocket, Images, Users, Calendar, BookOpen } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home', icon: Rocket },
    { href: '#events', label: 'Events', icon: Calendar },
    { href: '#team', label: 'Team', icon: Users },
    { href: '#gallery', label: 'Gallery', icon: Images },
    { href: '#blog', label: 'Scientific Blog', icon: BookOpen },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white"><Rocket size={18} /></span>
            <span className="text-slate-800">SAEINDIA • IIITDM Kurnool</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map(({ href, label }) => (
              <a key={href} href={href} className="text-sm text-slate-700 hover:text-blue-600 transition-colors">
                {label}
              </a>
            ))}
            <a
              href="https://www.saeindia.org/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
            >
              Visit SAEINDIA
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/90">
          <div className="mx-auto max-w-7xl px-4 py-3">
            <div className="grid gap-2">
              {navItems.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-md px-2 py-2 text-slate-800 hover:bg-slate-100"
                >
                  <Icon size={16} className="text-blue-600" />
                  <span>{label}</span>
                </a>
              ))}
              <a
                href="https://www.saeindia.org/"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                Visit SAEINDIA
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
