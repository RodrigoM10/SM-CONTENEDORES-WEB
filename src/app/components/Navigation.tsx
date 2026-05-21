import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className="bg-white border-b-4 border-zinc-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 min-[860px]:px-6 py-3 min-[860px]:py-4"> {/* Ajuste leve de padding vertical */}
        <div className="flex items-center justify-between">
          
          {/* --- REQUISITO 2: LOGO COMO IMAGEN --- */}
          <Link to="/" onClick={closeMobile} className="flex items-center">
            <span className="font-black uppercase tracking-tighter">
                <span className="text-[#DC2626] text-xl">SM</span>
                <span className="text-black text-xl ml-1">CONTENEDORES</span>
              </span>
          </Link>

          {/* --- RESPONSIVE DESKTOP: Enlaces (Ocultos < 860px) --- */}
          <div className="hidden min-[860px]:flex items-center gap-8">
            {[
              { to: '/', label: 'Inicio' },
              { to: '/servicios', label: 'Servicios' },
              { to: '/nosotros', label: 'Nosotros' },
              { to: '/contacto', label: 'Contacto' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`font-bold uppercase text-sm tracking-wide transition-colors ${
                  isActive(to) ? 'text-[#DC2626]' : 'text-zinc-900 hover:text-[#DC2626]'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
          <Link
            to="/contacto"
            className="hidden min-[860px]:block bg-[#DC2626] text-white px-6 py-3 font-black uppercase text-sm tracking-wide shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]"
          >
            Pedir Contenedor
          </Link>
          <button
            className="min-[860px]:hidden flex items-center justify-center w-10 h-10 border-4 border-zinc-900 bg-white text-zinc-900 hover:bg-zinc-900 hover:text-white transition-colors"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Abrir menú"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" strokeWidth={3} /> : <Menu className="w-5 h-5" strokeWidth={3} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="min-[860px]:hidden bg-white border-t-4 border-zinc-900 shadow-xl">
          <div className="flex flex-col">
            {[
              { to: '/', label: 'Inicio' },
              { to: '/servicios', label: 'Servicios' },
              { to: '/nosotros', label: 'Nosotros' },
              { to: '/contacto', label: 'Contacto' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={closeMobile}
                className={`px-6 py-4 font-black uppercase text-sm tracking-wide border-b-2 border-zinc-100 transition-colors ${
                  isActive(to)
                    ? 'text-[#DC2626] bg-zinc-50'
                    : 'text-zinc-900 hover:text-[#DC2626] hover:bg-zinc-50'
                }`}
              >
                {label}
              </Link>
            ))}
            {/* CTA dentro del menú móvil */}
            <div className="p-4 bg-zinc-50">
              <Link
                to="/contacto"
                onClick={closeMobile}
                className="block w-full bg-[#DC2626] text-white px-6 py-4 font-black uppercase text-sm tracking-wide text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:scale-98 transition-all"
              >
                Pedir Contenedor
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}