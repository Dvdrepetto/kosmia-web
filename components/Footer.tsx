export default function Footer() {
  return (
    <footer className="border-t border-[#ec1a82]/10 bg-[#2b1020] text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#ffbedc]">
              Kosmia
            </p>
            <div>
              <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
                Kosmia Tarot Evolutivo
              </h2>
              <p className="mt-2 max-w-md text-base leading-7 text-[#ffd7e3]">
                Tu guía de autoconocimiento para mirar hacia adentro, ordenar procesos y conectar con tu intuición.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <a
              href="https://wa.me/34640207934?text=Hola%20Agustina%2C%20quiero%20consultar%20por%20una%20lectura%20de%20tarot%20evolutivo."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#ec1a82] to-[#fc661f] px-6 py-3 text-sm font-bold text-white shadow-[0_14px_35px_rgba(236,26,130,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(236,26,130,0.36)]"
            >
              Contactar por WhatsApp
            </a>
            <a
              href="https://www.instagram.com/kosmia.tarot/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[#ffbedc]/30 bg-white/5 px-5 py-2 text-sm font-semibold text-[#ffbedc] shadow-[0_10px_24px_rgba(255,190,220,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ffbedc]/60 hover:bg-[#ffbedc]/10 hover:text-white"
            >
              @kosmia.tarot
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 py-5 text-sm text-[#ffd7e3] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Kosmia Tarot Evolutivo</p>
          <p>by Agustina Eder</p>
        </div>
      </div>
    </footer>
  );
}
