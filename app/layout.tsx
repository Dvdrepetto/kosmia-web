import type { Metadata } from "next";
import { Afacad_Flux } from "next/font/google";
import "./globals.css";

const afacadFlux = Afacad_Flux({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-afacad",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kosmia | Tarot evolutivo con Agustina Eder",
  description:
    "Lecturas de tarot evolutivo con Agustina Eder para mirar hacia adentro, ordenar procesos y conectar con tu intuición.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${afacadFlux.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
