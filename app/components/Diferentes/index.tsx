import Image from "next/image";

const diferenciadores = [
    {
        icon: '/xp.png',
        subtitle: 'Experiencia',
        desc: 'Contamos con experiencia previa en los diferentes proyectos y servicios que ofrecemos.',
    },
    {
        icon: '/EC.png',
        subtitle: 'Calidad Garantizada',
        desc: 'Puedes contar con que tu proyecto contará con una excelente calidad.'
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
        subtitle: 'Flexibilidad',
        desc: 'Nos adaptamos completamente a tus necesidades y posibilidades.'
    }
]

const Item = ({ icon, subtitle, desc }: { icon: string; subtitle: string; desc: string }) => {
    return (
        <div className="flex flex-col items-start gap-3 max-w-64">
            <Image src={icon} width={50} height={50} alt="Icon" />
            <h3 className="text-xl text-primary font-bold">{subtitle}</h3>
            <p className="text-sm text-paper">{desc}</p>
        </div>
    );
};

const Diferentes = () => {
    return (
        <div className="flex flex-col items-center gap-20">
            <h3 className="text-title font-bold text-primary">Somos Diferentes</h3>
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
