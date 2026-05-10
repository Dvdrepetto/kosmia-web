import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
