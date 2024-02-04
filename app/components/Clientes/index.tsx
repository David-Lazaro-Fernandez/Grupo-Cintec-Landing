import Image from "next/image";
import {Banner} from "./banner";
const images = ['/HEB.png', '/CPM.png', '/Monte.png', '/EPL.png', '/NP.png']

const Clientes = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-title text-primary font-bold">Las marcas con las que trabajamos</h1>
            <Banner/>
        </div>
    )
}

export default Clientes;

