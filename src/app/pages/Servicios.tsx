import { Container, CheckCircle, HandCoins, CalendarSync, Home } from 'lucide-react';
import { Link } from 'react-router';


const containers = [
  {
    id: 1,
    name: 'Cuenta Corriente',
    titulo1: 'Descripción',
    subtitulo1: 'Línea de crédito comercial.',
    titulo2: 'Facturación',
    subtitulo2: 'Pagos unificados a 30 días.',
    titulo3: 'Ideal para',
    subtitulo3: 'Constructoras, empresas e industrias.',
    features: ['Gestión centralizada', 'Diferentes medios de pago', 'Seguridad y Confianza'],
    icon: <HandCoins className="w-16 h-16 min-[860px]:w-24 min-[860px]:h-24 text-zinc-900" strokeWidth={2.5} />
  },
  {
    id: 2,
    name: 'Abonos Mensuales',
    titulo1: 'Descripción',
    subtitulo1: 'Servicios con estadía permanente.',
    titulo2: 'Beneficio',
    subtitulo2: 'Recambio programado y disponibilidad.',
    titulo3: 'Ideal para',
    subtitulo3: 'Constructoras, empresas e industrias.',
    features: ['Precios preferenciales', 'Prioridad logística', 'Soporte personalizado'],
    icon: <CalendarSync className="w-16 h-16 min-[860px]:w-24 min-[860px]:h-24 text-zinc-900" strokeWidth={2.5} />
  },
  {
    id: 3,
    name: 'Servicio Domiciliario',
    titulo1: 'Tiempo de alquiler',
    subtitulo1: 'Base de 24 hs (extendible).',
    titulo2: 'Logística',
    subtitulo2: 'Entrega programada o en el acto.',
    titulo3: 'Ideal para',
    subtitulo3: 'Remodelaciones, poda y escombros.',
    features: ['Entrega directa en domicilio', 'Rapidez y disponibilidad', 'SMT, La Banda, Talitas y alrededores'],
    icon: <Home className="w-16 h-16 min-[860px]:w-24 min-[860px]:h-24 text-zinc-900" strokeWidth={2.5} />
  }
];

