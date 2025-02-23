import React from 'react'

interface AnimatedGradientTextProps {
  children: React.ReactNode
  colors: {
    from: string
    via: string
    to: string
  }
}

export const AnimatedGradientText = ({ 
  children, 
  colors
}: AnimatedGradientTextProps) => {
  return (
    <span className={`inline-flex overflow-hidden  py-6 animate-text-gradient bg-gradient-to-r from-[${colors.from}] via-[${colors.via}] to-[${colors.to}] bg-[400%_auto] bg-clip-text text-transparent`}>
      {children}
    </span>
  )
}