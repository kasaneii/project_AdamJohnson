'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Neon = () => {
  return (
    <section className="flex items-center xl:h-screen px-10">
      <div className="mt-32 grid grid-cols-1 xl:grid-cols-3 gap-20 relative">
          <div className="flex flex-wrap justify-center gap-5">
            <img 
              src="/neon/neon-1.jpg" 
              className="mt-24 w-[150px] h-[250px] md:w-[200px] md:h-[300px] object-cover object-center"
              />
            <img 
              src="/neon/neon-2.jpg" 
              className="w-[150px] h-[250px] md:w-[200px] md:h-[300px] object-cover object-center"
              />
          </div>

          <div>
            <div className='xl:absolute top-0 font-kanit text-[32px] sm:text-[56px] md:text-[64px] lg:text-[100px] text-white'>
              <h2 className='leading-[100px]'>Illuminating Beauty</h2>
            </div>
            <div className='w-[250px] sm:w-[400px] md:w-[600px] xl:w-[300px] text-[12px] md:text-[14px] font-workSans text-white pt-10 xl:pt-56'>
              <hr className='w-[100px] border-[1px] border-white opacity-25 mb-10'/>
              <p>Neon lights have always fascinated me, the way they play with colors and shapes, the way they can create a mood and atmosphere. </p>
              <br/>
              <p>I found beauty in the way the neon lights highlighted the beauty of my subjects, in the way they created a mood and atmosphere that evokes emotions.</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-5">
            <img 
              src="/neon/neon-6.jpg" 
              className="xl:ml-36 h-[100px] w-[200px] md:h-[150px] md:w-[250px] object-cover"
              />
            <img 
              src="/neon/neon-9.jpg" 
              className="h-[250px] w-[150px] md:h-[300px] md:w-[200px] object-cover"
              />
            <img 
              src="/neon/neon-10.jpg" 
              className="mt-10 h-[100px] w-[150px] md:h-[150px] md:w-[200px] object-cover object-top"
              />
            <Link 
              href='/neon-collection'
              onClick={() => {
                document.body.style.background = 'black';
                window.location.href = '/neon-collection';
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

export default Neon