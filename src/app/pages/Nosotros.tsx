import { Building2, Users, Target } from 'lucide-react';

import logoAndreani from '../assets/clients/andreani.png'
import logoCencosud from '../assets/clients/cencosud.png'
import logoDpv from '../assets/clients/dpv.jpg'
import logoFacultad from '../assets/clients/facultad.jpeg'
import logoGarsa from '../assets/clients/garsa.png'
import logoTLTC from '../assets/clients/ltct.png'
import logoOcasa from '../assets/clients/ocasa.png'
import logoOrtegaCamiones from '../assets/clients/ortega-camiones.png'
import logoSika from '../assets/clients/sika.webp'
import logoSiprosa from '../assets/clients/siprosa.png'
import logoTarcos from '../assets/clients/tarcos.png'
import logoTransnort from '../assets/clients/transnort.png'

export default function Nosotros() {
  // --- Datos de clientes ---
  const clientes = [
    { id: 1, name: 'Andreani', logo: logoAndreani },
    { id: 2, name: 'Cencosud', logo: logoCencosud },
    { id: 3, name: 'DPV', logo: logoDpv },
    { id: 4, name: 'Facultad', logo: logoFacultad },
    { id: 5, name: 'Garsa', logo: logoGarsa },
    { id: 6, name: 'TLTC', logo: logoTLTC },
    { id: 7, name: 'Empresa G', logo: logoOcasa },
    { id: 8, name: 'Ortega-Camiones', logo: logoOrtegaCamiones },
    { id: 9, name: 'Sika', logo: logoSika },
    { id: 10, name: 'Empresa J', logo: logoSiprosa },
    { id: 11, name: 'Tarcos', logo: logoTarcos },
    { id: 12, name: 'Transnort', logo: logoTransnort },
  ];

  return (
    <div className="min-h-screen bg-white font-black uppercase text-xs tracking-widest">
      <section className="bg-zinc-900 text-white py-14 min-[860px]:py-20 border-b-8 border-[#DC2626]">
        <div className="max-w-7xl mx-auto px-4 min-[860px]:px-6">
          <div className="inline-block bg-[#DC2626] px-4 py-1 mb-4 min-[860px]:mb-6 font-black uppercase text-xs tracking-widest">
            Sobre Nosotros
          </div>
          <h1 className="text-3xl min-[860px]:text-5xl mb-4 min-[860px]:mb-6">SM Contenedores</h1>
          <p className="text-base min-[860px]:text-xl text-zinc-300 max-w-3xl font-medium normal-case tracking-normal">
            Empresa familiar con más de 25 años de trayectoria en el rubro. Atendida y administrada por sus propios dueños.
          </p>
        </div>
      </section>

      <section className="py-12 min-[860px]:py-20">
        <div className="max-w-7xl mx-auto px-4 min-[860px]:px-6">
          <div className="grid grid-cols-1 min-[860px]:grid-cols-2 gap-10 min-[860px]:gap-16 items-center">
            <div>
              <h2 className="text-2xl min-[860px]:text-4xl mb-4 min-[860px]:mb-6">Nuestra Historia</h2>
              <div className="space-y-4 text-zinc-700 normal-case tracking-normal">
                <p className="font-medium text-base min-[860px]:text-lg">
                  Desde nuestros inicios, nos especializamos en brindar soluciones integrales
                  para la gestión de residuos en obras de construcción de todo tipo y escala.
                </p>
                <p className="font-medium text-base min-[860px]:text-lg">
                  Lo que comenzó como un emprendimiento familiar se ha convertido en una empresa tucumana
                  de referencia en el sector, manteniendo siempre nuestros valores fundamentales:
                  puntualidad, confiabilidad y atención personalizada.
                </p>
                <p className="font-medium text-base min-[860px]:text-lg">
                  Contamos con choferes de experiencia y un equipo de trabajo comprometido excelencia en el servicio.
                  Cada proyecto es una oportunidad para demostrar
                  nuestra experiencia y profesionalismo. Estamos a su disposición.
                </p>
              </div>
            </div>

            <div
              className="bg-zinc-200 h-[280px] min-[860px]:h-[500px] border-4 border-zinc-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] min-[860px]:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.05) 10px, rgba(0,0,0,0.05) 20px)
                `
              }}
            >
              <div className="text-center">
                <Building2 className="w-20 h-20 min-[860px]:w-32 min-[860px]:h-32 text-zinc-400 mx-auto mb-4" strokeWidth={1.5} />
                <p className="font-black uppercase text-zinc-500 text-sm">Imagen de la Empresa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 min-[860px]:py-20 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 min-[860px]:px-6">
          <div className="grid grid-cols-1 min-[860px]:grid-cols-3 gap-8 min-[860px]:gap-8">
            <div className="text-center min-[860px]:text-center flex min-[860px]:flex-col items-center min-[860px]:items-center gap-4 min-[860px]:gap-0">
              <div className="w-16 h-16 min-[860px]:w-20 min-[860px]:h-20 bg-[#DC2626] flex-shrink-0 min-[860px]:mx-auto min-[860px]:mb-6 flex items-center justify-center">
                <Target className="w-8 h-8 min-[860px]:w-10 min-[860px]:h-10 text-white" strokeWidth={3} />
              </div>
              <div className="text-left min-[860px]:text-center">
                <h3 className="text-xl min-[860px]:text-2xl mb-2 min-[860px]:mb-4 tracking-tighter">Misión</h3>
                <p className="text-zinc-300 font-medium text-sm min-[860px]:text-base normal-case tracking-normal">
                  Proveer soluciones eficientes y confiables para la gestión de residuos,
                  facilitando el éxito de cada proyecto de construcción.
                </p>
              </div>
            </div>

            <div className="text-center min-[860px]:text-center flex min-[860px]:flex-col items-center min-[860px]:items-center gap-4 min-[860px]:gap-0">
              <div className="w-16 h-16 min-[860px]:w-20 min-[860px]:h-20 bg-[#DC2626] flex-shrink-0 min-[860px]:mx-auto min-[860px]:mb-6 flex items-center justify-center">
                <Building2 className="w-8 h-8 min-[860px]:w-10 min-[860px]:h-10 text-white" strokeWidth={3} />
              </div>
              <div className="text-left min-[860px]:text-center">
                <h3 className="text-xl min-[860px]:text-2xl mb-2 min-[860px]:mb-4 tracking-tighter">Visión</h3>
                <p className="text-zinc-300 font-medium text-sm min-[860px]:text-base normal-case tracking-normal">
                  Ser la empresa líder en alquiler de contenedores, reconocida por nuestra
                  atención y calidad de servicio.
                </p>
              </div>
            </div>

            <div className="text-center min-[860px]:text-center flex min-[860px]:flex-col items-center min-[860px]:items-center gap-4 min-[860px]:gap-0">
              <div className="w-16 h-16 min-[860px]:w-20 min-[860px]:h-20 bg-[#DC2626] flex-shrink-0 min-[860px]:mx-auto min-[860px]:mb-6 flex items-center justify-center">
                <Users className="w-8 h-8 min-[860px]:w-10 min-[860px]:h-10 text-white" strokeWidth={3} />
              </div>
              <div className="text-left min-[860px]:text-center">
                <h3 className="text-xl min-[860px]:text-2xl mb-2 min-[860px]:mb-4 tracking-tighter">Valores</h3>
                <p className="text-zinc-300 font-medium text-sm min-[860px]:text-base normal-case tracking-normal">
                  Compromiso, puntualidad, confianza y trato personalizado.
                  Cada cliente es parte de nuestra familia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 min-[860px]:py-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 min-[860px]:px-6">
          <div className="text-center mb-8 min-[860px]:mb-12">
            <h2 className="text-xl min-[860px]:text-3xl font-black uppercase tracking-tighter text-zinc-900 mb-2">
              Empresas que confían en nosotros
            </h2>
            <div className="w-16 h-1 bg-[#DC2626] mx-auto"></div>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 min-[860px]:grid-cols-6 border-2 border-zinc-900 bg-zinc-900 gap-[2px]">
            {clientes.map((cliente, index) => (
              <div 
                key={cliente.id}
                className={`
                  h-20 min-[860px]:h-28 flex items-center justify-center p-4 group
                  ${index % 2 === 0 ? 'bg-white' : 'bg-zinc-50'}
                  hover: transition-colors duration-300
                `}
              >
                <img 
                  src={cliente.logo} 
                  alt={`Logo de ${cliente.name}`}
                  className="max-w-full max-h-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* --- FIN SECCIÓN CLIENTES --- */}

      <section className="py-12 min-[860px]:py-20 border-t-4 border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 min-[860px]:px-6">
          <div className="border-4 border-zinc-900 p-6 min-[860px]:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] min-[860px]:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block bg-[#DC2626] px-4 py-1 mb-4 min-[860px]:mb-6 font-black uppercase text-xs tracking-widest text-white">
                Por Qué Elegirnos
              </div>
              <h2 className="text-2xl min-[860px]:text-4xl mb-4 min-[860px]:mb-8">Experiencia que Marca la Diferencia</h2>
              <p className="text-base min-[860px]:text-lg text-zinc-700 mb-6 min-[860px]:mb-8 font-medium normal-case tracking-normal">
                Con más de 25 años en el mercado, hemos desarrollado un profundo conocimiento
                de las necesidades del sector constructivo. Sabemos que tu tiempo es valioso
                y que la confiabilidad no es negociable.
              </p>
              <div className="grid grid-cols-1 min-[860px]:grid-cols-2 gap-4 min-[860px]:gap-6 text-left">
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-[#DC2626] mt-2 flex-shrink-0"></div>
                  <p className="font-bold text-zinc-900 text-sm min-[860px]:text-base normal-case tracking-normal">Flota propia y mantenida regularmente</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-[#DC2626] mt-2 flex-shrink-0"></div>
                  <p className="font-bold text-zinc-900 text-sm min-[860px]:text-base normal-case tracking-normal">Atención personalizada y asesoramiento</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-[#DC2626] mt-2 flex-shrink-0"></div>
                  <p className="font-bold text-zinc-900 text-sm min-[860px]:text-base normal-case tracking-normal">Cumplimiento estricto de horarios</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-[#DC2626] mt-2 flex-shrink-0"></div>
                  <p className="font-bold text-zinc-900 text-sm min-[860px]:text-base normal-case tracking-normal">Precios competitivos y transparentes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}