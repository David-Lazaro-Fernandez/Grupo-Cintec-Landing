import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clientes from "./components/Clientes";
import Servicios from "./components/Servicios";
export default function Home() {
  return (
    <main className="flex flex-row justify-center">
      <div className="w-[90%] flex flex-col gap-24">
        <Navbar />
        <Hero />
        <Clientes />
        <Servicios />
      </div>

    </main>
  );
}
