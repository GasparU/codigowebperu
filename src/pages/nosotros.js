import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import profilePic from "../../public/images/profile/Jose_Gaspar.webp";
import Image from 'next/image';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null)

    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed()
            }
        })
    }, [springValue, value])



    return <span ref={ref}></span>
}

const about = () => {
    return (
        <>
            <Head>
                <title>▷ Página web Perú 【  Servicios Web 】</title>
                <meta name="description" content="Diseñamos páginas web para profesionales independientes y empresas de todo tamaño. Desarrollo en wordpress o código web puro. Más información al 907631349." />
                <meta type="title" content="▷ Página web Para Empresas 【  Desarrollo web Perú 】" />
                <meta name='language' content='spanish' />
                <meta name='copyright' content='JG Diseños Web' />
                <meta name='author' content='José Luis Gaspar Unzueta' />
                <meta name='keywords' content='Pagina web Peru, Desarrollo web, Agencia de Marketing Digital, marketing digital servicio de desarrollo web, servicio de diseño web, Pagina web para empresas, diseño de paginas web, diseño web peru, diseñador de paginas web '/>
                <meta name='robots' content='index, follow, all' />
                <meta name='category' content='desarrollo web, diseño web' />
                <meta rel='icon' type="image/x-icon" href='/favicon.png' />
                <meta itemProp='telephone' content='907631349' />
            </Head>
            <TransitionEffect />
            <main className='www.codigowebperu.com flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='www.codigowebperu.com pt-16'>
                    <AnimatedText text={"¡Pasión por el Diseño Web!"} className='www.codigowebperu.com mb-16 lg:!text-7xl sm:!text-6xl sx:!text-4xl sm:mb-8' />
                    <div className='www.codigowebperu.com grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div className='www.codigowebperu.com col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                            <h2 className='www.codigowebperu.com mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Sobre Nosotros</h2>
                            <p className='www.codigowebperu.com font-medium '>- Somos una <b>Agencia de Marketing Ditital para el desarrollo de páginas web para empresas</b> y profesionales independientes.
                                Realizamos páginas web con <b>diseño UX/UI</b> para páginas informativas o tiendas de productos online con funcionalidad las 24/7.
                                Tenemos dos tipos de productos:
                            </p>
                            <p className='www.codigowebperu.com my-4 font-medium '>
                                <b>1ro.- Servicio de Desarrollo Web</b> con diseño amigable, rápida de implementar, administrable y manejo de SEO con wordpress,
                                la CMS más usada del mundo.
                            </p>
                            <p className='www.codigowebperu.com font-medium  '>
                                <b> 2do. Servicio de Diseño Web</b> personalizado, en base a código web con lenguajes de programación como React.js y Next.js en el FrontEnd.
                            </p>
                        </div>
                        <div className='www.codigowebperu.com col-span-3 relative h-max rounded-2xl border-2 border-solid border-blueskay bg-light p-8 dark:bg-dark dark:border-greenday xl:col-span-4 md:order-1 md:col-span-8'>

                            <div className='www.codigowebperu.com absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-blueskay dark:bg-greenday' />
                            <Image src={profilePic} alt="Jose Gaspar" className="www.codigowebperu.com full h-auto rounded-2xl"
                                priority
                                sizes='(max-width: 768px) 100vw, 
                            (max-width: 1200px) 50vw, 
                            33vw'
                            />
                        </div>
                        <div className='www.codigowebperu.com col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                            <div className='www.codigowebperu.com flex flex-col items-end justify-center xl:items-center'>
                                <span className='www.codigowebperu.com inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={30} />+
                                </span>
                                <h2 className='www.codigowebperu.com text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Proyectos Completados</h2>
                            </div>
                            <div className='www.codigowebperu.com flex flex-col items-end justify-center xl:items-center '>
                                <span className='www.codigowebperu.com inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={20} />+
                                </span>
                                <h2 className='www.codigowebperu.com text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Clientes Satisfechos</h2>
                            </div>
                            <div className='www.codigowebperu.com flex flex-col items-end justify-center xl:items-center '>
                                <span className='www.codigowebperu.com inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={3} />+
                                </span>
                                <h2 className='www.codigowebperu.com text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Años de Experiencia</h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Experience />
                    {/* <Education/> */}
                </Layout>
            </main>
        </>
    )
}

export default about