export default function Servicios() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-zinc-900 text-white py-14 min-[860px]:py-20 border-b-8 border-[#DC2626]">
        <div className="max-w-7xl mx-auto px-4 min-[860px]:px-6">
          <div className="inline-block bg-[#DC2626] px-4 py-1 mb-4 min-[860px]:mb-6 font-black uppercase text-xs tracking-widest">
            Nuestros Servicios
          </div>
          <h1 className="text-3xl min-[860px]:text-5xl mb-4 min-[860px]:mb-6">Promociones y servicios personalizados.</h1>
          <p className="text-base min-[860px]:text-xl text-zinc-300 max-w-3xl font-medium">
           Conoce ofertas, promociones mensuales y servicios personalizados para diferentes clientes.
          </p>
        </div>
        
      </section>
      

      <section className="py-12 min-[860px]:py-20">
        <div className="max-w-7xl mx-auto px-4 min-[860px]:px-6">
          <div className="grid grid-cols-1 min-[860px]:grid-cols-3 gap-6 min-[860px]:gap-8">
            {containers.map((container) => (
              <div
                key={container.id}
                className="border-4 border-zinc-900 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] min-[860px]:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                <div className="bg-zinc-100 p-8 min-[860px]:p-12 border-b-4 border-zinc-900 flex items-center justify-center">
                  {container.icon}
                </div>

                <div className="p-6 min-[860px]:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl min-[860px]:text-2xl">{container.name}</h3>
                    <div className="bg-[#DC2626] text-white px-3 py-1 font-black uppercase text-xs flex-shrink-0 ml-2">
                      Popular
                    </div>
                  </div>

                  <div className="mb-6 space-y-3">
                    <div className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#DC2626] mt-2"></div>
                        <div>
                          <p className="font-bold uppercase text-xs text-zinc-500">{container.titulo1}</p>
                          <p className="font-bold text-zinc-900">{container.subtitulo1}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-[#DC2626] mt-2"></div>
                      <div>
                        <p className="font-bold uppercase text-xs text-zinc-500">{container.titulo2}</p>
                        <p className="font-bold text-zinc-900">{container.subtitulo2}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-[#DC2626] mt-2"></div>
                      <div>
                        <p className="font-bold uppercase text-xs text-zinc-500">{container.titulo3}</p>
                        <p className="font-bold text-zinc-900">{container.subtitulo3}</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t-2 border-zinc-900 pt-6 mb-6 space-y-2">
                    {container.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-[#DC2626] flex-shrink-0" strokeWidth={3} />
                        <span className="font-bold text-sm text-zinc-900">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contacto"
                    className="block w-full bg-[#DC2626] text-white px-6 py-4 font-black uppercase text-sm tracking-wide text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-1px] hover:translate-y-[-1px]"
                  >
                    Alquilar Ahora
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 min-[860px]:py-20 bg-zinc-800 text-white border-t-4 border-[#DC2626]">
           <div className="max-w-4xl mx-auto border-4 border-white bg-zinc-900 p-6 min-[860px]:p-10 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] relative transition-all hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-2 bg-[#DC2626]"></div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-zinc-800 p-4 min-[860px]:p-5 border-2 border-white mb-6">
                {/* Podés usar 'Box', 'Archive' o mantener 'Home' importándolo desde lucide-react */}
                <Container className="w-12 h-12 min-[860px]:w-16 min-[860px]:h-16 text-[#DC2626]" strokeWidth={2} />
              </div>
              <div className="w-full mb-8">
                <div className="inline-block bg-[#DC2626] px-3 py-1 mb-3 font-black uppercase text-[10px] min-[860px]:text-xs tracking-widest text-white">
                  POPULAR
                </div>
                <h3 className="text-3xl min-[860px]:text-4xl font-black uppercase tracking-tighter text-white">
                  Contenedor de 5m³
                </h3>
                <p className="text-zinc-400 font-medium text-sm min-[860px]:text-base mt-2 max-w-lg mx-auto">
                  Dimensiones ideales para la mayoría de las obras, remodelaciones, limpieza de terrenos y residos no orgánicos.
                </p>
              </div>
              
              {/* Grilla de Dimensiones Centrada */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 min-[860px]:gap-12 w-full max-w-2xl mx-auto border-t-2 border-zinc-800 pt-8">
                
                <div className="flex flex-col items-center">
                  <p className="font-black uppercase text-xs tracking-widest text-[#DC2626] mb-1">Largo</p>
                  <p className="font-bold text-white text-xl min-[860px]:text-2xl">3.60 mts</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <p className="font-black uppercase text-xs tracking-widest text-[#DC2626] mb-1">Ancho</p>
                  <p className="font-bold text-white text-xl min-[860px]:text-2xl">1.80 mts</p>
                </div>

                <div className="flex flex-col items-center">
                  <p className="font-black uppercase text-xs tracking-widest text-[#DC2626] mb-1">Alto</p>
                  <p className="font-bold text-white text-xl min-[860px]:text-2xl">1.20 mts</p>
                </div>
                
              </div>
            </div>
          </div>
      </section>

      <section className="py-12 min-[860px]:py-20 bg-zinc-100 border-t-4 border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 min-[860px]:px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl min-[860px]:text-4xl mb-4 min-[860px]:mb-6">¿Tenes dudas sobre que servicio necesitas?</h2>
            <p className="text-base min-[860px]:text-lg text-zinc-700 mb-6 min-[860px]:mb-8 font-medium">
              Nuestro equipo te asesora sin compromiso. Analizamos tu proyecto y te recomendamos
              el servicio ideal según el tipo y volumen de escombros.
            </p>
            <Link
              to="/contacto"
              className="inline-block w-full min-[860px]:w-auto text-center bg-[#DC2626] text-white px-8 py-4 font-black uppercase text-sm tracking-wide shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              Contactar a un Especialista
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
