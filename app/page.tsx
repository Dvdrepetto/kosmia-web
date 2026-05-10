import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fde8e5] text-[#2b1020]">
      <Navbar />
      <Hero />

      <main className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <section id="contactame" className="rounded-[2rem] border border-[rgba(43,16,32,0.08)] bg-white/90 p-8 shadow-[0_24px_70px_rgba(252,102,31,0.08)] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
                Contactame
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-[#4a2a38]">
                Si sentís que es momento de mirar hacia adentro, podés escribirme para reservar una lectura o hacerme cualquier consulta.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/34640207934?text=Hola%20Agustina%2C%20quiero%20consultar%20por%20una%20lectura%20de%20tarot%20evolutivo."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#ec1a82] to-[#fc661f] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  Reservar Lectura
                </a>
                <a
                  href="https://www.instagram.com/kosmia.tarot/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#ffbedc] text-[#2b1020] font-semibold rounded-full border border-[#ec1a82]/25 hover:bg-[#ffd7e3] transition-all duration-300 hover:-translate-y-1"
                >
                  @kosmia.tarot
                </a>
              </div>
            </div>
            <div className="space-y-4 rounded-[2rem] bg-[#ffbedc] p-8 text-[#2b1020] shadow-[0_18px_40px_rgba(236,26,130,0.14)]">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ec1a82]">Conectemos</p>
              <p className="text-lg font-semibold">WhatsApp</p>
              <p className="text-sm leading-7 text-[#4a2a38]">
                Mi canal principal para reservas, disponibilidad y consultas.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
