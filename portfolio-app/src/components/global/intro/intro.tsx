/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable react/no-unescaped-entities */
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react';
import { BsArrowDown, BsArrowRight } from 'react-icons/bs'
const variantsDownload = {
  hover: {
    y: [0, 5, 0],
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.5,
      },
    },
  },
  initial: {
    y: 0,
    opacity: 1,
  },
};

const variantsDownloadParent = {
   initial: {
    y: 0,
    opacity: 1,
  },
  hover: {
    opacity : 1,
    y: [0, 5, 0],
    transition: {
      yoyo: Infinity,
      duration: 0.5,
    },
  },
};

const variantsContact = {
  hover: {
    x: [0, 10, 0],
    transition: {
      yoyo: Infinity,
      duration: 0.5,
    },
  },
  initial: {
    x: 0,
    opacity: 1,
  },
};

const variantsContactParent = {
  initial: {
    x: 0,
    opacity: 1,
  },
 hover : {
    x : [0, 10, 0],
    opacity: 1,
    transition: {
      yoyo: Infinity,
      duration: 0.5,
    },
  },
};

export const Intro = () => {

  const [isDownloadHovered, setisDownloadHovered] = useState(false);
   const [isContactHovered, setisContactHovered] = useState(false);
  function handleMouseEnter() {
    setisDownloadHovered(true);
  }

  function handleMouseLeave() {
    setisDownloadHovered(false);
  }

  function handleMouseEnterContact() {
    setisContactHovered(true);
  }

  function handleMouseLeaveContact() {
    setisContactHovered(false);
  }


    return (
        <section id="home" className="flex flex-col items-center justify-center pt-24 pb-20 sm:pt-28 h-screen">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center sm:flex-row">
                <motion.h1
                    className="text-6xl lg:text-6xl font-bold text-center sm:text-4xl sm:leading-tight"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    Hello,
                </motion.h1>
                <motion.p
                    className="text-lg sm:text-xl lg:text-2xl text-center mt-4 sm:mt-0 sm:ml-4"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    I'm Ali, a full-stack developer from Morocco.
                </motion.p>
            </div>
            <div className="flex flex-col items-center mt-8 sm:flex-row sm:mt-12 gap-5 sm:gap-8 pt-4 sm:pt-8">
                <motion.div
                    className="btn btn-primary mb-4 sm:mb-0 sm:mr-4"
                    initial={{ opacity: 0, x: -100 }}
                    variants={variantsContactParent}
                    animate={isContactHovered ? "hover" : "initial"}
                    transition={{ delay: 0.7 }}
                    onMouseEnter={handleMouseEnterContact} onMouseLeave={handleMouseLeaveContact}
                    whileFocus={variantsContactParent.hover}
                >
                    <Link
                        href="#contact"
                        className="bg-primary/45 text-white px-4 py-2 rounded-xl"
                    >
                        Contact me{' '}
                        <motion.div 
                        animate={isContactHovered ? "hover" : "initial"}
                        variants={variantsContact}
                        className='inline-block'
                        >
                          <BsArrowRight className="inline-block opacity-70" />
                        </motion.div>
                    </Link>
                </motion.div>

                <motion.div
                    className="btn btn-primary mb-4 sm:mb-0 sm:mr-4"
                    initial={{ opacity: 0, y: -100 }}
                    variants={variantsDownloadParent}
                    animate={isDownloadHovered ? "hover" : "initial"}
                    transition={{ delay: 0.9 }}
                    onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                >
                    <Link
                        href="#contact"
                        className="bg-secondary text-white px-4 py-2 rounded-xl"
                    >
                        Download resume{' '}
                        <motion.div
                        // when parent is hovered, move the arrow down
                        animate={isDownloadHovered ? "hover" : "initial"}
                        variants={variantsDownload}
                        className='inline-block'>
                          <BsArrowDown className="inline-block opacity-70" />
                        </motion.div>
                        
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
