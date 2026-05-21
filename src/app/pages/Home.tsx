import { Link } from 'react-router';
import { DollarSign, Clock, Award } from 'lucide-react';
import logo_png from '../assets/Contenedor-SM-Rojo_edited.png'

export default function Home() {
  return (
    <div className="min-h-screen">
      <section
        className="bg-zinc-900 text-white py-16 min-[860px]:py-32 relative overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(rgba(24, 24, 27, 0.95), rgba(24, 24, 27, 0.95)),
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px),
            repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)
          `
        }}
      >
        {/* Transformamos este contenedor en flex para poner texto a la izq e imagen a la der */}
        <div className="max-w-7xl mx-auto px-4 min-[860px]:px-6 relative z-10 flex flex-col min-[860px]:flex-row items-center justify-between gap-12">
          
          {/* LADO IZQUIERDO: Información */}
          <div className="max-w-2xl w-full">
            <div className="inline-block bg-[#DC2626] px-4 py-1 mb-4 min-[860px]:mb-6 font-black uppercase text-xs tracking-widest">
              Servicio Profesional
            </div>
            <h1 className="text-3xl min-[860px]:text-5xl mb-4 min-[860px]:mb-6">
              Servicio y Alquiler de Contenedores<br/>
              Rápido y Confiable
            </h1>
            <p className="text-base min-[860px]:text-xl text-zinc-300 mb-8 min-[860px]:mb-12 font-medium">
              Soluciones eficientes para la gestión de escombros, tierra, áridos y residuos autorizados.
              Contenedores de 5 m³ entregados cuando los necesitas.
            </p>
            <div className="flex flex-col min-[860px]:flex-row gap-4">
              <Link
                to="/contacto"
                className="w-full min-[860px]:w-auto text-center bg-[#DC2626] text-white px-8 py-4 font-black uppercase text-sm tracking-wide shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                Solicitar Cotización
              </Link>
              <Link
                to="/servicios"
                className="w-full min-[860px]:w-auto text-center border-2 border-white text-white px-8 py-4 font-black uppercase text-sm tracking-wide shadow-[6px_6px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                Ver Capacidades
              </Link>
            </div>
          </div>
          <div className="w-full min-[860px]:w-auto flex justify-center min-[860px]:justify-end">
            <img 
              src={logo_png}
              alt="Logo SM Contenedores" 
              className="w-full max-w-[280px] min-[860px]:max-w-[450px] object-contain opacity-90 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" 
            />
          </div>     
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#DC2626]/10 to-transparent pointer-events-none"></div>
      </section>

      <section className="py-12 min-[860px]:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 min-[860px]:px-6">
          <div className="grid grid-cols-1 min-[860px]:grid-cols-3 gap-6 min-[860px]:gap-8">
            <div className="border-4 border-zinc-900 p-6 min-[860px]:p-8 relative shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] min-[860px]:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="absolute top-0 left-0 w-16 h-1 bg-[#DC2626]"></div>
              <Clock className="w-10 h-10 min-[860px]:w-12 min-[860px]:h-12 mb-4 min-[860px]:mb-6 text-[#DC2626]" strokeWidth={3} />
              <h3 className="text-xl min-[860px]:text-2xl mb-3 min-[860px]:mb-4">Puntualidad</h3>
              <p className="text-zinc-600 font-medium text-sm min-[860px]:text-base">
                Entrega y retiro programados según tu cronograma de obra. Sin demoras, sin complicaciones.
              </p>
            </div>
            <div className="border-4 border-zinc-900 p-6 min-[860px]:p-8 relative shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] min-[860px]:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="absolute top-0 left-0 w-16 h-1 bg-[#DC2626]"></div>
              <DollarSign className="w-10 h-10 min-[860px]:w-12 min-[860px]:h-12 mb-4 min-[860px]:mb-6 text-[#DC2626]" strokeWidth={3} />
              <h3 className="text-xl min-[860px]:text-2xl mb-3 min-[860px]:mb-4">Precio</h3>
              <p className="text-zinc-600 font-medium text-sm min-[860px]:text-base">
               Relación Precio-Calidad. Aseguramos el mejor precio del mercado para su contenedor.
              </p>
            </div>
            <div className="border-4 border-zinc-900 p-6 min-[860px]:p-8 relative shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] min-[860px]:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="absolute top-0 left-0 w-16 h-1 bg-[#DC2626]"></div>
              <Award className="w-10 h-10 min-[860px]:w-12 min-[860px]:h-12 mb-4 min-[860px]:mb-6 text-[#DC2626]" strokeWidth={3} />
              <h3 className="text-xl min-[860px]:text-2xl mb-3 min-[860px]:mb-4">Más de 25 Años de Experiencia</h3>
              <p className="text-zinc-600 font-medium text-sm min-[860px]:text-base">
                Empresa familiar con trayectoria comprobada en el sector de la construcción.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 min-[860px]:py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 min-[860px]:px-6 text-center">
          <h2 className="text-2xl min-[860px]:text-4xl mb-4 min-[860px]:mb-6">¿Listo para comenzar tu proyecto?</h2>
          <p className="text-base min-[860px]:text-xl text-zinc-300 mb-8 min-[860px]:mb-12 max-w-2xl mx-auto font-medium">
            Contactanos hoy y recibe una cotización personalizada para tu obra.
          </p>
          <Link
            to="/contacto"
            className="inline-block w-full min-[860px]:w-auto bg-[#DC2626] text-white px-8 min-[860px]:px-12 py-4 min-[860px]:py-5 font-black uppercase text-sm min-[860px]:text-base tracking-wide shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]"
          >
            Solicitar Cotización Ahora
          </Link>
        </div>
      </section>
    </div>
  );
}
