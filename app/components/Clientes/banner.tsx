const images = [
    '/brands/AHU.png',
    '/brands/BEL.png',
    '/brands/BOS.png',
    '/brands/CHA.png',
    '/brands/HIK.png',
    '/brands/HON.png',
    '/brands/INT.png',
    '/brands/LEV.png',
    '/brands/PAN.png',
    '/brands/SAX.png',
];

const Banner = () => {
    return (
        <div className="relative w-full overflow-hidden h-20">
            <div className="flex absolute">
                <section className="flex items-center animate-horizontal-scroll">
                    {images.map((image,id) => (
                        <div className="max-w-80 min-w-60 pl-16" key={id}>
                            <img src={image} alt={`Logo `+id} />
                        </div>
                    ))}
                </section>
                <section className="flex items-center animate-horizontal-scroll">
                    {images.map((image,id) => (
                        <div className="max-w-80 min-w-60 pl-16" key={id}>
                            <img src={image} alt={`Logo `+id} />
                        </div>
                    ))}
                </section>
                <section className="flex items-center animate-horizontal-scroll">
                    {images.map((image,id) => (
                        <div className="max-w-80 min-w-60 pl-16" key={id}>
                            <img src={image} alt={`Logo `+id} />
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
};

export { Banner };
