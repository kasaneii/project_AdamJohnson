'use client'

import React from 'react'
import { Nature, Street, Portrait, Vintage, Neon } from '/sections'
import { Footer } from '/components'
import { AnimatePresence, motion } from 'framer-motion'

const works = () => {
  return (
    <AnimatePresence mode='wait'>
      <motion.section
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: 'easeOut', delay: 1 }}  
        className="h-screen"
      >
        <Nature/>
        <Street/>
        <Portrait/>
        <Vintage/>
        <Neon/>
        <Footer/>
      </motion.section>
    </AnimatePresence>
  )
}

export default works