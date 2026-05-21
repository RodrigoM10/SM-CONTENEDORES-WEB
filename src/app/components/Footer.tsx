import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white border-t-8 border-[#DC2626]">
      <div className="max-w-7xl mx-auto px-4 min-[860px]:px-6 py-10 min-[860px]:py-16">
        <div className="grid grid-cols-1 min-[860px]:grid-cols-4 gap-8 min-[860px]:gap-12">
          <div>
            <div className="mb-4 min-[860px]:mb-6">
              <span className="font-black uppercase tracking-tighter">
                <span className="text-[#DC2626] text-xl">SM</span>
                <span className="text-white text-xl ml-1">CONTENEDORES</span>
              </span>
            </div>
            <p className="text-zinc-400 font-medium text-sm min-[860px]:text-base">
              Soluciones profesionales para la gestión de escombros y residuos en construcción.
            </p>
          </div>

          <div>
            <h4 className="mb-4 min-[860px]:mb-6 text-white text-base min-[860px]:text-lg">Navegación</h4>
            <ul className="space-y-2 min-[860px]:space-y-3">
              <li>
                <Link to="/" className="text-zinc-400 font-bold hover:text-[#DC2626] transition-colors uppercase text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-zinc-400 font-bold hover:text-[#DC2626] transition-colors uppercase text-sm">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-zinc-400 font-bold hover:text-[#DC2626] transition-colors uppercase text-sm">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-zinc-400 font-bold hover:text-[#DC2626] transition-colors uppercase text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 min-[860px]:mb-6 text-white text-base min-[860px]:text-lg">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-[#DC2626] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <div>
                  <p className="text-zinc-400 font-bold text-sm">427-1212 / 4271221</p>
                   <a 
                          href="https://wa.me/5493814567281" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-3 text-zinc-900 hover:text-[#25D366] transition-colors group"
                        >
                    <p className="text-zinc-400 font-bold text-sm">+54 9 381 456-7281</p>
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-[#DC2626] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <p className="text-zinc-400 font-bold text-sm break-all">smcontenedores@hotmail.com</p>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-[#DC2626] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <p className="text-zinc-400 font-bold text-sm">Benjamín Villafañe 2755, San Miguel de Tucumán,  Tucumán</p>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 min-[860px]:mb-6 text-white text-base min-[860px]:text-lg">Horarios</h4>
            <ul className="space-y-2">
              <li className="text-zinc-400 font-bold text-sm">
                <span className="text-white">Lunes - Viernes:</span> 7:00 - 18:00
              </li>
              <li className="text-zinc-400 font-bold text-sm">
                <span className="text-white">Sábados:</span> 7:00 - 13:00
              </li>
              <li className="text-zinc-400 font-bold text-sm">
                <span className="text-white">Domingos:</span> Cerrado
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 min-[860px]:px-6 py-4 min-[860px]:py-6">
          <p className="text-center text-zinc-500 font-bold text-xs min-[860px]:text-sm">
            © {new Date().getFullYear()} SM CONTENEDORES. TODOS LOS DERECHOS RESERVADOS.
          </p>
        </div>
      </div>
    </footer>
  );
}
