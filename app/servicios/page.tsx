import Navbar from '../../components/Navbar';

export default function Servicios() {
  return (
    <div className="min-h-screen bg-[#fde8e5] text-[#2b1020]">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <section className="rounded-[2rem] border border-[rgba(43,16,32,0.08)] bg-white/90 p-8 shadow-[0_24px_70px_rgba(252,102,31,0.08)] sm:p-10">
          <div className="space-y-6">
            <div className="max-w-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ec1a82]">Servicios</p>
              <h1 className="text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
                Lecturas, guías y procesos para acompañar tus cambios.
              </h1>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Lectura de tarot intuitiva",
                  text: "Una sesión clara y luminosa para comprender el momento actual y tu siguiente paso.",
                },
                {
                  title: "Acompañamiento evolutivo",
                  text: "Estrategias suaves para integrar mensajes y crear hábitos conscientes.",
                },
                {
                  title: "Rituales personalizados",
                  text: "Prácticas femeninas y cósmicas para conectar con tu centro y manifestar deseos.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-[rgba(43,16,32,0.08)] bg-[#fff1f5] p-6 shadow-[0_18px_40px_rgba(236,26,130,0.12)]"
                >
                  <h3 className="text-xl font-semibold text-[#2b1020]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#4a2a38]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}