'use client'

import * as React from 'react'
import { ExternalLinkIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from '@/context/theme-context'
import { motion } from 'framer-motion'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { FaLink } from 'react-icons/fa'

export function ModeToggle() {
    const { theme, toggleTheme } = useTheme()

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/ali-kabbadj-b17aaa280/', '_blank', 'noopener,noreferrer');
  };

  const handleGuthubClick = () => {
    window.open('https://www.github.com/ali-kabbadj', '_blank', 'noopener,noreferrer');
  }
    return (
        <div>
            <motion.button
                className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border dark:border-white border-gray-950 dark:border-opacity-100 border-opacity-100 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 cursor-pointer"
                onClick={toggleTheme}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0 }}
                whileHover={{
                      scale: 1.2,
                      transition: { duration: 0.02 },
                    }}
            >
                {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </motion.button>
                <motion.div
                    className="fixed bottom-5 right-20 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border dark:border-white  dark:border-opacity-40 border-gray-950 border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 cursor-pointer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                     whileHover={{
                      scale: 1.2,
                      transition: { duration: 0.02 },
                    }}
                    onClick={handleGuthubClick}
                >
                  <GitHubLogoIcon/>
                  <FaLink className="absolute bottom-0 right-0 w-4 h-4 m-0 text-gray-500"/>
                </motion.div>
               <motion.div
                  className="fixed bottom-5 right-36 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border dark:border-white dark:border-opacity-40 border-gray-950 border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15]  transition-all dark:bg-gray-950 cursor-pointer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.02 },
                  }}
                  onClick={handleLinkedInClick}
                >
                  <LinkedInLogoIcon />
                  <FaLink className="absolute bottom-0 right-0 w-4 h-4 m-0 text-gray-500"/>
              </motion.div>
        </div>
    )
}
