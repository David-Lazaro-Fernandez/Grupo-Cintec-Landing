import Image from 'next/image'

const Hero = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-start gap-7 w-1/2">
                <p className='font-normal text-xl text-paper'>Servicios de confianza</p>
                <h1 className='font-bold text-6xl w-3/4 text-primary'>Deja la seguridad de tu negocio en nuestras manos</h1>
                <a href="#" className="rounded-full bg-secondary hover:bg-[#46536B]transition duration-300 text-white py-3 px-6 text-xl">
                    Cotiza con un experto
                </a>
            </div>
            <div>
                <Image src="/hero.png" alt="Una cliente pensando en como puede mejorar la seguridad de su cafeteria" width={590} height={590} />
            </div>
        </div>
    );
}

export default Hero;

