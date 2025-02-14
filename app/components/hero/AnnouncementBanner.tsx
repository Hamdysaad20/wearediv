import React from 'react'
import { ChevronRight } from "lucide-react"
import { RotatingText } from './RotatingText'
import { AnimatedGradientText } from './AnimatedGradientText'

interface AnnouncementBannerProps {
  words: string[]
}

export const AnnouncementBanner = ({ words }: AnnouncementBannerProps) => {
  return (
    <div className="z-10 flex min-h-6 overflow-hidden items-center justify-center group">
      <AnimatedGradientText colors={{
        from: '#ffffff',
        via: '#a1a1aa',
        to: '#d4d4d8'
      }}>
        <div className="flex bg-white/5 overflow-hidden px-6 justify-center pr-4 rounded-full relative py-3 pb-2 items-center">
          <RotatingText words={words} />
          <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </div>
      </AnimatedGradientText>
    </div>
  )
}