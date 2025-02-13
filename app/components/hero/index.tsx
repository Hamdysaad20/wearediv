import React from 'react'
import { HeroContent } from './HeroContent'
import { HeroVideoDialog } from '../ui/hero-video-dialog'

export function Hero() {
  return (
    <div className="relative lg:mt-20 md:mt-12 mt-5   pb-12 min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      <div className="relative z-10   container mx-auto px-4">
        <HeroContent />
        <div className="mt-12 rounded-xl overflow-hidden  max-w-6xl mx-auto lg:max-w-[1200px]">
          <HeroVideoDialog
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/ZK-rNEhJIDs"
            thumbnailSrc="https://i.ytimg.com/vi/ZK-rNEhJIDs/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-DoACuAiKAgwIABABGE0gSShZMA8=&rs=AOn4CLBCYB3TfbX1kLfxTesBEsjNAVWgtg"
            thumbnailAlt="Watch Demo"
          />
        </div>
      </div>
    </div>
  )
}