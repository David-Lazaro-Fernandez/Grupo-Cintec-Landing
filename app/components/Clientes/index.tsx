import Image from "next/image";

const images = ['/HEB.png', '/CPM.png', '/Monte.png', '/EPL.png', '/NP.png']

const Clientes = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-title font-bold">Clientes Cintec</h1>
            <div className="flex flex-row gap-6">
                {images.map((image, index) => (
                    <Image key={index} src={image} alt="Logo" width={203} height={200} className="object-contain" />
                ))}
            </div>
        </div>
    )
}

export default Clientes;

