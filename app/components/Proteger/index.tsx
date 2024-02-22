const Proteger = () => {
    return (
        <article className="flex flex-col justify-center items-center gap-24 py-16 w-full bg-primary">
            <section className="flex flex-row justify-evenly">
                <div className="flex flex-col items-start justify-center  w-6/12 gap-6">
                    <h3 className="text-4xl font-bold text-white">
                        Protege la operatividad y reputación de tu negocio con nuestros servicios de seguridad.
                    </h3>
                    <p className="text-lg text-white">
                        Desde el hogar o tú Micro-Empresa hasta el próximo Unicornio, permite que la seguridad que te rodea sea de la mayor calidad
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-6">
                    <a
                        href="https://calendly.com/grupocintec/30min?back=1&month=2024-02"
                        className='flex justify-center items-center rounded-lg bg-secondary hover:bg-light transition duration-300 text-white py-1  px-6  h-16'
                    >
                        Agenda una reunion
                    </a>
                    <a
                        href="https://calendly.com/grupocintec/30min?back=1&month=2024-02"
                        className='flex justify-center items-center rounded-lg bg-secondary hover:bg-light transition duration-300 text-white py-1  px-6  h-16'
                    >
                        Envíanos un mensaje
                    </a>
                </div>
            </section>
        </article>
    );
}

export default Proteger;