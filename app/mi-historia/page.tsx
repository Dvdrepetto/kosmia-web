import Navbar from '../../components/Navbar';

export default function MiHistoria() {
  return (
    <div className="min-h-screen bg-[#fde8e5] text-[#2b1020]">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <section className="rounded-[2rem] border border-[rgba(43,16,32,0.08)] bg-white/85 p-8 shadow-[0_24px_70px_rgba(252,102,31,0.08)] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ec1a82]">Mi historia</p>
              <h1 className="text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
                Tarot con mirada evolutiva para mujeres que buscan un nuevo comienzo.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[#4a2a38]">
                Desde el primer encuentro, mi trabajo es acompañarte con amor y claridad. Uso cartas, símbolos y arquetipos para que reconectes con tus recursos internos y camines hacia una vida más consciente.
              </p>
            </div>
            <div className="rounded-[2rem] bg-[#ffbedc] p-6 shadow-[0_18px_40px_rgba(236,26,130,0.12)]">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ec1a82]">Un espacio seguro</p>
              <p className="mt-4 text-base leading-7 text-[#4a2a38]">
                Creo rituales sencillos y lecturas suaves que te ayuden a transformar el presente sin perder la elegancia de lo femenino.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}