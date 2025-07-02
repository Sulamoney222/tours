import React from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

const Hero = () => {
  return (
   <section className='w-full nav-height bg-black relative'>
      <div className='h-5/6 w-full flex items-center justify-center flex-col'>
      <p className='text-center font-semibold text-3xl text-gray-100 opacity-0 max-md:mb-10'>iPhone 15</p>
      </div>
   </section>
  )
}

export default Hero
