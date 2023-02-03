'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { footerVariants } from '../utils/motion'

const Footer = () => {
  return (
    <motion.footer 
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}  
      className="relative h-screen w-full flex justify-center items-center"
      >
          <img src="/adam-3.jpg" className='absolute right-0 h-full w-[900px] object-cover object-center md:object-left'/>
          <div className='absolute right-0 h-full w-[900px] left-fade'/>
          <div className='absolute right-0 h-full w-[900px] top-fade'/>
          <div className='h-full 2xl:max-w-[1280px] w-full'>
            <div className='absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center'>
              <div className='flex flex-1 items-end pt-20'>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }} 
                  href="mailto:hello@adamjohnson.com" 
                  className="font-workSans text-[24px] md:text-[48px] font-medium text-white"
                >
                  hello@adamjohnson.com
                </motion.a>
              </div>

              <div className='flex flex-1 items-end pb-20'>
                <div className='flex flex-col gap-2 md:gap-5 items-center'>
                  <p className='font-permanentMarker text-[28px] md:text-[36px] text-white uppercase'>Adam!</p>
                  <p className='font-workSans text-[12px] md:text-[16px] text-white'>© 2023 Adam Johnson</p>
                </div>
              </div>
            </div>
          </div>
      </motion.footer>
  )
}

export default Footer