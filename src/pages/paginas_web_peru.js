import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React from 'react'
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
import { FaChalkboard, FaCode, FaDatabase, FaLaptopCode, FaStar, FaCcVisa, FaFacebook, FaGlobe, FaCheck } from "react-icons/fa";

const Article = ({ texto }) => {
    return (
        <motion.li
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
            viewport={{ once: false }}
            className='www.codigowebperu.com relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-blueskay 
            border-r-4 border-b-4 dark:border-greenday dark:bg-dark dark:text-light
            sm:flex-col
            '>
            <span
            >
                <h3 className='www.codigowebperu.com capitalize text-xl font-semibold'>
                    {texto}
                </h3>
            </span>
            <div className='www.codigowebperu.com ml-4'>
                <FaCheck className='www.codigowebperu.com text-blueskay dark:text-greenday w-8 h-8' />
            </div>
        </motion.li>
    )
}

const ServiceLi = ({ info }) => {
    return (
        <li className='www.codigowebperu.com text-lg leading-loose'> {info} </li>
    )
}

const articles = () => {
    return (
        <>
            <Head>
                <title>▷ Página web Perú 【  Diseño de Páginas Web 】</title>
                <meta name="description" content="Diseñamos páginas web para empresas y profesionales independientes. Desarrollo wordpress o código web puro. Más información al 907631349" />
                <meta type="title" content="▷  Página web Perú 【  Diseño de Páginas Web 】" />
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
            <main className='www.codigowebperu.com w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'
            >
                <Layout className='www.codigowebperu.com pt-16 p-8'>
                    <AnimatedText text={"Nuestros Servicios "} className='www.codigowebperu.com mb-16 
                    lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl
                    ' />
                    <ul className='www.codigowebperu.com list-disc list-inside leading-loose grid grid-cols-3 2xl:gap-6 gap-6 lg:gap-8 lg:grid-cols-2 md:grid-cols-1 
                    md:gap-y-16 justify-items-center'>
                        <div className='www.codigowebperu.com relative col-span-1 mt-8 max-w-md p-4 bg-light border border-solid
                         border-blueskay rounded-2xl dark:bg-dark dark:border-greenday '>
                            <div className='www.codigowebperu.com absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] bg-blueskay dark:bg-greenday rounded-br-3xl ' />
                            <h2 className='www.codigowebperu.com text-2xl leading-loose font-bold text-blueskay dark:text-greenday text-center'>Plan Independiente</h2>
                            <ServiceLi info={'1 a 3 Páginas Internas con 4 a 6 secciones'} />
                            <ServiceLi info={'01 año de Dominio.Com + Hosting'} />
                            <ServiceLi info={'Whatsapp y Redes Sociales'} />
                            <ServiceLi info={'Optimización para SEO Básico'} />
                            <ServiceLi info={'Diseño UX y personalizado'} />
                            <ServiceLi info={'Diseño Adaptable a diferentes equipos'} />
                            <ServiceLi info={'Optimizado para carga rápida'} />
                            <ServiceLi info={'Correos corporativos'} />
                            <ServiceLi info={'Certificado de Seguridad'} />
                            <ServiceLi info={'Panel Administrable'} />
                            <ServiceLi info={'Instalación, confi guración y capacitación'} />

                        </div>
                        <div className='www.codigowebperu.com relative col-span-1 mt-8 max-w-md p-4 bg-light border border-solid
                         border-blueskay rounded-2xl dark:bg-dark dark:border-greenday'>
                            <div className='www.codigowebperu.com absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] bg-blueskay dark:bg-greenday rounded-br-3xl ' />
                            <h2 className='www.codigowebperu.com text-2xl leading-loose font-bold text-blueskay dark:text-greenday text-center'>Plan Profesional</h2>
                            <ServiceLi info={'4 a 5 Páginas Internas con 4 a 6 secciones'} />
                            <ServiceLi info={'01 año de Dominio.Com + Hosting'} />
                            <ServiceLi info={'Whatsapp y Redes Sociale'} />
                            <ServiceLi info={'Optimización para SEO'} />
                            <ServiceLi info={'Correos corporativos'} />
                            <ServiceLi info={'Diseño UX y personalizado'} />
                            <ServiceLi info={'Diseño Adaptable a diferentes equipos'} />
                            <ServiceLi info={'Optimizado para carga rápida'} />
                            <ServiceLi info={'Certificado de Seguridad'} />
                            <ServiceLi info={'Instalación, confi guración y capacitación'} />
                            <ServiceLi info={'Panel Administrable'} />
                            <ServiceLi info={'Google Analytics'} />
                        </div>
                        <div className='www.codigowebperu.com relative col-span-1 mt-8 max-w-md p-4 bg-light border border-solid
                         border-blueskay rounded-2xl dark:bg-dark dark:border-greenday'>
                            <div className='www.codigowebperu.com absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] bg-blueskay dark:bg-greenday rounded-br-3xl ' />
                            <h2 className='www.codigowebperu.com text-2xl leading-loose max-w-lg font-bold text-blueskay dark:text-greenday text-center'>Plan Mype (Ecommerce)</h2>
                            <ServiceLi info={'6 a Más Páginas Internas'} />
                            <ServiceLi info={'Google Analytics'} />
                            <ServiceLi info={'Página de Productos por categoría'} />
                            <ServiceLi info={'Búsqueda por nombre de producto'} />
                            <ServiceLi info={'Filtros por categoría'} />
                            <ServiceLi info={'Filtros por precio'} />
                            <ServiceLi info={'Página de detalle de producto'} />
                            <ServiceLi info={'01 año de Dominio.Com + Hosting'} />
                            <ServiceLi info={'Whatsapp y Redes Sociale'} />
                            <ServiceLi info={'Optimización para SEO'} />
                            <ServiceLi info={'Correos corporativos'} />
                            <ServiceLi info={'Pagos en Linea Yape, Bancos  (Izipay)'} />
                            <ServiceLi info={'Diseño UX y personalizado'} />
                            <ServiceLi info={'Diseño Adaptable a diferentes equipos'} />
                            <ServiceLi info={'Optimizado para carga rápida'} />
                            <ServiceLi info={'Certificado de Seguridad'} />
                            <ServiceLi info={'Panel Administrable'} />
                            <ServiceLi info={'Instalación, configuración y capacitación'} />
                            <ServiceLi info={'Pasarela de Pago'} />
                            <ServiceLi info={'Google AdWords'} />
                            <ServiceLi info={'Google Mi Negocio'} />
                            <ServiceLi info={'E.Commerce'} />
                        </div>
                        <div className='www.codigowebperu.com relative col-span-1 mt-8 max-w-md p-4 bg-light border border-solid
                         border-blueskay rounded-2xl dark:bg-dark dark:border-greenday'>
                            <div className='www.codigowebperu.com absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] bg-blueskay dark:bg-greenday rounded-br-3xl ' />
                            <h2 className='www.codigowebperu.com text-2xl leading-loose max-w-lg font-bold text-blueskay dark:text-greenday text-center'>Aula Virtual (Academia Online)</h2>
                            <ServiceLi info={'Creación de Subdominio'} />
                            <ServiceLi info={'Instalación Wordpress Academia'} />
                            <ServiceLi info={'Configuración y capacitación'} />
                            <ServiceLi info={'Pasarela de Pago'} />
                            <ServiceLi info={'Configuración de LMS'} />
                            <ServiceLi info={'Creación de lecciones (Youtube)'} />
                            <ServiceLi info={'Creación de lecciones (Vimeo)'} />
                            <ServiceLi info={'Creación de nuevas Lecciones'} />
                            <ServiceLi info={'Creación de módulos o secciones'} />
                            <ServiceLi info={'Adjuntar material para las lecciones'} />
                            <ServiceLi info={'Creación de Nuevos Cursos'} />
                            <ServiceLi info={'Creación de Imágenes por Curso'} />
                            <ServiceLi info={'Adjunto Información del Curso'} />
                            <ServiceLi info={'Creación de Temario de Curso'} />
                            <ServiceLi info={'Creación de Cursos Secundarios'} />
                            <ServiceLi info={'Creación de Página Principal y Secundaria'} />
                            <ServiceLi info={'Diseño Adaptable a diferentes equipos'} />
                            <ServiceLi info={'Optimizado para carga rápida'} />
                            <ServiceLi info={'Certificado de Seguridad'} />
                            <ServiceLi info={'Panel Administrable'} />
                        </div>
                        <div className='www.codigowebperu.com relative col-span-1 mt-8 max-w-md p-4 bg-light border border-solid
                         border-blueskay rounded-2xl dark:bg-dark dark:border-greenday'>
                            <div className='www.codigowebperu.com absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] bg-blueskay dark:bg-greenday rounded-br-3xl ' />
                            <h2 className='www.codigowebperu.com text-2xl leading-loose max-w-lg font-bold text-blueskay dark:text-greenday text-center'>Plan Código</h2>
                            <ServiceLi info={'Páginas Internas a pedido'} />
                            <ServiceLi info={'Hecho con Código Puro (No Wordpress)'} />
                            <ServiceLi info={'01 año de Dominio.Com + Hosting'} />
                            <ServiceLi info={'Diseño de FrontEnd con Estilos Únicos'} />
                            <ServiceLi info={'Web Informativa o Ecommerce'} />
                            <ServiceLi info={'Whatsapp y Redes Sociales'} />
                            <ServiceLi info={'Optimización SEO con Metadata Pura'} />
                            <ServiceLi info={'Web Enriquesida con Datos Estructurados'} />
                            <ServiceLi info={'Validación de Rendimiento, Carga y Seo'} />
                            <ServiceLi info={'Optimizado para Carga Ultra Rápida'} />
                            <ServiceLi info={'Tu Nombre Como Parte del Código'} />
                            <ServiceLi info={'Sin actualizaciones riesgosas'} />
                            <ServiceLi info={'Sin Links Peligrosos ni Ajenas'} />
                            <ServiceLi info={'Correos Corporativos'} />
                            <ServiceLi info={'Diseño UX y Personalizado'} />
                            <ServiceLi info={'Diseño Adaptable a Diferentes Equipos'} />
                            <ServiceLi info={'Creación de Base de Datos'} />
                            <ServiceLi info={'Uso de Lógica de Programación BackEnd'} />
                            <ServiceLi info={'Código con respaldo en Github de Empresa'} />
                            <ServiceLi info={'Certificado de Seguridad'} />
                            <ServiceLi info={'Google AdWords'} />
                            <ServiceLi info={'Google Mi Negocio'} />
                        </div>
                    </ul>
                    <div className="www.codigowebperu.com flex flex-wrap gap-8 sx:hidden justify-center 2xl:flex-wrap mt-20">
                        <div className='www.codigowebperu.com w-60 border dark:border-4 border-solid border-blueskay dark:border-greenday py-4 min-h-min
                         bg-white rounded-2xl hover:scale-110 duration-300'>
                            <FaGlobe className='www.codigowebperu.com w-20 h-20 text-blueskay m-auto pb-4 dark:text-greenday' />
                            <div className='www.codigowebperu.com mx-6'>
                                <h2 className='www.codigowebperu.com flex justify-center text-2xl text-center h-20 items-center dark:text-black'>Dominio Web</h2>
                                <p className='www.codigowebperu.com flex justify-center m-auto w-40 text-center dark:text-black'>Registro de Dominio web gratis el primer año</p>
                            </div>
                        </div>
                        <div className='www.codigowebperu.com w-60 border dark:border-4 border-solid border-blueskay dark:border-greenday py-4 min-h-min
                         bg-white rounded-2xl hover:scale-110 duration-300'>
                            <FaDatabase className='www.codigowebperu.com w-20 h-20 text-blueskay m-auto pb-4 dark:text-greenday' />
                            <div className='www.codigowebperu.com mx-6'>
                                <h2 className='www.codigowebperu.com flex justify-center text-2xl text-center h-20 items-center dark:text-black'>Hosting</h2>
                                <p className='www.codigowebperu.com flex justify-center m-auto w-40 text-center dark:text-black'>Hosting SSD gratuito el primer año</p>
                            </div>
                        </div>
                        <div className='www.codigowebperu.com w-60 border dark:border-4 border-solid border-blueskay dark:border-greenday py-4 min-h-min
                         bg-white rounded-2xl hover:scale-110 duration-300'>
                            <FaCode className='www.codigowebperu.com w-20 h-20 text-blueskay m-auto pb-4 dark:text-greenday' />
                            <div className='www.codigowebperu.com mx-6'>
                                <h2 className='www.codigowebperu.com flex justify-center text-2xl text-center h-20 items-center dark:text-black'>Web con Código</h2>
                                <p className='www.codigowebperu.com flex justify-center m-auto w-40 text-center dark:text-black'>Tu Página informativa hecha con código web puro, no wordpress!</p>
                            </div>
                        </div>
                        <div className='www.codigowebperu.com w-60 border dark:border-4 border-solid border-blueskay dark:border-greenday py-4 min-h-min
                         bg-white rounded-2xl hover:scale-110 duration-300'>
                            <FaChalkboard className='www.codigowebperu.com w-20 h-20 text-blueskay m-auto pb-4 dark:text-greenday' />
                            <div className='www.codigowebperu.com mx-6'>
                                <h2 className='www.codigowebperu.com flex justify-center text-2xl text-center h-20 items-center dark:text-black'>Responsive</h2>
                                <p className='www.codigowebperu.com flex justify-center m-auto w-40 text-center dark:text-black'>Diseño adaptado a Pc, Tablet o Celulares</p>
                            </div>
                        </div>
                        <div className='www.codigowebperu.com w-60 border dark:border-4 border-solid border-blueskay dark:border-greenday py-4 min-h-min
                         bg-white rounded-2xl hover:scale-110 duration-300'>
                            <FaLaptopCode className='www.codigowebperu.com w-20 h-20 text-blueskay m-auto pb-4 dark:text-greenday' />
                            <div className='www.codigowebperu.com mx-6'>
                                <h2 className='www.codigowebperu.com flex justify-center text-2xl text-center h-20 items-center dark:text-black'>Posicionamiento Seo</h2>
                                <p className='www.codigowebperu.com flex justify-center m-auto w-40 text-center dark:text-black'>Rendimiento SEO garantizado en PageSpeed Insigth y GTmetrix</p>
                            </div>
                        </div>
                        <div className='www.codigowebperu.com w-60 border dark:border-4 border-solid border-blueskay dark:border-greenday py-4 min-h-min
                         bg-white rounded-2xl hover:scale-110 duration-300'>
                            <FaStar className='www.codigowebperu.com w-20 h-20 text-blueskay m-auto pb-4 dark:text-greenday' />
                            <div className='www.codigowebperu.com mx-6'>
                                <h2 className='www.codigowebperu.com flex justify-center text-2xl text-center h-20 items-center dark:text-black'>Valoraciones</h2>
                                <p className='www.codigowebperu.com flex justify-center m-auto w-40 text-center dark:text-black'>Aseguramos valorizaciones positivas rápidas</p>
                            </div>
                        </div>
                        <div className='www.codigowebperu.com w-60 border dark:border-4 border-solid border-blueskay dark:border-greenday py-4 min-h-min
                         bg-white rounded-2xl hover:scale-110 duration-300'>
                            <FaCcVisa className='www.codigowebperu.com w-20 h-20 text-blueskay m-auto pb-4 dark:text-greenday' />
                            <div className='www.codigowebperu.com mx-6'>
                                <h2 className='www.codigowebperu.com flex justify-center text-2xl text-center h-20 items-center dark:text-black'>Pagos</h2>
                                <p className='www.codigowebperu.com flex justify-center m-auto w-40 text-center dark:text-black'>Pasarela de pagos por Bancos o Apps como Yape o Plin </p>
                            </div>
                        </div>
                        <div className='www.codigowebperu.com w-60 border dark:border-4 border-solid border-blueskay dark:border-greenday py-4 min-h-min
                         bg-white rounded-2xl hover:scale-110 duration-300'>
                            <FaFacebook className='www.codigowebperu.com w-20 h-20 text-blueskay m-auto pb-4 dark:text-greenday' />
                            <div className='www.codigowebperu.com mx-6'>
                                <h2 className='www.codigowebperu.com flex justify-center text-2xl text-center h-20 items-center dark:text-black'>Redes Sociales</h2>
                                <p className='www.codigowebperu.com flex justify-center m-auto w-40 text-center dark:text-black'>Integración con tus Redes Sociales</p>
                            </div>
                        </div>
                    </div>
                    <h2 className='www.codigowebperu.com www.codigowebperu.com font-bold text-4xl w-full text-center my-16 mt-32 text-blueskay dark:text-greenday'>Ventajas de Nuestros Servicios</h2>
                    <ul>
                        <Article texto="Realizamos un Diseño profesional y personalizado para cada cliente." />
                        <Article texto="No usamos FrontPage o Expression Web." />
                        <Article texto="Las páginas web informativas son hechas con lenguajes de programación React, Next, JavaScript y otras." />
                        <Article texto="Manejo del SEO profesional." />
                        <Article texto="Excelente experiencia de usuario." />
                        <Article texto="Garantizamos valoraciones positivas a tu web en pocos días." />
                        <Article texto="Te damos soporte y copias de seguridad (backup) de tu web en un repositorio seguro y privado." />
                        <Article texto="Te realizamos auditoría de la web con Wappalyzer, pagespeed insights y antes de entregartelo para tu seguridad y conformidad." />
                        <Article texto="Incertamos metadata y datos estructurados en tu web." />
                        <Article texto="Fácil integración con Google Ads para campañas especiales por productos o servicios." />
                        <Article texto="Menor riesgo de hackeo por su alto nivel de seguridad." />
                    </ul>
                </Layout>
            </main>
        </>
    )
}

export default articles