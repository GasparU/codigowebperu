import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { GithubIcon, MoonIcon, SunIcon } from './Icons'
import { motion } from "framer-motion"
import useThemeSwitcher from './hooks/useThemeSwitcher'

const inicio = "/"
const nosotros = '/nosotros'
const servicios = "/paginas_web_peru"
const proyectos = "/proyectos"

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`www.codigowebperu.com  h-[1px] inline-block bg-dark 
            absolute left-0 -bottom-0.5 
            group-hover:w-full transition-[width] ease duration-300 
            ${router.asPath === href ? 'w-full' : 'w-0'}
            dark:bg-light`}
            >
                &nbsp;
            </span>

        </Link>
    )
}

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter();

    const handleClick = () => {
        toggle()
        router.push(href)
    }

    return (
        <button href={href} className={`www.codigowebperu.com ${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
            {title}

            <span className={`www.codigowebperu.com h-[1px] inline-block bg-light
            absolute left-0 -bottom-0.5 
            group-hover:w-full transition-[width] ease duration-300
          dark:bg-dark
            ${router.asPath === href ? 'w-full' : 'w-0'}
            `}>&nbsp;</span>

        </button>
    )
}
const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher()

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (

        <header className='www.codigowebperu.com w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lgpx-16 md:px-12 sm:px-8'>
            <button className="www.codigowebperu.com flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
                <span className={`www.codigowebperu.com bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`www.codigowebperu.com bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`www.codigowebperu.com bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            {/* codigo de menus en pc */}

            <div className='www.codigowebperu.com  w-full flex justify-between items-center lg:hidden'>
                <nav>
                    <CustomLink href={inicio} title={"Inicio"} className='www.codigowebperu.com mr-4' />
                    <CustomLink href={nosotros} title={"Nosotros"} className='www.codigowebperu.com mx-4' />
                    <CustomLink href={servicios} title={"Servicios"} className='www.codigowebperu.com ml-4' />
                    <CustomLink href={proyectos} title={"Proyectos"} className='www.codigowebperu.com mx-8' />
                </nav>
                <nav className='www.codigowebperu.com  flex items-center justify-center flex-wrap'>
                    <p>Proyectos en Código</p>
                    <motion.a href={"https://github.com/GasparU"} target='_blank'
                        whileHover={{ y: -2 }}
                        className='www.codigowebperu.com w-8 mx-3'
                        whileTap={{ scale: 0.9 }}
                    >

                        <GithubIcon />
                    </motion.a>
                    <button
                        onClick={() => setMode(mode === "light" ? "dark" : "light")}
                        className={`www.codigowebperu.com ml-3 flex items-center justify-center rounded-full p-1 
                        ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
                        `}
                    >
                        {
                            mode === "dark" ?
                                <SunIcon className={"www.codigowebperu.com fill-dark"} />
                                : <MoonIcon className={"www.codigowebperu.com fill-dark"} />
                        }
                    </button>

                </nav>
            </div>
            {/* Codigo de menu plegado en tablet o celular */}
            {
                isOpen ?
                    <motion.div
                        initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                        animate={{ scale: 1, opacity: 1 }}
                        className='www.codigowebperu.com min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'>
                        <nav className='www.codigowebperu.com flex items-center flex-col justify-center'>
                            <CustomMobileLink href={inicio} title={"Inicio"} className='' toggle={handleClick} />
                            <CustomMobileLink href={nosotros} title={"Nosotros"} className='' toggle={handleClick} />
                            <CustomMobileLink href={servicios} title={"Servicios"} className='' toggle={handleClick} />
                            <CustomMobileLink href={proyectos} title={"Proyectos"} className='' toggle={handleClick} />
                        </nav>

                        <nav className='www.codigowebperu.com flex items-center justify-center flex-wrap mt-2'>
                            <p className='www.codigowebperu.com text-white dark:text-black'>Proyectos en Código</p>
                            <motion.a href={"https://twitter.com"} target='_blank'
                                whileHover={{ y: -2 }}
                                className='www.codigowebperu.com w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1'
                                whileTap={{ scale: 0.9 }}
                            >
                                <GithubIcon />
                            </motion.a>
                            <button
                                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                                className={`www.codigowebperu.com ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                            >
                                {
                                    mode === "dark" ? <SunIcon className={"www.codigowebperu.com fill-dark"} /> : <MoonIcon className={"fill-dark"} />
                                }
                            </button>
                        </nav>
                    </motion.div> : null
            }
            <div className='www.codigowebperu.com absolute left-[50%] top-2 transkate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    )
}

export default NavBar