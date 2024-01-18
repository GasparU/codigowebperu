import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React from 'react'
import { motion} from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
import { FaChalkboard, FaCode, FaDatabase, FaLaptopCode, FaStar, FaCcVisa, FaFacebook, FaGlobe, FaCheck } from "react-icons/fa";

const Article = ({ date, texto }) => {
    return (
        <motion.li
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
            viewport={{ once: false }}
            className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-blueskay 
            border-r-4 border-b-4 dark:border-greenday dark:bg-dark dark:text-light
            sm:flex-col
            '>
            <span
        >
            <h3 className='capitalize text-xl font-semibold'>
                {texto}
            </h3>
        </span>
        <div className='ml-4'>
            <FaCheck className='text-blueskay dark:text-greenday w-8 h-8'/>
        </div>
        </motion.li>
    )
}

const articles = () => {
    return (
        <>
            <Head>
                <title>CodeBucks | Articles Page</title>
                <meta name='description' content="Agregar descripción de SEO de About" />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'
            >
                <Layout className='pt-16 p-8'>
                    <AnimatedText text={"Nuestros Servicios "} className='mb-16 
                    lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl
                    ' />
                    <ul className='list-disc list-inside leading-loose grid grid-cols-3 2xl:gap-6 gap-6 lg:gap-8 lg:grid-cols-2 md:grid-cols-1 
                    md:gap-y-16 justify-items-center'>
                        <div className='relative col-span-1 mt-8 max-w-md p-4 bg-light border border-solid
                         border-blueskay rounded-2xl dark:bg-dark dark:border-greenday '>
                            <div className='absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] bg-blueskay dark:bg-greenday rounded-br-3xl ' />
                            <h2 className='text-2xl leading-loose font-bold text-blueskay dark:text-greenday text-center'>Plan Independiente</h2>
                            <li className='text-lg leading-loose '>1 a 3 Páginas Internas con 4 a 6 secciones</li>
                            <li className='text-lg leading-loose'>01 año de Dominio.Com + Hosting</li>
                            <li className='text-lg leading-loose'>Whatsapp y Redes Sociale</li>
                            <li className='text-lg leading-loose'>Optimización para SEO Básico</li>
                            <li className='text-lg leading-loose'>Diseño UX y personalizado</li>
                            <li className='text-lg leading-loose'>Diseño Adaptable a diferentes equipos</li>
                            <li className='text-lg leading-loose'>Optimizado para carga rápida</li>
                            <li className='text-lg leading-loose'>Correos corporativos</li>
                            <li className='text-lg leading-loose'>Certificado de Seguridad</li>
                            <li className='text-lg leading-loose'>Panel Administrable</li>
                            <li className='text-lg leading-loose'>Instalación, confi guración y capacitación</li>
                        </div>
                        <div className='relative col-span-1 mt-8 max-w-md p-4 bg-light border border-solid
                         border-blueskay rounded-2xl dark:bg-dark dark:border-greenday'>
                            <div className='absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] bg-blueskay dark:bg-greenday rounded-br-3xl ' />
                            <h2 className='text-2xl leading-loose font-bold text-blueskay dark:text-greenday text-center'>Plan Profesional</h2>
                            <li className='text-lg leading-loose'>4 a 5 Páginas Internas con 4 a 6 secciones</li>
                            <li className='text-lg leading-loose'>01 año de Dominio.Com + Hosting</li>
                            <li className='text-lg leading-loose'>Whatsapp y Redes Sociale</li>
                            <li className='text-lg leading-loose'>Optimización para SEO</li>
                            <li className='text-lg leading-loose'>Correos corporativos</li>
                            <li className='text-lg leading-loose'>Diseño UX y personalizado</li>
                            <li className='text-lg leading-loose'>Diseño Adaptable a diferentes equipos</li>
                            <li className='text-lg leading-loose'>Optimizado para carga rápida</li>
                            <li className='text-lg leading-loose'>Certificado de Seguridad</li>
                            <li className='text-lg leading-loose'>Panel Administrable</li>
                            <li className='text-lg leading-loose'>Instalación, confi guración y capacitación</li>
                            <li className='text-lg leading-loose'>Google Analytics</li>
                        </div>
                        <div className='relative col-span-1 mt-8 max-w-md p-4 bg-light border border-solid
                         border-blueskay rounded-2xl dark:bg-dark dark:border-greenday'>
                            <div className='absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] bg-blueskay dark:bg-greenday rounded-br-3xl ' />
                            <h2 className='text-2xl leading-loose max-w-lg font-bold text-blueskay dark:text-greenday text-center'>Plan Mype (Ecommerce)</h2>
                            <li className='text-lg leading-loose'>6 a Más Páginas Internas</li>
                            <li className='text-lg leading-loose'>Página de Productos por categoría</li>
                            <li className='text-lg leading-loose'>Búsqueda por nombre de producto</li>
                            <li className='text-lg leading-loose'>Filtros por categoría</li>
                            <li className='text-lg leading-loose'>Filtros por precio</li>
                            <li className='text-lg leading-loose'>Página de detalle de producto</li>
                            <li className='text-lg leading-loose'>01 año de Dominio.Com + Hosting</li>
                            <li className='text-lg leading-loose'>Whatsapp y Redes Sociale</li>
                            <li className='text-lg leading-loose'>Optimización para SEO</li>
                            <li className='text-lg leading-loose'>Correos corporativos</li>
                            <li className='text-lg leading-loose'>Pagos en Linea Yape, Bancos  (Izipay)</li>
                            <li className='text-lg leading-loose'>Diseño UX y personalizado</li>
                            <li className='text-lg leading-loose'>Diseño Adaptable a diferentes equipos</li>
                            <li className='text-lg leading-loose'>Optimizado para carga rápida</li>
                            <li className='text-lg leading-loose'>Certificado de Seguridad</li>
                            <li className='text-lg leading-loose'>Panel Administrable</li>
                            <li className='text-lg leading-loose'>Instalación, configuración y capacitación</li>
                            <li className='text-lg leading-loose'>Google Analytics</li>
                            <li className='text-lg leading-loose'>Pasarela de Pago</li>
                            <li className='text-lg leading-loose'>Google AdWords</li>
                            <li className='text-lg leading-loose'>Google Mi Negocio</li>
                            <li className='text-lg leading-loose'>E.Commerce</li>
                        </div>
                        <div className='relative col-span-1 mt-8 max-w-md p-4 bg-light border border-solid
                         border-blueskay rounded-2xl dark:bg-dark dark:border-greenday'>
                            <div className='absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] bg-blueskay dark:bg-greenday rounded-br-3xl ' />
                            <h2 className='text-2xl leading-loose max-w-lg font-bold text-blueskay dark:text-greenday text-center'>Aula Virtual (Academia Online)</h2>
                            <li className='text-lg leading-loose'>Creación de Subdominio</li>
                            <li className='text-lg leading-loose'>Instalación Wordpress Academia</li>
                            <li className='text-lg leading-loose'>Configuración y capacitación</li>
                            <li className='text-lg leading-loose'>Pasarela de Pago</li>
                            <li className='text-lg leading-loose'>Configuración de LMS</li>
                            <li className='text-lg leading-loose'>Creación de lecciones (Youtube)</li>
                            <li className='text-lg leading-loose'>Creación de lecciones (Vimeo)</li>
                            <li className='text-lg leading-loose'>Creación de nuevas Lecciones</li>
                            <li className='text-lg leading-loose'>Creación de módulos o secciones</li>
                            <li className='text-lg leading-loose'>Adjuntar material para las lecciones</li>
                            <li className='text-lg leading-loose'>Creación de Nuevos Cursos</li>
                            <li className='text-lg leading-loose'>Creación de Imágenes por Curso</li>
                            <li className='text-lg leading-loose'>Adjunto Información del Curso</li>
                            <li className='text-lg leading-loose'>Creación de Temario de Curso</li>
                            <li className='text-lg leading-loose'>Creación de Cursos Secundarios</li>
                            <li className='text-lg leading-loose'>Creación de Página Principal y Secundaria</li>
                            <li className='text-lg leading-loose'>Diseño Adaptable a diferentes equipos</li>
                            <li className='text-lg leading-loose'>Optimizado para carga rápida</li>
                            <li className='text-lg leading-loose'>Certificado de Seguridad</li>
                            <li className='text-lg leading-loose'>Panel Administrable</li>
                        </div>
                        <div className=' relative col-span-1 mt-8 max-w-md p-4 bg-light border border-solid
                         border-blueskay rounded-2xl dark:bg-dark dark:border-greenday'>
                            <div className='absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] bg-blueskay dark:bg-greenday rounded-br-3xl ' />
                            <h2 className='text-2xl leading-loose max-w-lg font-bold text-blueskay dark:text-greenday text-center'>Plan Código</h2>
                            <li className='text-lg leading-loose'>Páginas Internas a pedido</li>
                            <li className='text-lg leading-loose'>Hecho con Código Puro (No Wordpress)</li>
                            <li className='text-lg leading-loose'>01 año de Dominio.Com + Hosting</li>
                            <li className='text-lg leading-loose'>Diseño de FrontEnd con Estilos Únicos</li>
                            <li className='text-lg leading-loose'>Web Informativa o Ecommerce</li>
                            <li className='text-lg leading-loose'>Whatsapp y Redes Sociales</li>
                            <li className='text-lg leading-loose'>Optimización SEO con Metadata Pura</li>
                            <li className='text-lg leading-loose'>Web Enriquesida con Datos Estructurados</li>
                            <li className='text-lg leading-loose'>Validación de Rendimiento, Carga y Seo</li>
                            <li className='text-lg leading-loose'>Optimizado para Carga Ultra Rápida</li>
                            <li className='text-lg leading-loose'>Tu Nombre Como Parte del Código</li>
                            <li className='text-lg leading-loose'>Sin actualizaciones riesgosas</li>
                            <li className='text-lg leading-loose'>Sin Links Peligrosos ni Ajenas</li>
                            <li className='text-lg leading-loose'>Correos Corporativos</li>
                            <li className='text-lg leading-loose'>Diseño UX y Personalizado</li>
                            <li className='text-lg leading-loose'>Diseño Adaptable a Diferentes Equipos</li>
                            <li className='text-lg leading-loose'>Creación de Base de Datos</li>
                            <li className='text-lg leading-loose'>Uso de Lógica de Programación BackEnd</li>
                            <li className='text-lg leading-loose'>Código con respaldo en Github de Empresa</li>
                            <li className='text-lg leading-loose'>Certificado de Seguridad</li>
                            <li className='text-lg leading-loose'>Google AdWords</li>
                            <li className='text-lg leading-loose'>Google Mi Negocio</li>
                        </div>
                    </ul>
                    <div className="flex flex-wrap gap-8 sx:hidden justify-center 2xl:flex-wrap mt-20">
                        <div className='w-60 border dark:border-4 border-solid border-blueskay dark:border-greenday py-4 min-h-min
                         bg-white rounded-2xl hover:scale-110 duration-300'>
                            <FaGlobe className='w-20 h-20 text-blueskay m-auto pb-4 dark:text-greenday' />
                            <div className='mx-6'>
                            <h2 className='flex justify-center text-2xl text-center h-20 items-center dark:text-black'>Dominio Web</h2>
                            <p className='flex justify-center m-auto w-40 text-center dark:text-black'>Registro de Dominio web gratis el primer año</p>
                            </div>
                        </div>
                        <div className='w-60 border dark:border-4 border-solid border-blueskay dark:border-greenday py-4 min-h-min
                         bg-white rounded-2xl hover:scale-110 duration-300'>
                            <FaDatabase className='w-20 h-20 text-blueskay m-auto pb-4 dark:text-greenday'/>
                            <div className='mx-6'>
                            <h2 className='flex justify-center text-2xl text-center h-20 items-center dark:text-black'>Hosting</h2>
                            <p className='flex justify-center m-auto w-40 text-center dark:text-black'>Hosting SSD gratuito el primer año</p>
                            </div>
                        </div>
                        <div className='w-60 border dark:border-4 border-solid border-blueskay dark:border-greenday py-4 min-h-min
                         bg-white rounded-2xl hover:scale-110 duration-300'>
                            <FaCode className='w-20 h-20 text-blueskay m-auto pb-4 dark:text-greenday'/>
                            <div className='mx-6'>
                            <h2 className='flex justify-center text-2xl text-center h-20 items-center dark:text-black'>Web con Código</h2>
                            <p className='flex justify-center m-auto w-40 text-center dark:text-black'>Tu Página informativa hecha con código web puro, no wordpress!</p>
                            </div>
                        </div>
                        <div className='w-60 border dark:border-4 border-solid border-blueskay dark:border-greenday py-4 min-h-min
                         bg-white rounded-2xl hover:scale-110 duration-300'>
                            <FaChalkboard className='w-20 h-20 text-blueskay m-auto pb-4 dark:text-greenday'/>
                            <div className='mx-6'>
                            <h2 className='flex justify-center text-2xl text-center h-20 items-center dark:text-black'>Responsive</h2>
                            <p className='flex justify-center m-auto w-40 text-center dark:text-black'>Diseño adaptado a Pc, Tablet o Celulares</p>
                            </div>
                        </div>
                        <div className='w-60 border dark:border-4 border-solid border-blueskay dark:border-greenday py-4 min-h-min
                         bg-white rounded-2xl hover:scale-110 duration-300'>
                            <FaLaptopCode className='w-20 h-20 text-blueskay m-auto pb-4 dark:text-greenday'/>
                            <div className='mx-6'>
                            <h2 className='flex justify-center text-2xl text-center h-20 items-center dark:text-black'>Posicionamiento Seo</h2>
                            <p className='flex justify-center m-auto w-40 text-center dark:text-black'>Rendimiento SEO garantizado en PageSpeed Insigth y GTmetrix</p>
                            </div>
                        </div>
                        <div className='w-60 border dark:border-4 border-solid border-blueskay dark:border-greenday py-4 min-h-min
                         bg-white rounded-2xl hover:scale-110 duration-300'>
                            <FaStar className='w-20 h-20 text-blueskay m-auto pb-4 dark:text-greenday'/>
                            <div className='mx-6'>
                            <h2 className='flex justify-center text-2xl text-center h-20 items-center dark:text-black'>Valoraciones</h2>
                            <p className='flex justify-center m-auto w-40 text-center dark:text-black'>Aseguramos valorizaciones positivas rápidas</p>
                            </div>
                        </div>
                        <div className='w-60 border dark:border-4 border-solid border-blueskay dark:border-greenday py-4 min-h-min
                         bg-white rounded-2xl hover:scale-110 duration-300'>
                            <FaCcVisa className='w-20 h-20 text-blueskay m-auto pb-4 dark:text-greenday'/>
                            <div className='mx-6'>
                            <h2 className='flex justify-center text-2xl text-center h-20 items-center dark:text-black'>Pagos</h2>
                            <p className='flex justify-center m-auto w-40 text-center dark:text-black'>Pasarela de pagos por Bancos o Apps como Yape o Plin </p>
                            </div>
                        </div>
                        <div className='w-60 border dark:border-4 border-solid border-blueskay dark:border-greenday py-4 min-h-min
                         bg-white rounded-2xl hover:scale-110 duration-300'>
                            <FaFacebook className='w-20 h-20 text-blueskay m-auto pb-4 dark:text-greenday'/>
                            <div className='mx-6'>
                            <h2 className='flex justify-center text-2xl text-center h-20 items-center dark:text-black'>Redes Sociales</h2>
                            <p className='flex justify-center m-auto w-40 text-center dark:text-black'>Integración con tus Redes Sociales</p>
                            </div>
                        </div>
                    </div>
                    <h2 className='font-bold text-4xl w-full text-center my-16 mt-32 text-blueskay dark:text-greenday'>Ventajas de Nuestros Servicios</h2>
                    <ul>
                        <Article texto="Realizamos un Diseño profesional y personalizado para cada cliente."  />
                        <Article texto="No usamos FrontPage o Expression Web."  />
                        <Article texto="Las páginas web informativas son hechas con lenguajes de programación React, Next, JavaScript y otras."/>
                        <Article texto="Manejo del SEO profesional."/>
                        <Article texto="Excelente experiencia de usuario."/>
                        <Article texto="Garantizamos valoraciones positivas a tu web en pocos días."/>
                        <Article texto="Te damos soporte y copias de seguridad (backup) de tu web en un repositorio seguro y privado."/>
                        <Article texto="Te realizamos auditoría de la web con Wappalyzer, pagespeed insights y antes de entregartelo para tu seguridad y conformidad."/>
                        <Article texto="Incertamos metadata y datos estructurados en tu web."/>
                        <Article texto="Fácil integración con Google Ads para campañas especiales por productos o servicios."/>
                        <Article texto="Menor riesgo de hackeo por su alto nivel de seguridad."/>
                    </ul>
                </Layout>
            </main>
        </>
    )
}

export default articles