import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stringe | Protocolo Génesis",
  description: "Estrategia competitiva refinada. Domina el tablero, gobierna la economía. Registros abiertos para el Protocolo Génesis.",
  keywords: ["estrategia", "gaming competitivo", "economía digital", "meritocracia", "habilidad"],
};

import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import PageTransition from "@/components/PageTransition";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <CustomCursor />
        <ScrollProgress />
        <div className="noise-overlay" />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
