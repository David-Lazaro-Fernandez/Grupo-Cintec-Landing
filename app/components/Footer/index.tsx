import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"
export default function Footer() {
    const sections = [
        {
            title: "Contáctanos",
            links: [
                { text: "Torre WeWork Lázaro Cárdenas Av Lázaro Cárdenas 225, Valle Oriente, 66260 San Pedro Garza García", href: "#chat" },
            ]
        },
        {
            title: "Atención al cliente",
            links: [
                { text: "contacto@cintec.com", href: "#chat" },
                { text: "Telefono:+5288127849", href: "#chat" },
                { text: "Whatsapp:+5234234347", href: "#chat" },
            ]
        },
        {
            title: "Brindamos soluciones en",
            links: [
                { text: "Monterrey y area metropolitana", href: "#chat" },
            ]
        },
    ];

    return (
        <footer>
            <div className="flex flex-col w-full gap-3">
                <div className="space-y-1">
                    <Image src="/logo.png" alt="Logo" width={200} height={50} />
                </div>
                <Separator className="my-4" />
                <div className="flex flex-row gap-32">
                    {sections.map((element, index)=>{
                        return(
                            <div key={index} className="flex flex-col">
                                <h1 className="text-lg font-bold text-primary">{element.title}</h1>
                                {element.links.map((link,index)=>{
                                    return <Link href={link.href} key={index} className="text-paper hover:text-primary transition duration-300">{link.text}</Link>
                                })}
                            </div>
                        )
                    })}
                </div>
                <div className="flex flex-col my-6">
                    <p className="text-sm text-muted-foreground">
                        © 2024 Todos los derechos reservados
                    </p>
                    <p className="text-sm text-muted-foreground">
                        <a href="#">Términos y condiciones</a>
                    </p>
                    <p className="text-sm text-muted-foreground">
                        <a href="#">Aviso de privacidad</a>
                    </p>
                </div>
            </div>
        </footer>

    )
}