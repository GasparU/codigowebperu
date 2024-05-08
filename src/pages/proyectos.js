import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import fondo1 from "../../public/images/projects/fondo1.png"
import fondo2 from "../../public/images/projects/fondo2.png"
import fondo3 from "../../public/images/projects/fondo3.png"
import fondo4 from "../../public/images/projects/fondo4.png"
import fondo5 from "../../public/images/projects/fondo5.png"
import fondo6 from "../../public/images/projects/fondo6.png"
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect';

const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='www.codigowebperu.com w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid
         border-blueskay bg-light shadow-2xl p-12  dark:bg-dark dark:border-greenday
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        '>
            <div className='www.codigowebperu.com absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2.5rem] bg-blueskay dark:bg-greenday 
            rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
            ' />
            <div 
                className='www.codigowebperu.com w-1/2  overflow-hidden rounded-lg lg:w-full '
            >
                <FramerImage src={img} alt={title} className='www.codigowebperu.com w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes='(max-width: 768px) 100vw, 
              (max-width: 1200px) 50vw, 
              50vw'
                />
            </div>
            <div className='www.codigowebperu.com w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6  '>
                <span className='www.codigowebperu.com text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <div  className='www.codigowebperu.com underline-offset-2'>
                    <h2 className='www.codigowebperu.com my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </div>
                <p className='www.codigowebperu.com my-2 font-medium text-dark dark:text-light sm:text-sm '>{summary}</p>
                <div className='www.codigowebperu.com mt-2 flex items-center'>
                    <Link href={link} target='_blank'
                        className='www.codigowebperu.com ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark
                        sm:px-4 sm:text-base
                        '
                    >Ver Projecto</Link>
                </div>
            </div>

        </article>
    )
}

const Project = ({ title, type, img, link, github, summary }) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-blueskay bg-light p-6 relative dark:bg-dark
         dark:border-greenday xs:p-4 '>
            <div className='absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] bg-blueskay rounded-br-3xl dark:bg-greenday
            md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
            ' />
            <div 
                className='w-full  overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </div>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                <div  className=' underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl '>{title}</h2>
                </div>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm '>{summary}</p>
                <div className='w-full mt-2 flex items-center justify-between'>
                <Link href={link} target='_blank'
                        className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark
                        sm:px-4 sm:text-base
                        '
                    >Ver Projecto</Link>
                    <Link href={github} target='_blank' className='w-8 md:w-6'>
                    </Link>

                </div>
            </div>
        </article>
    )
}

const projects = () => {

    return (
        <>
            <Head>
            <title>▷ Servicio de Diseño Web 【 Código Web Perú 】</title>
                <meta name="description" content="Servicio de diseño web en wordpress o código web puro. Desarrollo en base a código web de React.js, Next.js. Html. Más información al 907631349" />
                <meta type="title" content="▷ Servicio de Diseño Web 【 Código Web Perú 】" />
                <meta name='language' content='spanish' />
                <meta name='copyright' content='JG Diseños Web' />
                <meta name='author' content='José Luis Gaspar Unzueta' />
                <meta name='keywords' content='Pagina web Peru, Desarrollo web, Agencia de Marketing Digital, marketing digital servicio de desarrollo web, servicio de diseño web, Pagina web para empresas, diseño de paginas web, diseño web peru, diseñador de paginas web '/>
                <meta name='robots' content='index, follow, all' />
                <meta name='category' content='desarrollo web, diseño web' />
                <meta rel='icon' type="image/x-icon" href='/favicon' />
                <meta itemProp='telephone' content='907631349' />
            </Head>
            <TransitionEffect />
            <min className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
                <Layout className='pt-16'>
                    <AnimatedText text="Proyectos"
                        className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl ' />

                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 '>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="LH Consulting"
                                img={fondo1}
                                summary="Página web para una consultora contable realizada con código puro de Next.js versión 13. Web super ligera, con apenas 4.5 megas de peso total y con los mejores resultado para SEO web en base a código web puro."
                                link="https://github.com/GasparU/lh-consulting"
                                github="/"
                                type="Proyecto en Código"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="AGM Consultoría Perú"
                                img={fondo2}
                                link="https://agmconsultoriaperu.com/"
                                github="."
                                summary="Consultora de Recursos Humanos y temas laborales. Desarrollo de web con la CMS de Wordpress, thema Astra y plugins complementarios. Posicionada con Yoast SEO."
                                type="Proyecto Wordpress"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Sainc Ingenieros Constructores"
                                img={fondo3}
                                link="https://www.sainc.co/"
                                summary="Constructora con sede en Perú y Colombia. Web diseñada con wordpress, jquery y bootstrap y posicionada con Yoast SEO. Usando las librerías comoFont Awesome"
                                github="."
                                type="Proyecto Wordpress"
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Panamedical"
                                img={fondo4}
                                summary="Empresa de distruidor de productos médicos. Trabajado en Wordpress, thema de Astra y maquetador Elementor. Posicionada con Yoast SEO."
                                link="https://www.panamedical.pe/"
                                github="."
                                type="Proyecto Wordpress"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Mas Logistic's"
                                img={fondo5}
                                summary="Empresa de servicio logístico especializado  de carga y distribución y almacenaje. Proyecto diseñado con wordpress PHP, animaciones y Yoast SEO."
                                link="https://maslogistics.pe/"
                                github="."
                                type="Proyecto Wordpress"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Govi"
                                img={fondo6}
                                summary="Empresa de distribución de productos de salud y anexos. Elaborado con lenguaje de programación en PHP, librerías como jQuery, bootstrap y animate.css."
                                link="http://www.goviperu.com/"
                                github="/"
                                type="Proyecto PHP"
                            />
                        </div>
                    </div>
                </Layout>

            </min>

        </>
    )
}

export default projects