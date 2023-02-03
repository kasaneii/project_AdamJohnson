'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { StreetGallery } from '/sections'
import { motion } from 'framer-motion';
import { staggerContainer, slideIn, growIn, fadeIn } from '/utils/motion';

const numbers = [2, 0, 1, 7]
const text = 'portrait'

const renderText = text.split('').map((letter, index) => (
  <div key={index} className='overflow-hidden font-kanit font-semibold text-[64px] md:text-[150px] text-white uppercase text-center leading-[150px]'>
    <motion.h3
      variants={slideIn('right', 'tween', 1, 1)}
      >
      {letter}
    </motion.h3>
  </div>
));

const page = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="h-screen">
      <div className="2xl:max-w-[1280px] w-full mx-auto">
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}   
          className="h-[500px] md:h-[700px] lg:h-screen flex justify-center items-center"
        >
          <div className="flex relative items-center justify-center">
            <motion.div
              variants={fadeIn('left', 'tween', 1, 1)} 
            >
              {numbers.map((num, index) => (
                <span
                  key={index}
                  className="font-kanit text-[150px] md:text-[200px] lg:text-[350px] text-mineShaft"
                  style={{
                    position: 'relative',
                    top: `${(index % 2 === 0) ? scrollY * 0.1 : -scrollY * 0.1}px`,
                    left: 0,
                    transition: 'top 0.3s ease-out'
                  }}
                  >
                  {num}
                </span>
              ))}
            </motion.div>
            <div className="absolute overflow-hidden">
              <motion.p
                variants={slideIn('up', 'tween', 1.5, 1)}  
                className='font-workSans font-semibold text-[12px] md:text-[14px] text-white uppercase tracking-widest'
              >
                street and urban
              </motion.p>
            </div>
          </div>
        </motion.section>
        <StreetGallery/>
        <div className="h-[200px] md:h-[300px] lg:h-screen" />
        <motion.section 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}   
          className='h-screen flex justify-center items-center'
        >
          <Link 
            href='/portraiture-people-collection'
            onClick={() => {
              document.body.style.background = 'black';
              window.location.href = '/portraiture-people-collection';
            }}
          >
            <div className='px-10 relative flex flex-col items-center cursor-pointer'>
              <div className='z-20 absolute top-10 md:top-32 flex gap-2 md:gap-5'>
                <div className='flex'>
                  {renderText}
                </div>
                <motion.p
                  variants={fadeIn('up', 'tween', 0.5, 1)}
                  className='font-workSans font-normal text-[14px] md:text-[16px] text-white uppercase text-center tracking-[5px]'
                >
                  next
                </motion.p>
              </div>
              <motion.div
                variants={growIn('up', 'tween', 1.5, 1)} 
                className="bg-codGray z-10 w-[300px] h-[250px] md:w-[600px] md:h-[400px] overflow-hidden"    
              >
                <motion.img
                  variants={growIn('up', 'tween', 1.5, 1)} 
                  src="/portrait/portrait-1.jpg" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </Link>
        </motion.section>
      </div>
    </section>
  )
}

export default page