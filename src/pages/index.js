import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/developer-pic-1.png"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import TransitionEffect from '@/components/TransitionEffect'


export default function Home() {
  return (
    <>
      <Head>
        <title>▷ Página web Para Empresas 【  Desarrollo web Perú 】</title>
        <meta name="description" content="Diseñamos páginas web para empresas y profesionales independientes. 
        Diseño y Desarrollo web responsivo, carrito de compras y más. cel. 907631349" />
        <meta type="title" content="▷ Página web Para Empresas 【  Desarrollo web Perú 】"/>
        <meta name='language' content='spanish'/>
        <meta name='copyright' content='JG Diseños Web' />
        <meta name='author' content='José Luis Gaspar Unzueta'/>
        <meta name='keywords' content='Pagina web para empresas, Desarrollo web, Agencia de Marketing Digital, marketing digital
        servicio de desarrollo web, servicio de diseño web, paginas web peru, diseño de paginas web, diseño web peru, diseñador
        de paginas web '/>
        <meta name='robots' content='index, follow, all'/>
        <meta name='category' content='desarrollo web, diseño web'/>
        <meta rel='icon' type="image/x-icon" href='imagenes/de/icono/favicon'/>
        <meta itemProp='telephone' content='907631349'/>

      </Head>
      
      <TransitionEffect/>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light '>
        <Layout className='pt-0 md:p-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt='CodeBucks' className='w-full h-auto lg:hidden md:inline-block md:w-full' priority
                sizes='(max-width: 768px) 100vw, 
              (max-width: 1200px) 50vw, 
              50vw'
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text={'Desarrollo de Páginas web a Medida'} className='!text-6xl !text-left 
              xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl
              '/>
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>Somos una Agencia de Marketing Digital especializada 
              en <b>desarrollo de páginas web</b> y <b>Gestión de contenidos</b> para Redes Sociales.
              Nuestro servicio de desarrollo web maneja código propio o diseños establecidos, que ayuda al manejo del branding de su empresa y 
              nuestro servicio de SEO para posicionamiento de su página web.</p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/dummy.pdf" target='_blanck'
                  className='flex items-center bg-blueskay text-light p-2.5 pc-6 rounded-lg text-lg font-semibold hover:bg-light
                   hover:text-blueskay border-2 border-solid border-transparent hover:border-blueskay dark:bg-greenday dark:text-dark
                    hover:dark:bg-blueskay  hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base'
                  download={true}
                >Brochure <LinkArrow className={"w-6 ml-1"} />

                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  )
}
