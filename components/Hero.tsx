'use client';

import TarotCard from './TarotCard';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover filter blur-[1px]"
        autoPlay
        muted
        loop
        playsInline
        onError={(e) => {
          // Fallback si el video no carga
          e.currentTarget.style.display = 'none';
        }}
      >
        <source src="/heroVideo.mov" type="video/mp4" />
        <source src="/heroVideo.mov" type="video/quicktime" />
      </video>

      {/* Overlay con degradado */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fde8e5]/90 via-[#ffbedc]/80 to-[#ec1a82]/70"></div>

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto principal */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2b1020] leading-tight">
                Kosmia es un espacio de tarot evolutivo para acompañarte a mirar hacia adentro, ordenar tus procesos y conectar con tu intuición
              </h1>
            </div>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/XXXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#ec1a82] to-[#fc661f] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Reservar lectura
              </a>
              <button
                onClick={() => scrollToSection('contactame')}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#ffbedc] text-[#2b1020] font-semibold rounded-full border border-[#ec1a82]/25 hover:bg-[#ffd7e3] transition-all duration-300 hover:-translate-y-1"
              >
                Conocer servicios
              </button>
            </div>
          </div>

          {/* Cartas de tarot */}
          <div className="flex justify-center lg:justify-end">
            <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 items-center">
              <TarotCard
                title="La Intuición"
                description="Escuchar lo que tu interior ya sabe"
                backImage="/CartaElSol.jpg"
              />
              <TarotCard
                title="El Proceso"
                description="Ordenar emociones, mirar patrones y abrir caminos"
                backImage="/JusticiaCarta.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}