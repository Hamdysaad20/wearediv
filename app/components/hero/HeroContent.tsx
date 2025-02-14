'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Globe, ArrowRight } from 'lucide-react'
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
      className="max-w-[1400px] mx-auto text-center"
    >
      <AnnouncementBanner words={announcementWords} />

      <h1 className="text-3xl md:text-6xl lg:text-8xl font-bold leading-[1.1] tracking-tight">
        <AnimatedGradientText colors={{
          from: '#ffffff',
          via: '#a8a8a8',
          to: '#d4d4d4'
        }}>
          Get Heard by Millions <br/>Create, Share, Monetize.
        </AnimatedGradientText>
      </h1>

      <div className="max-w-3xl mx-auto">
        <p className="text-sm md:text-xl lg:text-2xl text-gray-400">
        Your content, your rules—reach new markets, grow your audience, and make money doing what you love.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
        <SparkButton>
          <span>Start Now</span>
          <Globe className="w-4 h-4" />
        </SparkButton>
        <SparkButton variant="secondary">
          <span>Learn more</span>
          <ArrowRight className="w-4 h-4" />
        </SparkButton>
      </div>
    </motion.div>
  )
}