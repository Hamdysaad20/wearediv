import React from 'react'

interface AnimatedGradientTextProps {
  children: React.ReactNode
}

export const AnimatedGradientText = ({ children }: AnimatedGradientTextProps) => {
  return (
    <span className="inline-flex bg-white/5 overflow-hidden px-4 py-6 animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent">
      {children}
    </span>
  )
}