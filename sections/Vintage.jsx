'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Vintage = () => {
  return (
    <section className='flex items-center xl:h-screen px-10'>
      <div className="mt-32 grid grid-cols-1 xl:grid-cols-3 gap-10 relative">
          <div className="flex flex-wrap justify-center gap-5">
            <img 
              src="/vintage/vintage-2.jpg" 
              className="w-[150px] h-[200px] md:w-[200px] md:h-[250px] object-cover object-center"
              />
            <img 
              src="/vintage/vintage-3.jpg" 
              className="mt-10 w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-cover object-center"
              />
            <img 
              src="/vintage/vintage-9.jpg" 
              className="mt-10 w-[200px] h-[150px] md:w-[250px] md:h-[200px] object-cover object-center"
              />
            <img 
              src="/vintage/vintage-14.jpg" 
              className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] object-cover object-center"
              />
            
          </div>

          <div>
            <div className='xl:absolute top-0 font-kanit text-[32px] sm:text-[56px] md:text-[64px] lg:text-[100px] text-white'>
              <h2 className='leading-[100px]'>A Timeless Journey</h2>
            </div>
            <div className='w-[250px] sm:w-[400px] md:w-[600px] xl:w-[300px] text-[12px] md:text-[14px] font-workSans text-white pt-10 xl:pt-56'>
              <hr className='w-[100px] border-[1px] border-white opacity-25 mb-10'/>
              <p>I have always been fascinated by the past, the way it shapes who we are and where we come from. </p>
              <br/>
              <p>I captured images that transport the viewer back in time, that evoke  emotions and draw attention to the details and textures of these  treasured moments and places.</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-5">
            <img 
              src="/vintage/vintage-11.jpg" 
              className="h-[400px] w-[300px] md:h-[500px] md:w-[400px] object-cover"
              />
            <Link 
              href='/vintage-retro-collection'
              onClick={() => {
                document.body.style.background = 'black';
                window.location.href = '/vintage-retro-collection';
              }}
              >
              <motion.div 
                className='xl:pl-28 flex items-center gap-5 cursor-pointer'
                whileHover={{ scale: 1.1,  x: 20 }}
                whileTap= {{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                >
                <img src="/right-arrow.png" alt="arrow" className='w-[30px] h-[30px]md:w-[50px] md:h-[50px] object-contain'/>
                <p className='uppercase text-[12px] md:text-[14px] font-workSans text-white tracking-widest'>see collection</p>
              </motion.div>
            </Link>
          </div>
        </div>
    </section>
  )
}

export default Vintage