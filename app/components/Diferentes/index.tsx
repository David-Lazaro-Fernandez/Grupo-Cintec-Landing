import Image from "next/image";

const diferenciadores = [
    {
        icon: '/xp.png',
        subtitle: '+3 años de experiencia',
        desc: 'Somos una empresa que sabe lo que necesitas y está aquí para ayudarte con ello.'
    },
    {
        icon: '/EC.png',
        subtitle: 'Empresa Certificada',
        desc: 'Cumplimos con cada una de las Certificaciones de Alta Demanda de la Industria.'
    },
    {
        icon: '/LR.png',
        subtitle: 'Lideres Regios',
        desc: 'Contamos con las mejores soluciones para el mercado moderno regio.'
    },
    {
        icon: '/CN.png',
        subtitle: 'Continuidad de negocio',
        desc: 'Somos una empresa que sabe lo que necesitas y está aquí para ayudarte con ello.'
    },
    {
        icon: '/PD.png',
        subtitle: 'Protegemos tus datos',
        desc: 'Puedes sentirte seguro de que tus datos están en buenas manos.'
    },
    {
        icon: '/ER.png',
        subtitle: 'Estamos regulados',
        desc: 'Estamos regulados por medio de los organismos nacionales e internacionales responsables.'
    }
]

const Item = ({ icon, subtitle, desc }: { icon: string; subtitle: string; desc: string }) => {
    return (
        <div className="flex flex-col items-start gap-3 max-w-64">
            <Image src={icon} width={50} height={50} alt="Icon" />
            <h3 className="text-xl font-bold">{subtitle}</h3>
            <p className="text-sm">{desc}</p>
        </div>
    );
};

const Diferentes = () => {
    return (
        <div className="flex flex-col items-center gap-20">
            <h3 className="text-title font-bold">Somos Diferentes</h3>
            <div className="grid grid-cols-3 gap-12">
                {diferenciadores.map((diferenciador, index) => (
                    <Item
                        key={index}
                        icon={diferenciador.icon}
                        subtitle={diferenciador.subtitle}
                        desc={diferenciador.desc}
                    />
                ))}

            </div>
        </div>
    );
};



export default Diferentes;
