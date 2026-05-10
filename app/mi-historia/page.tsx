import Navbar from '../../components/Navbar';
import Image from 'next/image';
import Footer from '../../components/Footer';

export default function MiHistoria() {
  return (
    <div className="min-h-screen bg-[#fde8e5] text-[#2b1020]">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <section className="rounded-[2rem] border border-[rgba(43,16,32,0.08)] bg-white/85 p-8 shadow-[0_24px_70px_rgba(252,102,31,0.08)] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
                Mi historia
              </h1>
              <p className="text-lg leading-8 text-[#4a2a38] font-medium">
                Soy Agus, creadora de Kosmia Tarot Evolutivo.
              </p>
              <p className="text-lg leading-8 text-[#4a2a38]">
                Mi camino con el tarot empezó alrededor de 2021, un año antes de emigrar a España. En ese momento, el tarot apareció como una forma de acompañarme, de mirar hacia adentro y de empezar a registrar con más claridad lo que sentía.
              </p>
              <p className="text-lg leading-8 text-[#4a2a38]">
                Con el tiempo entendí que las cartas no tenían que ver con predecir el futuro, sino con abrir preguntas, ordenar emociones y reconocer procesos internos.
              </p>
              <p className="text-lg leading-8 text-[#4a2a38]">
                Kosmia nace de ese lugar: del deseo de crear un espacio honesto, sensible y consciente, donde el tarot sea una guía de autoconocimiento y no una respuesta cerrada.
              </p>
              <p className="text-lg leading-8 text-[#4a2a38]">
                A través de cada lectura, mi intención es acompañarte a conectar con tu intuición, mirar tus procesos con más amor y encontrar claridad en aquello que hoy estás transitando.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="aspect-[3/4] w-full max-w-md overflow-hidden rounded-[2rem] bg-[#ffbedc] shadow-[0_18px_40px_rgba(236,26,130,0.12)]">
                <Image
                  src="/Agus.jpg.png"
                  alt="Agus, creadora de Kosmia Tarot Evolutivo"
                  width={1086}
                  height={1448}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
