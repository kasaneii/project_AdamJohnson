'use client'

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const allImages = [
  '/portrait/portrait-1.jpg',
  '/portrait/portrait-2.jpg',
  '/portrait/portrait-3.jpg',
  '/portrait/portrait-4.jpg',
  '/portrait/portrait-5.jpg',
  '/portrait/portrait-6.jpg',
  '/portrait/portrait-7.jpg',
  '/portrait/portrait-8.jpg',
  '/portrait/portrait-9.jpg',
  '/portrait/portrait-10.jpg',
  '/portrait/portrait-11.jpg',
  '/portrait/portrait-12.jpg',
  '/portrait/portrait-13.jpg',
  '/portrait/portrait-14.jpg',
  '/portrait/portrait-15.jpg',
  '/portrait/portrait-16.jpg',
]

const ImageContainer = ({bgColor, src, width, height, onClick}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[320px] lg:h-[320px] xl:w-[400px] xl:h-[400px] ${bgColor} flex items-center justify-center`}
      whileHover={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ duration: 0.7 }}
      onClick={onClick}
    >
      <motion.img
        src={src}
        className={`relative w-[70px] h-[70px] sm:w-[130px] sm:h-[130px] md:w-[170px]  md:h-[170px] lg:w-[200px] lg:h-[200px] xl:w-[${width}px] xl:h-[${height}px] object-cover`}
        animate={isHovered ? { scale: 1.1 } : {}}
        transition={{ duration: 0.3 }}
      />

      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={isHovered ? { scale: 1.1, opacity: 0.75 } : {}}
          transition={{ duration: 0.3 }} 
          className={`absolute flex items-center justify-center w-[70px] h-[70px] sm:w-[130px] sm:h-[130px] md:w-[170px] md:h-[170px] lg:w-[200px] lg:h-[200px] xl:w-[${width}px] xl:h-[${height}px] bg-black`}
          >
          <img src="/show.png" alt="eye icon" className="absolute w-[15px] h-[15px] md:w-[30px] md:h-[30px] object-contain"/>
        </motion.div>
      )}
    </motion.div>
  );
}

const PortraitGallery = () => {
  const [scrollY, setScrollY] = useState(0);
  const [selectedImage, setSelectedImage] = useState(allImages[0]);
  const [showModal, setShowModal] = useState(false);

  const handlePrevClick = () => {
    const currentIndex = allImages.indexOf(selectedImage);
    const prevImage = allImages[(currentIndex - 1 + allImages.length) % allImages.length];
    setSelectedImage(prevImage);
  };

  const handleNextClick = () => {
    const currentIndex = allImages.indexOf(selectedImage);
    const nextImage = allImages[(currentIndex + 1) % allImages.length];
    setSelectedImage(nextImage);
  };
  

  const hideBodyScrollbar = () => {
    document.body.style.overflow = "hidden";
  };
  
  const showBodyScrollbar = () => {
    document.body.style.overflow = "auto";
  };

  const handleModalClose = () => {
    setSelectedImage(null);
    setShowModal(false);
    showBodyScrollbar();
  };
  
  const handleImageClick = src => {
    setSelectedImage(src);
    setShowModal(true);
    hideBodyScrollbar();
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative flex justify-center items-center">
      <div 
        className="flex flex-1 pl-16 flex-col gap-10 sm:gap-24 md:gap-40 lg:gap-56"
        style={{
          position: "relative",
          top: `${scrollY * 0.05}px`,
          transition: 'top 0.3s ease-out'
        }}
      >
          <ImageContainer bgColor='bg-masala' src="/portrait/portrait-1.jpg" width={200} height={300} onClick={() => handleImageClick("/portrait/portrait-1.jpg")}/>
          <ImageContainer bgColor='bg-masala' src="/portrait/portrait-2.jpg" width={200} height={300} onClick={() => handleImageClick("/portrait/portrait-2.jpg")}/>
          <ImageContainer bgColor='bg-masala' src="/portrait/portrait-3.jpg" width={200} height={300} onClick={() => handleImageClick("/portrait/portrait-3.jpg")}/>
          <ImageContainer bgColor='bg-masala' src="/portrait/portrait-4.jpg" width={200} height={300} onClick={() => handleImageClick("/portrait/portrait-4.jpg")}/>
          <ImageContainer bgColor='bg-masala' src="/portrait/portrait-5.jpg" width={200} height={300} onClick={() => handleImageClick("/portrait/portrait-5.jpg")}/>
          <ImageContainer bgColor='bg-masala' src="/portrait/portrait-11.jpg" width={200} height={300} onClick={() => handleImageClick("/portrait/portrait-11.jpg")}/>
        </div>

        <div 
          className="absolute z-10 flex flex-col gap-10 sm:gap-24 md:gap-40 lg:gap-56" 
          style={{
            bottom: `${scrollY * 0.1}px`,
            transition: 'bottom 0.3s ease-out'
          }}
        >
          <ImageContainer bgColor='bg-codGray' src="/portrait/portrait-6.jpg" width={200} height={300} onClick={() => handleImageClick("/portrait/portrait-6.jpg")}/>
          <ImageContainer bgColor='bg-codGray' src="/portrait/portrait-7.jpg" width={200} height={300} onClick={() => handleImageClick("/portrait/portrait-7.jpg")}/>
          <ImageContainer bgColor='bg-codGray' src="/portrait/portrait-8.jpg" width={300} height={200} onClick={() => handleImageClick("/portrait/portrait-8.jpg")}/>
          <ImageContainer bgColor='bg-codGray' src="/portrait/portrait-9.jpg" width={300} height={200} onClick={() => handleImageClick("/portrait/portrait-9.jpg")}/>
          <ImageContainer bgColor='bg-codGray' src="/portrait/portrait-10.jpg" width={200} height={300} onClick={() => handleImageClick("/portrait/portrait-10.jpg")}/>
        </div>

        <div 
          className="absolute right-16 flex flex-col gap-10 sm:gap-24 md:gap-40 lg:gap-56" 
          style={{
            top: `${scrollY * 0.2}px`,
            transition: 'top 0.3s ease-out'
          }}
        >
          <ImageContainer bgColor='bg-masala' src="/portrait/portrait-12.jpg" width={200} height={300} onClick={() => handleImageClick("/portrait/portrait-12.jpg")}/>
          <ImageContainer bgColor='bg-masala' src="/portrait/portrait-13.jpg" width={300} height={200} onClick={() => handleImageClick("/portrait/portrait-13.jpg")}/>
          <ImageContainer bgColor='bg-masala' src="/portrait/portrait-14.jpg" width={200} height={300} onClick={() => handleImageClick("/portrait/portrait-14.jpg")}/>
          <ImageContainer bgColor='bg-masala' src="/portrait/portrait-15.jpg" width={200} height={300} onClick={() => handleImageClick("/portrait/portrait-15.jpg")}/>
          <ImageContainer bgColor='bg-masala' src="/portrait/portrait-16.jpg" width={200} height={300} onClick={() => handleImageClick("/portrait/portrait-16.jpg")}/>
        </div>

        <AnimatePresence>
          {showModal && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: 'easeInOut'}}
                  className="fixed top-0 w-full h-screen bg-black bg-opacity-90 z-50"
                >
                  <button onClick={handleModalClose} className='absolute font-workSans font-medium text-[10px] md:text-[12px] uppercase text-white flex items-center gap-2 pt-10 pl-10'>
                    <img src="/small-arrow.png" alt="arrow" className="w-[10px] h-[10px] md:w-[20px] md:h-[20px] object-contain rotate-180"/>
                    back to collection
                  </button>
                  <div className="pr-10 pt-10 absolute right-0 flex gap-2">
                    <button onClick={handlePrevClick} className="font-workSans font-medium text-[10px] md:text-[12px] uppercase text-white flex items-center gap-2">
                      <img src="/small-arrow.png" alt="arrow" className="w-[10px] h-[10px] md:w-[20px] md:h-[20px] object-contain rotate-180"/>
                      prev |
                    </button>
                    <button onClick={handleNextClick} className="font-workSans font-medium text-[10px] md:text-[12px] uppercase text-white flex items-center gap-2">
                      | next
                      <img src="/small-arrow.png" alt="arrow" className="w-[10px] h-[10px] md:w-[20px] md:h-[20px] object-contain"/>
                    </button>
                  </div>
                  <div className="h-screen flex items-center justify-center">
                    <motion.img
                      key={selectedImage}
                      src={selectedImage}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.1 }}
                      transition={{ duration: 0.8, ease: 'easeInOut' }}
                      className="w-[80%] h-[80%] object-contain"
                    />
                  </div>
                </motion.div>
            )}
        </AnimatePresence>
    </section>
  )
}

export default PortraitGallery