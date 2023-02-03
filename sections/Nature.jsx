'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Nature = () => {
  return (
    <section className="flex items-center xl:h-screen px-10">
      <div className="mt-32 grid grid-cols-1 xl:grid-cols-3 gap-10 relative">
          <div className="flex justify-center gap-5">
            <img
              src="/nature/nature-3.jpg" 
              className="w-[100px] h-[150px] md:w-[200px] md:h-[250px] object-cover object-center"
            />
            <img
              src="/nature/nature-4.jpg" 
              className="mt-10 w-[100px] h-[150px] md:w-[250px] md:h-[300px] object-cover object-center"
            />
          </div>

          <div>
            <div className='xl:absolute top-0 font-kanit text-[32px] sm:text-[56px] md:text-[64px] lg:text-[100px] text-white'>
              <h2>Through the lens</h2>
              <h2 className='text-right leading-[50px]'>of the wild</h2>
            </div>
            <div className='w-[250px] sm:w-[400px] md:w-[600px] xl:w-[300px] text-[12px] md:text-[14px] font-workSans text-white pt-10 xl:pt-80'>
              <hr className='w-[100px] border-[1px] border-white opacity-25 mb-10'/>
              <p>I have always been in awe of the natural world, the way the sun paints the sky in hues of orange and pink at dawn, the way the mist clings to the mountain tops at dusk.</p>
              <br/>
              <p>I found myself drawn to the beauty of landscapes, seascapes and wildlife, and I knew that I wanted to share this beauty with others.</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-5">
            <img
              src="/nature/nature-8.jpg" 
              className="xl:ml-10 h-[100px] w-[150px] md:h-[200px] md:w-[300px] object-cover"
              />
            <img
              src="/nature/nature-12.jpg" 
              className="h-[150px] w-[100px] md:h-[200px] md:w-[150px] object-cover"
              />
            <img
              src="/nature/nature-1.jpg" 
              className="w-[150px] h-[100px] md:w-[250px] md:h-[150px] object-cover"
              />
            <Link 
              href='/nature-landscape-collection'
              onClick={() => {
                document.body.style.background = 'black';
                window.location.href = '/nature-landscape-collection';
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

export default Nature