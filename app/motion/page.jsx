'use client'

import { Footer } from 'components';
import React, { useState, useRef, useEffect } from 'react';
import { motionWorks } from '/constants';
import { AnimatePresence, motion } from 'framer-motion';

const Page = () => {
  const refs = motionWorks.map(() => useRef(null));
  const [sectionStates, setSectionStates] = useState({});
  const [activeSection, setActiveSection] = useState(null);
  const [buttonsVisible, setButtonsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.dataset.index);
        }
      });
    }, { threshold: [0.5] });
  
    motionWorks.forEach((_, index) => {
      if (refs[index].current) {
        observer.observe(refs[index].current);
      }
    });
  
    return () => {
      observer.disconnect();
    };
  }, [refs, motionWorks]);  

  const handlePlayPause = (index) => {
    if (refs[index].current) {
      const newSectionStates = { ...sectionStates };
      newSectionStates[index] = !newSectionStates[index];
      setSectionStates(newSectionStates);
  
      if (sectionStates[index]) {
        refs[index].current.pause();
      } else {
        refs[index].current.play();
      }
    }
  };
  
  const handleEnded = (index) => {
    const newSectionStates = { ...sectionStates };
    newSectionStates[index] = false;
    setSectionStates(newSectionStates);
  };

  const handleFullscreen = (index) => {
    if (refs[index].current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        refs[index].current.requestFullscreen();
      }
    }
  };
  
  return (
    <AnimatePresence mode='wait'>
      <motion.section
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: 'easeOut', delay: 1 }}  
        className="h-screen"
      >
        {motionWorks.map((works, index) => (
          <section data-index={index} key={works.id} className='2xl:max-w-[1280px] w-full mx-auto'>
            <div className='h-screen flex flex-col items-center justify-center'>
              <div className='flex flex-col gap-5 w-[300px] md:w-[600px] lg:w-[800px] pt-20'>
                <h3 className='font-workSans font-semibold text-[14px] md:text-[16px] xl:text-[20px] text-white tracking-wide'>
                  {works.title}
                </h3>
                <p className='font-workSans font-normal text-[12px] md:text-[14px]  text-white opacity-50'>
                  {works.detail}
                </p>
                <div className='relative flex justify-center items-center mx-auto w-[300px] h-[200px] md:w-[600px] md:h-[350px] lg:w-[800px] lg:h-[450px]' onMouseEnter={() => setButtonsVisible(true)} onMouseLeave={() => setButtonsVisible(false)}>
                  <video ref={refs[index]} className='w-full h-full object-cover'  controls={false}onEnded={() => handleEnded(index)}>
                    <source src={works.src} type={works.type} />
                  </video>
                  {buttonsVisible && (
                    <>
                      <button onClick={() => handlePlayPause(index)} className='absolute'>
                        <img src={sectionStates[index] ? "/pause.png" : "/play.png"} alt="Play/Pause" className='w-[50px] h-[50px] md:w-[80px] md:h-[80px] object-contain' />
                      </button>
                      <button onClick={() => handleFullscreen(index)} className='absolute bottom-2 right-2 flex justify-center items-center w-[30px] h-[30px] md:w-[40px] md:h-[40px] bg-black bg-opacity-75 rounded-[5px] md:rounded-[10px]'>
                        <img src="/fullscreen.png" alt="Fullscreen" className='absolute w-[15px] h-[15px] md:w-[25px] md:h-[25px] object-contain' />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}
        <Footer/>
      </motion.section>
    </AnimatePresence>
  );
};

export default Page;
