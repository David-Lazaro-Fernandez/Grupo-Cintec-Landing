import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clientes from "./components/Clientes";
import Servicios from "./components/Servicios";
import Diferentes from "./components/Diferentes";
import Necesidades from "./components/Necesidades";
import Funcionamos from "./components/Funcionamos";
import Agendar from "./components/Agendar";
import Proteger from "./components/Proteger";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-row justify-center">
      <div className="w-[90%] flex flex-col gap-24">
        <Navbar />
        <Hero />
        <Clientes />
        <Servicios />
        <Diferentes />
        <Necesidades />
        <Funcionamos />
        <Agendar />
        <Proteger />
        <Footer />
      </div>

    </main>
  );
}
