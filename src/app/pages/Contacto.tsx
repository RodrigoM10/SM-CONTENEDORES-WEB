import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const numero = "5493814567281"; 

    const mensaje = `*HOLA SM CONTENEDORES, SOLICITO COTIZACIÓN:*

    *Nombre:* ${formData.name}
    *Teléfono:* ${formData.phone}
    *Dirección de entrega:* ${formData.address}

  💬 *Mensaje:*
  ${formData.message}`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-zinc-900 text-white py-14 min-[860px]:py-20 border-b-8 border-[#DC2626]">
        <div className="max-w-7xl mx-auto px-4 min-[860px]:px-6">
          <div className="inline-block bg-[#DC2626] px-4 py-1 mb-4 min-[860px]:mb-6 font-black uppercase text-xs tracking-widest">
            Contacto
          </div>
          <h1 className="text-3xl min-[860px]:text-5xl mb-4 min-[860px]:mb-6">Solicita tu Cotización</h1>
          <p className="text-base min-[860px]:text-xl text-zinc-300 max-w-3xl font-medium">
            Completa el formulario y nos pondremos en contacto contigo a la brevedad.
          </p>
        </div>
      </section>

      <section className="py-12 min-[860px]:py-20">
        <div className="max-w-7xl mx-auto px-4 min-[860px]:px-6">
          <div className="grid grid-cols-1 min-[860px]:grid-cols-2 gap-10 min-[860px]:gap-16">
            <div>
              <h2 className="text-2xl min-[860px]:text-4xl mb-6 min-[860px]:mb-8">Envíanos tu Consulta</h2>
              <form onSubmit={handleSubmit} className="space-y-5 min-[860px]:space-y-6">
                <div>
                  <label className="block mb-2 font-black uppercase text-sm text-zinc-700">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-4 border-zinc-900 px-4 py-3 font-bold focus:outline-none focus:border-[#DC2626] transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-black uppercase text-sm text-zinc-700">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border-4 border-zinc-900 px-4 py-3 font-bold focus:outline-none focus:border-[#DC2626] transition-colors"
                    placeholder="Ej: 381-680-7710"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-black uppercase text-sm text-zinc-700">
                    Dirección de Entrega
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full border-4 border-zinc-900 px-4 py-3 font-bold focus:outline-none focus:border-[#DC2626] transition-colors"
                    placeholder="Dirección completa"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-black uppercase text-sm text-zinc-700">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full border-4 border-zinc-900 px-4 py-3 font-bold focus:outline-none focus:border-[#DC2626] transition-colors resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#DC2626] text-white px-8 py-4 font-black uppercase text-sm tracking-wide shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]"
                >
                  Enviar Consulta
                </button>
              </form>
            </div>
            <div>
              <h2 className="text-2xl min-[860px]:text-4xl mb-6 min-[860px]:mb-8">Información de Contacto</h2>
              <div className="space-y-4 min-[860px]:space-y-6 mb-8 min-[860px]:mb-12">
                <div className="border-4 border-zinc-900 p-4 min-[860px]:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] min-[860px]:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#DC2626] p-2 min-[860px]:p-3 flex-shrink-0">
                      <MapPin className="w-5 h-5 min-[860px]:w-6 min-[860px]:h-6 text-white" strokeWidth={3} />
                    </div>
                    <div>
                      <p className="font-black uppercase text-xs text-zinc-500 mb-1">Dirección</p>
                      <p className="font-bold text-zinc-900">Benjamín Villafañe 2755, San Miguel de Tucumán</p>
                      <p className="font-bold text-zinc-900">Tucumán, Argentina</p>
                    </div>
                  </div>
                </div>
                <div className="border-4 border-zinc-900 p-4 min-[860px]:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] min-[860px]:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white">
                  <div className="flex items-start gap-4">
                    {/* Ícono principal del bloque */}
                    <div className="bg-[#DC2626] p-2 min-[860px]:p-3 flex-shrink-0">
                      <Phone className="w-5 h-5 min-[860px]:w-6 min-[860px]:h-6 text-white" strokeWidth={3} />
                    </div>
                    
                    <div className="w-full">
                      <p className="font-black uppercase text-xs text-zinc-500 mb-3 tracking-widest">Teléfonos</p>
                      
                      <div className="flex flex-col gap-3">
                       
                        <a 
                          href="tel:03814271212" 
                          className="flex items-center gap-3 text-zinc-900 hover:text-[#DC2626] transition-colors group"
                        >
                          <Phone className="w-4 h-4 text-zinc-400 group-hover:text-[#DC2626] transition-colors" strokeWidth={2.5} />
                          <span className="font-bold text-sm min-[860px]:text-base">427-1212 / 427-1221</span>
                          <span className="text-[10px] font-black text-zinc-400 uppercase ml-auto border-2 border-zinc-200 px-2 py-0.5 group-hover:border-[#DC2626] transition-colors">Fijos</span>
                        </a>

                        <div className="h-[2px] w-full bg-zinc-100"></div>
                        <a 
                          href="https://wa.me/5493814567281" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-3 text-zinc-900 hover:text-[#25D366] transition-colors group"
                        >
                          <MessageCircle className="w-4 h-4 text-zinc-400 group-hover:text-[#25D366] transition-colors" strokeWidth={2.5} />
                          <span className="font-bold text-sm min-[860px]:text-base">+54 9 381 456-7281</span>
                          <span className="text-[10px] font-black text-[#25D366] uppercase ml-auto border-2 border-[#25D366] bg-[#25D366]/10 px-2 py-0.5">WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-4 border-zinc-900 p-4 min-[860px]:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] min-[860px]:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#DC2626] p-2 min-[860px]:p-3 flex-shrink-0">
                      <Mail className="w-5 h-5 min-[860px]:w-6 min-[860px]:h-6 text-white" strokeWidth={3} />
                </div>
                  <div>
                    <p className="font-black uppercase text-xs text-zinc-500 mb-1tracking-widest">Email</p>
                    {/* Convertimos el texto en un enlace mailto: */}
                    <a 
                      href="mailto:smcontenedores@hotmail.com" 
                      className="font-bold text-zinc-900 break-all hover:text-[#DC2626] transition-colors duration-300 block"
                    >
                      smcontenedores@hotmail.com
                    </a>
                  </div>
                  </div>
                </div>
              </div>

            <div className="bg-zinc-200 h-[220px] min-[860px]:h-[300px] border-4 border-zinc-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] min-[860px]:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden w-full">
              <iframe
                title="Ubicación de SM Contenedores"
                src="https://maps.google.com/maps?q=Benjamin+Villafa%C3%B1e+2755,+San+Miguel+de+Tucuman,+Tucuman,+Argentina&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 min-[860px]:py-16 bg-zinc-900 text-white border-t-4 border-[#DC2626]">
        <div className="max-w-7xl mx-auto px-4 min-[860px]:px-6 text-center">
          <h3 className="text-xl min-[860px]:text-2xl mb-3 min-[860px]:mb-4">Horarios de Atención</h3>
          <p className="text-zinc-300 font-medium text-base min-[860px]:text-lg">
            Lunes a Viernes: 7:00 - 18:00
          </p>
          <p className="text-zinc-300 font-medium text-base min-[860px]:text-lg">
            Sábados: 7:00 - 13:00
          </p>
        </div>
      </section>
    </div>
  );
}
