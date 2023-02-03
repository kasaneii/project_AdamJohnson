'use client'

import React from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { staggerContainer, slideIn } from 'utils/motion'
import styles from '../styles'
import '../styles/globals.css'

const page = () => {
  return (
    <AnimatePresence mode='wait'>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: 'easeInOut', delay: 1 }} 
        className={`flex flex-col justify-center pt-32 h-screen`}
      >
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}   
          className={`${styles.flexCenter} p-8 relative`}
        >
          <div className={`w-[1000px] relative`}>
            <div className='overflow-hidden'>
              <Link 
                href='/about'
                onClick={() => {
                  document.body.style.background = 'black';
                  window.location.href = '/about';
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className='relative mx-auto w-[300px] h-[400px] md:w-[600px] lg:w-[800px] md:h-[450px]'
                >
                  <video className='w-full h-full object-cover cursor-pointer' autoPlay loop>
                    <source src="/main.mp4" type='video/mp4' />
                  </video>
                  <div className='w-[300px] h-[400px] md:w-[600px] lg:w-[800px] md:h-[450px] absolute top-0 left-0 opacity-50 bg-black' />
                </motion.div>
              </Link>
            </div>
            <div className="absolute top-0 left-0 text-center">
              <div className="overflow-hidden">
                <motion.h1 
                  variants={slideIn('up', 'tween', 2, 1)}    
                  className='text-white font-kanit text-[48px] leading-[48px] md:text-[120px] md:leading-[120px]'
                >
                  Reality
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1 
                  variants={slideIn('up', 'tween', 2, 1)}    
                  className='text-white font-kanit text-[48px] leading-[48px] md:text-[120px] md:leading-[120px]'
                >
                  in
                </motion.h1>
              </div>
            </div>
            <div className='bottom-20 md:bottom-16 right-0 absolute overflow-hidden'>
              <motion.h1
                variants={slideIn('up', 'tween', 2, 1)}     
                className='text-white font-kanit text-[48px] leading-[48px] md:text-[120px] md:leading-[120px]'
              >
                Frames
              </motion.h1>
            </div>
            <motion.p
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2, delay: 3.5, ease: 'easeOut' }} 
              className={`${styles.topPaddings} font-workSans text-white text-[12px] md:text-[16px] uppercase text-center tracking-[5px]`}
            >
              capturing the beauty of the world through my lens
            </motion.p>
          </div>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  )
}

export default page