import React from 'react'
import whatsapp from '../../public/whatsapp.png'
import Image from 'next/image';
import Link from 'next/link';

const Layout = ({ children, className = "" }) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}>
      {children}
      <Link href={'https://api.whatsapp.com/send?phone=51929668883'} className='fixed right-16 bottom-16 inline-block w-24 '
        target='_blank'>
          <div className='absolute animate-ping rounded-full w-24 h-24 bg-whatsapp bottom-1'/>
        <Image src={whatsapp} alt='Jose Gaspar' className='w-full h-auto' />    
      </Link>

    </div>
  )
}

export default Layout