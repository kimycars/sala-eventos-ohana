import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sala de Eventos Ohana | Espacio para eventos en Humanes de Madrid",
  description:
    "Sala de eventos en Humanes de Madrid para celebraciones, eventos privados, reuniones y ocasiones especiales. Solicita información y consulta disponibilidad.",
  openGraph: {
    title: "Sala de Eventos Ohana",
    description:
      "El espacio para tus celebraciones en Humanes de Madrid. Solicita información y consulta disponibilidad.",
    type: "website",
    locale: "es_ES",
    images: [
      {
        url: "https://images.pexels.com/photos/16985129/pexels-photo-16985129.jpeg?auto=compress&cs=tinysrgb&w=1200",
        width: 1200,
        alt: "Sala de eventos decorada con mesas redondas",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${instrument.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="grain flex min-h-full flex-col bg-sand text-ink dark:bg-night dark:text-frost">
        {children}
      </body>
    </html>
  );
}