import Image from 'next/image'

export default function Casos() {

    const info = [
        {
            title: 'Instalación',
            description: 'Nos enorgullece ofrecer servicios de calidad, asegurándonos de que cada proyecto sea ejecutado con la experiencia y la destreza necesarias.',
            image: '/instalacion.png',
        },
        {
            title: 'Configuración',
            description: 'Nos enorgullece ofrecer servicios de calidad, asegurándonos de que cada proyecto sea ejecutado con la experiencia y la destreza necesarias.',
            image: '/configuracion.png',
        },
        {
            title: 'Mantenimiento',
            description: 'Nos enorgullece ofrecer servicios de calidad, asegurándonos de que cada proyecto sea ejecutado con la experiencia y la destreza necesarias.',
            image: '/mantenimiento.png',
        },
    ]
    return (
        <section className="flex flex-col gap-12">
            <div className="text-center text-title font-bold">Nos adaptamos a tus necesidades</div>
            <article className='flex flex-row gap-32'>
                {info.map((info, index) => {
                    return (
                        <div className="relative hover:cursor-pointer max-w-64">
                            <Image src={info.image} alt="Descripción de la imagen" width={333} height={550} className="rounded-lg" />

                            <div className="h-full absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-between items-start p-9 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <div>
                                    <h5 className="text-white text-xl font-bold">{info.title}</h5>
                                </div>

                                <div>
                                    <h2 className='text-white text-lg font-light'>{info.description}</h2>
                                </div>
                            </div>
                        </div>
                    )
                })
                }

            </article>


        </section>

    )
}