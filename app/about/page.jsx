'use client'

import React from 'react'
import Link from 'next/link'
import { aboutDetails, services } from '/constants'
import { Footer } from '/components'
import { AnimatePresence, motion } from 'framer-motion'
import { staggerContainer, slideIn, fadeIn } from '/utils/motion'

const page = () => {
  return (
    <AnimatePresence mode='wait'>
      <motion.section
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: 'easeOut', delay: 1 }}  
        className="h-screen"
      >
        <section className="h-screen 2xl:max-w-[1280px] w-full mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }} 
            className='h-screen w-full absolute top-0 left-0'
          >
            <video className='w-full h-full object-cover' autoPlay loop>
              <source src="/main.mp4" type='video/mp4'/>
            </video>
            <div className='h-screen w-full absolute top-0 left-0 opacity-50 bg-black' />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 1.5 }}  
            className="hidden lg:flex w-[1200px] relative"
          >
            <div className='font-kanit font-medium text-[120px] text-white relative mt-56'>
              <div className='flex gap-10'>
                <h1>The Art</h1>
                <h1 className='text-[64px] pt-10'>of</h1>
              </div>
              <div className='flex items-center gap-10 leading-[5px] pl-32'>
                <h1>Capturing</h1>
                <h1 className='text-[64px] pt-10'>Moments</h1>
              </div>
            </div>
          </motion.div>
        </section>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }} 
            className='h-screen flex justify-center items-center'
          >
            <div className='2xl:max-w-[1280px] w-full mx-auto flex flex-wrap items-center justify-center gap-5 md:gap-10'>
              {services.map((service, index) => (
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                  variants={slideIn('up', 'tween', index * 0.5, 1)}  
                  key={service.id} 
                  className={`relative flex justify-center w-[130px] h-[250px] md:w-[150px] lg:w-[220px] lg:h-[350px] xl:w-[280px] xl:h-[400px] ${index === 1 || index === 3 ? 'md:mb-10' : 'md:mt-20'}`}
                >
                  <img src={service.src} alt={service.id} className='w-full h-full object-cover' />
                  <div className='absolute top-0 w-[130px] h-[250px] md:w-[150px] lg:w-[220px] lg:h-[350px] xl:w-[280px] xl:h-[400px] bottom-fade' />
                  <p className={`absolute bottom-10 font-workSans uppercase text-[14px] md:text-[16px] text-white opacity-75 tracking-widest font-light text-center`}>{service.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
          <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }} 
            className="relative h-screen flex justify-center items-center"
          >
            <motion.div
              variants={fadeIn('up', 'tween', 0.5, 1)} 
              className="h-screen w-full absolute top-0"
            >
              <img src="/adam-1.jpg" className='w-full h-full object-cover' />
              <div className="h-screen w-full absolute top-0 bg-black opacity-25" />
              <div className="h-screen w-full absolute top-0 bottom-fade" />
              <motion.div
                variants={slideIn('up', 'tween', 1, 1)}   
                className="relative bottom-80 md:bottom-40 2xl:max-w-[1280px] w-full mx-auto flex justify-center"
              >
                <div className='w-[80%] md:w-[60%] flex flex-col gap-5 md:gap-10 font-workSans text-white font-medium'>
                  {aboutDetails.map((detail, index) => (
                    <p key={detail.id} className={`${index === 0 ? 'text-[16px] md:text-[20px]' : 'text-[14px] md:text-[16px] opacity-50'}`}>
                      {detail.paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.section>

          <section className="h-screen flex justify-center items-center">
            <div className='h-screen 2xl:max-w-[1280px] w-full mx-auto'>
            </div>
          </section>

          <motion.section 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }} 
            className="h-screen flex justify-center items-center"
            >
            <div className='h-screen 2xl:max-w-[1280px] w-full mx-auto flex flex-col justify-center items-center justify-center'>
              <motion.div 
                variants={fadeIn('up', 'tween', 0.5, 1)} 
                className='w-full flex flex-col md:flex-row justify-center items-center'
                >
                <motion.div 
                  whileHover={{ scale: 1.2, transition: { duration: 0.5, ease: 'easeInOut' } }} className=''>
                  <img src="/nature/nature-11.jpg" className='w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] lg:w-[200px] lg:h-[200px] xl:w-[300px] xl:h-[200px] object-contain'/>

                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.2, transition: { duration: 0.5, ease: 'easeInOut' } }} 
                  className=''>
                  <img src="/neon/neon-3.jpg" className='h-[130px] w-[130px] sm:w-[150px] sm:h-[150px] lg:w-[200px] lg:h-[200px] xl:w-[200px] xl:h-[300px] object-contain'/>

                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.2, transition: { duration: 0.5, ease: 'easeInOut' } }} 
                  className=''>
                  <img src="/portrait/portrait-13.jpg" className='w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] lg:w-[200px] lg:h-[200px] xl:w-[300px] xl:h-[200px] object-contain'/>

                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.2, transition: { duration: 0.5, ease: 'easeInOut' } }} 
                  className=''>
                  <img src="/street/street-15.jpg" className='w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] lg:w-[200px] lg:h-[200px] xl:w-[200px] xl:h-[300px] object-contain'/>

                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.2, transition: { duration: 0.5, ease: 'easeInOut' } }} 
                  className=''>
                  <img src="/vintage/vintage-14.jpg" className='w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] lg:w-[200px] lg:h-[200px] xl:w-[300px] xl:h-[200px] object-contain'/>

                </motion.div>
              </motion.div>

              <motion.div
                variants={fadeIn('right', 'tween', 1, 1)} 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Link 
                  href='/works'
                  onClick={() => {
                    document.body.style.background = 'black';
                    window.location.href = '/works';
                  }}
                  className='pt-10 flex items-center gap-2'
                  >
                  <p className='font-workSans uppercase text-[12px] md:text-[16px] text-white opacity-75 tracking-widest font-light'>view portfolio</p>
                  <img src="/small-arrow.png" alt="arrow" className='w-[10px] h-[10px] md:w-[20px] md:h-[20px] object-contain opacity-75'/>
                </Link>
              </motion.div>

            </div>
          </motion.section>

          <Footer/>

        </motion.div>
      </motion.section>
    </AnimatePresence>
  )
}

export default page