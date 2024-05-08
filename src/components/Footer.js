import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='www.codigowebperu.com w-full border-t-2 border-solid border-dark font-medium text-lg
     dark:text-light dark:border-light sm:text-base'>
        <Layout className='www.codigowebperu.com py-8 flex items-center justify-between lg:flex-col lg:py-6'>
            <span>{new Date().getFullYear()} &copy; Todos los derechos reservados.</span>
            <div className='www.codigowebperu.com flex items-center lg:py-2'>
              Construído por <span className='www.codigowebperu.com text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span>
            &nbsp; <Link href={"https://devdreaming.com"} className='www.codigowebperu.com underline underline-offset-1' target='_blank'>José L. Gaspar</Link></div>
            <Link href={"https://portafolio-jose-gaspar.netlify.app/"} target='_blank' className='www.codigowebperu.com underline underline-offset-1'>+ Trabajos de José Gaspar</Link>
        </Layout>
    </footer>
  )
}

export default Footer