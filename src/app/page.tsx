import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Presentacion from "@/components/Presentacion";
import Espacio from "@/components/Espacio";
import Eventos from "@/components/Eventos";
import Contacto from "@/components/Contacto";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Presentacion />
        <Espacio />
        <Eventos />
        <Cta />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}