import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fde8e5] text-[#2b1020]">
      <Navbar />
      <Hero />

      <main className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <section id="contactame" className="rounded-[2rem] border border-[rgba(43,16,32,0.08)] bg-white/90 p-8 shadow-[0_24px_70px_rgba(252,102,31,0.08)] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ec1a82]">Contáctame</p>
              <h2 className="text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
                Un espacio cálido, profesional y con mensaje propio.
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-[#4a2a38]">
                Escribe para reservar tu lectura o preguntar sobre sesiones, tiempos y energía disponible.
              </p>
            </div>
            <div className="space-y-4 rounded-[2rem] bg-[#ffbedc] p-8 text-[#2b1020] shadow-[0_18px_40px_rgba(236,26,130,0.14)]">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ec1a82]">Estoy aquí</p>
              <p className="text-lg font-semibold">hola@kosmia.com</p>
              <p className="text-sm leading-7 text-[#4a2a38]">
                Envíame un mensaje y te responderé con detalles para tu primera sesión.
              </p>
              <a
                href="mailto:hola@kosmia.com"
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#ec1a82] via-[#ff8a79] to-[#fc661f] px-6 py-3 text-sm font-bold text-white transition hover:opacity-95"
              >
                Escribir a Agus
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
