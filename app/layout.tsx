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
  title: "Kosmia | Tarot evolutivo con Agus",
  description:
    "Landing page moderna y luminosa para Agus, tarot evolutivo con energía cósmica y femenina.",
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
