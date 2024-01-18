import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import LiIcon from './LiIcon'

const Details = ({ position, company,  work }) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
            
                <LiIcon reference={ref} />
                <motion.div
                    initial={{ y: 50 }}
                    whileView={{ y: 0 }}
                    transition={{ duration: 0.5, type: "spring" }}
                >
                    <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>

                        <a className='text-primary capitalize dark:text-primaryDark'
                        >{company}
                        </a>&nbsp;
                        {position}
                    </h3>
                    <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                        <p className='font-medium w-full md:text-sm'>
                            {work}
                        </p>
                    </span>
                </motion.div>
           
        </li>
    )
}

const Experience = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 text-blueskay dark:text-greenday'>Cómo Trabajamos</h2>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                {/* Este div es para la animación de la linea que recorre las experiencias. */}
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                    md:w-[2px] md:left-[30px] xs:left-[20px]
                    ' />
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2 '>
                    <Details
                        company="Etapa 1"
                        position={"Firma del Contrato de Servicio"}
                        work={`Durante esta etapa se establecen los derechos y obligaciones de las partes, qué incluye 
                        y que no incluye en el servicio, funcionalidades, precio y formas de pago, cronograma de entregas del desarrollo, vigencia del contrato y
                        la resolución de la misma y soporte web.`}
                    />
                    <Details
                        company="Etapa 2"
                        position={"Presentación de Propuestas de Diseños web"} 
                        work={`Durante esta etapa, se revisarán diferentes modelos de diseño web informativa a desarrollar, estructura de la información a presentar,
                        páginas que la integrarían.`}
                    />
                    <Details
                        company="Etapa 3"
                        position={"Aprobación de Diseño Web a Desarrollar"} 
                        work={`Una vez revisada la propuesta, se inicia a trabajar la estructura de la página web en código de programación web o wordpress según sea el 
                        contrato realizado. En esta etapa, se realizan los ajustes preliminares del desarrollo, instalación de librerías web o plugins.`}                     
                    />
                    <Details
                        company="Etapa 4"
                        position={"Recepción de información de servicios a presentar, imágenes y/o precios "} 
                        work={`En esta etapa el cliente debe enviar toda la información necesaria para poder realizar la página web como la presentación, resumen, política de la
                        empresa, nombres del equipo de trabajo, tipos de servicio, precios, direcciones, imágenes, logos, colores corporativos, entre otras cosas.`}            
                    />
                    <Details
                        company="Etapa 5"
                        position={"Subida del diseño pre-acabado a la web para visualizar los avances finales "} 
                        work={`Se inicia con la subida de información, imágenes y datos necesarios para ir llenando la estructura web realizada en la Etapa 2. Se hacen 
                        las pruebas de renimiento SEO preliminares`} 
                    />
                    <Details
                        company="Etapa 6"
                        position={"Validación de las herramientas SEO para el posicionamiento y Aprobación Final del Servicio"} 
                        work={`Durante esta etapa se finaliza con la codificación web, rendimiento y auditoría SEO, base de datos, repositorio, vistas finales
                        en la nube y aprobación final de la página web.`}
                        
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience