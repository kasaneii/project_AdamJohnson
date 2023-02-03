'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Street = () => {
  return (
    <section className="flex flex-col justify-center xl:h-screen px-10 ">
      <div className="mt-32  grid grid-cols-1 xl:grid-cols-3 gap-10 relative">
        <div className="flex flex-wrap justify-center gap-5">
          <img src="/street/street-1.jpg" className="w-[100px] h-[150px] md:w-[150px] md:h-[200px] object-cover object-center" />
          <img src="/street/street-2.jpg" className="w-[150px] h-[100px] md:w-[200px] md:h-[150px] object-cover object-center" />
          <img src="/street/street-4.jpg" className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-cover object-center" />
          <img src="/street/street-6.jpg" className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] object-cover object-center" />
        </div>
        <div>
          <div className='xl:absolute top-0 font-kanit text-[32px] sm:text-[56px] md:text-[64px] lg:text-[100px] text-white'>
            <h2>The hustle and</h2>
            <h2 className='pl-20 text-right leading-[50px]'>bustle of the city</h2>
          </div>
          <div className='w-[250px] sm:w-[400px] md:w-[600px] xl:w-[300px] text-[12px] md:text-[14px] font-workSans text-white pt-10 xl:pt-80'>
            <hr className='w-[100px] border-[1px] border-white opacity-25 mb-10' />
            <p>The city is a place of constant movement, where cultures collide and stories unfold.</p>
            <br />
            <p>I found myself drawn to the pulse of the city, to the hustle and bustle of daily life.</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          <img src="/street/street-8.jpg" className="w-[300px] h-[400px] md:h-[500px] md:w-[400px] object-cover" />
          <Link 
            href='/street-urban-collection'
            onClick={() => {
              document.body.style.background = 'black';
              window.location.href = '/street-urban-collection';
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

export default Street