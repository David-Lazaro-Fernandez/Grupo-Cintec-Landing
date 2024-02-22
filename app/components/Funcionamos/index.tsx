"use client"
import Image from 'next/image'
import { useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const Funcionamos = () => {
    const steps = [
        {
            id: 0,
            title: 'Agenda una llamada',
            content: 'Durante la llamada solicitaremos tus datos de contacto, el tipo de proyecto que deseas solicitar y la ubicación donde será el proyecto. También puedes contactarnos por medio de Whatsapp.',
            img:'/funcionamos/Agendar.png',
        },
        {
            id: 1,
            title: 'Evaluación de tus necesidades',
            content: 'Realizamos una visita para evaluar el detalle de tus necesidades y el entorno para diseñar la mejor estrategia de instalación.',
            img:'/funcionamos/Visita.png',
        },
        {
            id: 2,
            title: 'Diseño de estrategias',
            content: 'De acuerdo a la estrategia diseñada, calculamos el costo total del proyecto y te lo presentamos desglosado. Si no estas conforme, podemos presentarte alternativas de acuerdo a tus necesidades y posibilidades',
            img:'/funcionamos/Cotizar.png',
        },
        {
            id: 3,
            title: 'Implementación de soluciones',
            content: 'En un horario que tu nos compartas, realizaremos la instalación de las soluciones presentadas en tu cotización.',
            img:'/funcionamos/Instalar.png',
        },
    ]

    const [activeImage, setActiveImage] = useState(0)

    return (
        <article className="flex flex-col justify-center items-center gap-24">
            <h1 className="text-title font-bold text-primary">Hecho para que tengas el mejor servicio posible</h1>

            <section className="flex flex-row gap-12">
                <div className="flex flex-col items-start justify-center ">
                    <h3 className="text-xl font-bold text-primary">¿Cómo funcionamos?</h3>

                    {steps.map((step, index) => {

                        return (
                            <Accordion type="single" collapsible key={index} className='max-w-96'>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger 
                                    className='w-full text-primary text-lg  min-w-96'
                                    onClick={() => setActiveImage(step.id)}
                                    >
                                        {step.title}
                                    </AccordionTrigger>
                                    <AccordionContent className='text-paper'>
                                        {step.content}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        )
                    })}
                </div>
                <div>
                    <Image src={steps[activeImage].img} alt="Funcionamos" width={400} height={500} className="max-w-sm max-h-[500]" />
                </div>
            </section>
        </article>
    )
}


export default Funcionamos;