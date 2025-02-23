'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {  ArrowRight } from 'lucide-react'
import { SparkButton } from './SparkButton'
import { AnimatedGradientText } from './AnimatedGradientText'
import { AnnouncementBanner } from './AnnouncementBanner'

export const HeroContent = () => {
  const announcementWords = [
    "Global Distribution Network",
    "Content Analytics Platform",
    "Revenue Tracking System",
    "Multi-Platform Publishing"
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-[1400px] mx-auto text-left sm:text-center px-4 relative"
    >
      <div className="absolute top-0 -z-10 h-full w-full">
        {/* Mobile gradient (right side) */}
        <div className="sm:hidden absolute bottom-auto left-auto right-0 top-0 h-[600px] w-[600px] translate-x-[40%] translate-y-[10%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-40 blur-[100px]"></div>
        <div className="sm:hidden absolute bottom-auto left-auto right-[10%] top-[30%] h-[400px] w-[400px] translate-x-[20%] rounded-full bg-[rgba(255,87,218,0.4)] opacity-30 blur-[90px]"></div>

        {/* Desktop gradients (more spread out) */}
        <div className="hidden sm:block absolute left-[10%] top-0 h-[700px] w-[700px] -translate-y-[10%] rounded-full bg-[rgba(173,109,244,0.3)] opacity-30 blur-[120px]"></div>
        <div className="hidden sm:block absolute right-[5%] top-[20%] h-[500px] w-[500px] rounded-full bg-[rgba(255,87,218,0.25)] opacity-40 blur-[100px] mix-blend-screen"></div>
        <div className="hidden sm:block absolute bottom-[10%] left-[30%] h-[400px] w-[400px] rounded-full bg-[rgba(100,50,255,0.3)] opacity-30 blur-[90px] mix-blend-multiply"></div>
      </div>

      <AnnouncementBanner words={announcementWords} />

      <h1 className="text-7xl md:text-6xl lg:text-8xl font-bold leading-[1.1] tracking-tight text-left sm:text-center">
        <AnimatedGradientText colors={{
          from: '#ffffff',
          via: '#a8a8a8',
          to: '#d4d4d4'
        }}>
          <span className="block sm:hidden text-[90px] md:text-6xl lg:text-8xl leading-[0.95] mt-8">Get<br/>
            Heard<br/>
            By<br/>
            Millions
          </span>
          <span className="hidden sm:block">Get Heard by Millions<br/>Create  <motion.span 
                whileHover={{ scale: 1.2, rotate: -10 }}
                className="inline-block text-pink-400 opacity-60"
              >
                ,
              </motion.span> Share   <motion.span 
                whileHover={{ scale: 1.2, rotate: -10 }}
                className="inline-block text-pink-400 opacity-60"
              >
                ,
              </motion.span> Monetize</span>
        </AnimatedGradientText>
      </h1>

      <div className="max-w-3xl mx-auto">
        <p className="text-lg md:text-xl lg:text-2xl text-gray-400 text-left sm:text-center  md:mt-6">
          Your content, your rules—reach new markets, grow your audience, and make money doing what you love.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-center gap-4 mt-12 w-full sm:w-auto">
        <SparkButton>
          <span>Get Started Now</span>
        </SparkButton>
        <SparkButton variant="secondary">
          <span>Learn more</span>
          <ArrowRight className="w-4 h-4" />
        </SparkButton>
      </div>
    </motion.div>
  )
}