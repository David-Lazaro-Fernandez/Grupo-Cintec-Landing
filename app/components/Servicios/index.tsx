import Image from "next/image";



const serviceList = [
    {
        title: 'Camaras de vigilancia para la seguridad de ti y tus clientes',
        description: 'Protege tu negocio con nuestras cámaras CCTV de alta calidad y costo efectivas.  No importa si eres una empresa pequeña o grande te ayudamos a elegir un sistema adecuado, ofreciendo instalación experta y configuración personalizada.',
        image: '/CAM.png',
        link:'#'
    },
    {
        title: 'Puntos de venta para mejorar la contabilidad de tu empresa',
        description: 'Mejora tu negocio con la implementación experta de puntos de venta. En Cintec, te asesoramos para seleccionar o personalizar un sistema adecuado, brindando instalación especializada y configuración personalizada.',
        image: '/PV.png',
        link:'#'
    },
    {
        title: 'Redes rapidas, seguras y eficientes para tu negocio',
        description: 'Optimiza tu entorno empresarial con la instalación profesional de redes. Ya seas un hospital, oficina o una unidad residencial, te guiamos para elegir o personalizar un sistema adaptado, ofreciendo instalación experta y configuración personalizada.',
        image: '/RED.png',
        link:'#'
    },
    {
        title: 'Controles de acceso para tu seguridad',
        description: 'Refuerza la seguridad en tu empresa con la instalación profesional de controles de acceso. En Cintec, te orientamos para elegir o personalizar un sistema adaptado, brindando instalación experta y configuración personalizada.',
        image: '/PA.png',
        link:'#'
    },
]

const Servicios = () => {
    return (
        <div className="flex flex-col items-center gap-20">
            <div className="flex flex-col items-center">
                <p className="text-title text-primary font-bold">Nuestros Servicios</p>
            </div>
            <div className="flex flex-col gap-24">
                {serviceList.map((service, index) => {
                    return (
                        <>
                            {index % 2 === 0 ?
                                <LeftService key={index} title={service.title} description={service.description} image={service.image} link={service.link} /> :
                                <RightService key={index} title={service.title} description={service.description} image={service.image} link={service.link}/>
                            }
                        </>
                    )
                })}
            </div>
        </div>
    )
}


const LeftService = ({ title, description, image, link }: { title: string, description: string, image: string, link:string }) => {
    return (
        <div className="flex flex-row justify-evenly">
            <Image src={image} alt="Logo" width={400} height={400} />
            <div className='flex flex-col gap-6 w-1/2 justify-center items-start'>
                <h1 className='text-title font-bold text-primary'>{title}</h1>
                <p className='text-lg text-paper'>{description}</p>
                <a href={link} className="rounded-full bg-secondary hover:bg-light transition duration-300 text-white py-3 px-6 text-lg">
                    Conoce más
                </a>
            </div>
        </div>

    )
}


const RightService = ({ title, description, image, link }: { title: string, description: string, image: string, link:string }) => {
    return (
        <div className="flex flex-row justify-evenly">
            <div className='flex flex-col gap-6 w-1/2 justify-center items-start'>
                <h1 className='text-title text-primary font-bold'>{title}</h1>
                <div className='text-lg text-paper'>{description}</div>
                <a href={link} className="rounded-full bg-secondary hover:bg-light transition duration-300 text-white py-3 px-6 text-lg">
                    Conoce más
                </a>
            </div>
            <Image src={image} alt="Logo" width={400} height={400} />

        </div>
    )
}


export default Servicios;