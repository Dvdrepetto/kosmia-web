'use client';

import Link from 'next/link';
import TarotCard from './TarotCard';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16">
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h1 className="text-4xl font-bold leading-tight text-[#2b1020] sm:text-5xl lg:text-6xl">
            Kosmia Tarot Evolutivo
          </h1>
          <p className="mt-3 text-lg font-medium text-[#ec1a82] sm:text-xl">
            Tu guía de autoconocimiento
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto principal */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold text-[#2b1020] leading-tight">
                Kosmia es un espacio de tarot evolutivo para acompañarte a mirar hacia adentro, ordenar tus procesos y conectar con tu intuición
              </h2>
            </div>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/34640207934?text=Hola%20Agustina%2C%20quiero%20consultar%20por%20una%20lectura%20de%20tarot%20evolutivo."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#ec1a82] to-[#fc661f] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Reservar Lectura
              </a>
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#ffbedc] text-[#2b1020] font-semibold rounded-full border border-[#ec1a82]/25 hover:bg-[#ffd7e3] transition-all duration-300 hover:-translate-y-1"
              >
                Ver servicios
              </Link>
            </div>
          </div>

          {/* Cartas de tarot */}
          <div className="flex justify-center lg:justify-end">
            <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 items-center">
              <TarotCard
                title="La Intuición"
                description="Escuchar lo que tu interior ya sabe"
                backImage="/cartaElSol.jpg"
              />
              <TarotCard
                title="El Proceso"
                description="Registrar emociones, mirar patrones y abrir caminos"
                backImage="/JusticiaCarta.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
