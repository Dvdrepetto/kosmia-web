import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Servicios() {
  const servicios = [
    {
      title: "Lectura de caminos",
      description: "Una lectura para momentos de decisión, cambios o incertidumbre. Te acompaña a observar posibilidades, registrar qué sentís y elegir con más claridad.",
      duracion: "60 minutos",
    },
    {
      title: "Lectura de relaciones",
      description: "Un espacio para mirar vínculos, dinámicas emocionales y aprendizajes relacionales desde una perspectiva consciente y evolutiva.",
      duracion: "60 minutos",
    },
    {
      title: "Lectura general",
      description: "Una lectura integral para comprender el momento presente, reconocer energías disponibles y ordenar los temas que hoy necesitan atención.",
      duracion: "60 minutos",
    },
    {
      title: "Lectura de runas",
      description: "Una consulta simbólica y profunda para conectar con mensajes, ciclos y aprendizajes desde la sabiduría de las runas.",
      duracion: "60 minutos",
    },
    {
      title: "Interpretación de carta astral",
      description: "Una mirada astrológica para reconocer aspectos de tu energía, personalidad, procesos internos y potenciales caminos de crecimiento.",
      duracion: "60 minutos",
    },
    {
      title: "Seguimiento mensual",
      description: "Un acompañamiento continuo para observar procesos, revisar movimientos internos y sostener claridad durante el mes.",
      duracion: "Sesiones mensuales",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fde8e5] text-[#2b1020]">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <section className="rounded-[2rem] border border-[rgba(43,16,32,0.08)] bg-white/90 p-8 shadow-[0_24px_70px_rgba(252,102,31,0.08)] sm:p-10">
          <div className="space-y-6">
            <div className="max-w-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ec1a82]">Servicios</p>
              <h1 className="text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
                Lecturas y acompañamientos para tu autoconocimiento.
              </h1>
              <p className="text-lg leading-8 text-[#4a2a38] mt-4">
                Las sesiones pueden ser online o presenciales. Para consultar disponibilidad y valores, escribime por WhatsApp.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {servicios.map((servicio) => (
                <div
                  key={servicio.title}
                  className="rounded-[2rem] border border-[rgba(43,16,32,0.08)] bg-[#fff1f5] p-6 shadow-[0_18px_40px_rgba(236,26,130,0.12)]"
                >
                  <h3 className="text-xl font-semibold text-[#2b1020]">{servicio.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#4a2a38]">{servicio.description}</p>
                  <p className="mt-4 text-xs text-[#ec1a82] font-medium">Duración: {servicio.duracion}</p>
                  <a
                    href="https://wa.me/34640207934?text=Hola%20Agustina%2C%20quiero%20consultar%20por%20una%20lectura%20de%20tarot%20evolutivo."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-[#ec1a82] to-[#fc661f] text-white font-semibold rounded-full text-sm hover:shadow-lg transition-all duration-300"
                  >
                    Consultar por WhatsApp
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
