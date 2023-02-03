'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { socialLinks } from '../constants'
import { motion, AnimatePresence } from 'framer-motion'
import { navVariants } from '../utils/motion'
import styles from '../styles'
import '../styles/globals.css'

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show" 
        className={`${styles.xPaddings} py-10 fixed w-full z-50`}
      >
        <div className={`${styles.innerWidth} mx-auto flex items-center justify-between`}>
          <div className='flex-1 text-left text-white'>
            <motion.button
              whileHover={{ backgroundColor: "white"}}
              transition={{ backgroundColor: { duration: 0.5 } }}
              className='relative flex justify-center items-center bg-white bg-opacity-25 w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] md:w-[50px] md:h-[50px] rounded-full'
              onClick={toggleModal}
            >
              <motion.img
                whileHover={{ filter: "invert(1)" }}
                transition={{ filter: { duration: 0.7 } }} 
                src={isModalOpen ? "/exit.png" : "/menu.png"} 
                alt="menu" 
                className='absolute lg:w-[30px] lg:h-[30px] w-[20px] h-[20px] object-contain'
              />
            </motion.button>
          </div>
          <div className='flex-1 text-center'>
            <p className='font-permanentMarker lg:text-[36px] md:text-[28px] text-white uppercase'>Adam!</p>
          </div>
          <div className='flex-1 text-right'>
            <motion.button
              whileHover={{ backgroundColor: '#1A1A1A', color: "white" }}
              transition={{ backgroundColor: { duration: 0.7 },  color: { duration: 0.7 }}}
              whileTap={{ scale: 0.85 }} 
              className='lg:py-4 lg:px-8 md:py-2 md:px-4 pb-2 px-2 bg-white rounded-full'
            >
              <a href='mailto:hello@adamjohnson.com' className='font-workSans font-medium lg:text-[16px] md:text-[14px] text-[12px]'>Get in touch</a>
            </motion.button>
          </div>
        </div>
      </motion.nav>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.5}}
            transition={{ duration: 0.5 }}
            className='h-screen w-full fixed z-40 bg-black'
          >
            <img src="/adam-3.jpg" className='absolute right-0 h-screen w-[900px] object-cover object-center lg:object-left' />
            <div className='absolute right-0 h-screen w-[900px] left-fade' />
            <div className='absolute right-0 h-screen w-[900px] top-fade' />
            <div className='h-screen 2xl:max-w-[1280px] w-full'>
              <div className='absolute top-0 h-screen w-full flex flex-col gap-10 justify-center items-center'>
                <div className='font-kanit text-[36px] md:text-[40px] flex flex-wrap justify-center gap-10 md:gap-16 w-[70%] z-40'>
                  <Link 
                    href='/'
                    onClick={() => {
                      closeModal();
                      document.body.style.background = 'black';
                      window.location.href = '/';
                    }}
                  >
                    <motion.p 
                      whileHover={{ y: -10, color: 'white' }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                      className={window.location.pathname === '/' ? 'text-white text-opacity-100' : 'text-white text-opacity-50'}
                    >
                      Homepage
                    </motion.p>
                  </Link>
                  <Link 
                    href='/about' 
                    onClick={() => {
                      closeModal();
                      document.body.style.background = 'black';
                      window.location.href = '/about';
                    }}
                  >
                    <motion.p 
                      whileHover={{ y: -10, color: 'white' }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                      className={window.location.pathname === '/about' ? 'text-white text-opacity-100' : 'text-white text-opacity-50'}
                    >
                      About
                    </motion.p>
                  </Link>
                  <Link 
                    href='/works' 
                    onClick={() => {
                      closeModal();
                      document.body.style.background = 'black';
                      window.location.href = '/works';
                    }}
                  >
                    <motion.p 
                      whileHover={{ y: -10, color: 'white' }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                      className={window.location.pathname === '/works' ? 'text-white text-opacity-100' : 'text-white text-opacity-50'}
                    >
                      Portfolio
                    </motion.p>
                  </Link>
                  <Link 
                    href='/motion' 
                    onClick={() => {
                      closeModal();
                      document.body.style.background = 'black';
                      window.location.href = '/motion';
                    }}
                  >
                    <motion.p 
                      whileHover={{ y: -10, color: 'white' }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                      className={window.location.pathname === '/motion' ? 'text-white text-opacity-100' : 'text-white text-opacity-50'}
                    >
                      Motion
                    </motion.p>
                  </Link>
                </div>
                <div className="flex justify-center items-center gap-5 md:gap-10 z-40">
                  {socialLinks.map((social) => (
                    <motion.a
                      whileHover={{ y: -10 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }} 
                      key={social.id} 
                      href={social.url} 
                      target="_blank"
                    >
                      <img src={social.src} alt={social.id} className='w-[15px] h-[15px] md:w-[20px] md:h-[20px] object-contain' />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
