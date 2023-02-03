'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Portrait = () => {
  return (
    <section className='flex items-center xl:h-screen px-10'>
      <div className="mt-32 grid grid-cols-1 xl:grid-cols-3 gap-20 relative">
        <div className="flex justify-center gap-5">
          <img src="/portrait/portrait-2.jpg" className="mt-56 w-[100px] h-[150px] md:w-[150px] md:h-[200px] object-cover object-center" />
          <img src="/portrait/portrait-3.jpg" className="w-[200px] h-[300px] md:w-[300px] md:h-[400px] object-cover object-center" />
        </div>
        <div>
          <div className='xl:absolute top-0 font-kanit text-[32px] sm:text-[56px] md:text-[64px] lg:text-[100px] text-white'>
            <h2 className='leading-[100px]'>Faces of humanity</h2>
          </div>
          <div className='w-[250px] sm:w-[400px] md:w-[600px] xl:w-[300px] text-[12px] md:text-[14px] font-workSans text-white pt-10 xl:pt-56'>
            <hr className='w-[100px] border-[1px] border-white opacity-25 mb-10' />
            <p>I believe that people are fascinating, their unique personalities and emotions are what make us human.</p>
            <br />
            <p>I picked up my camera and set out on a journey to capture these personalities and emotions, to tell the stories of people.</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          <img src="/portrait/portrait-7.jpg" className="h-[200px] w-[100px] md:h-[300px] md:w-[200px] object-cover" />
          <img src="/portrait/portrait-4.jpg" className="w-[100px] h-[100px] md:h-[200px] md:w-[200px] object-cover" />
          <img src="/portrait/portrait-9.jpg" className="w-[200px] h-[100px] md:h-[200px] md:w-[300px] object-cover" />
          <Link 
            href='/portraiture-people-collection'
            onClick={() => {
              document.body.style.background = 'black';
              window.location.href = '/portraiture-people-collection';
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1,  x: 20 }}
              whileTap= {{ scale: 0.9 }}
              transition={{ duration: 0.3 }} 
              className='xl:pl-28 flex items-center gap-5 cursor-pointer'
            >
              <img src="/right-arrow.png" alt="arrow" className='w-[30px] h-[30px]md:w-[50px] md:h-[50px] object-contain' />
              <p className='uppercase text-[12px] md:text-[14px] font-workSans text-white tracking-widest'>see collection</p>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Portrait