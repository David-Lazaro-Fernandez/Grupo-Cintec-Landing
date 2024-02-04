import Image from 'next/image'

const Hero = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-start gap-7 w-1/2">
                <p className='font-normal text-xl text-paper'>Servicios de confianza</p>
                <h1 className='font-bold text-6xl w-3/4 text-primary'>Deja la seguridad de tu negocio en nuestras manos</h1>
                <a href="#" className="rounded-full bg-secondary hover:bg-light transition duration-300 text-white py-3 px-6 text-xl">
                    Cotiza con un experto
                </a>
            </div>
            <div style={{ position: 'relative' }}>
                <Image src="/engineers2.jpg" alt="Un par de ingenieros haciendo mantenimiento a las instalaciones de la zona" width={500} height={500} style={{ width: '500px', height: '500px', objectFit: 'cover' }} />
                <div style={{ backgroundColor: '#1D2764', content: '', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.3 }}></div>
            </div>
        </div>
    );
}

export default Hero;

