import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className='flex flex-row justify-around items-center gap-4'>
            <Image src="/logo.png" alt="Logo" width={203} height={65} />
            <ul className='flex flex-row gap-6'>
                <Item name='Nuestros Servicios' link='#' />
                <Item name='¿Cómo funcionamos?' link='#' />
                <Item name='Contáctanos' link='#' />
            </ul>
            <a
                href="https://calendly.com/grupocintec/30min?back=1&month=2024-02"
                className=' flex justify-center items-center rounded-full bg-secondary hover:bg-light transition duration-300 cursor-pointer text-white py-1 w-36 h-9'
            >
                Cotiza ahora
            </a>
        </nav>
    )
}

const Item = ({ name, link }: { name: string, link: string }) => {
    return (
        <li>
            <a
                href={link}
                className='font-normal text-xl text-primary hover:text-paper transition duration-300'
            >
                {name}
            </a>
        </li>
    )
}

export default Navbar;