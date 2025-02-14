'use client'

import { motion } from 'framer-motion'
import { clsx } from 'clsx'  // Add this import

interface AnimatedTextProps {
  text: string
  className?: string
  gradient?: boolean
  gradientFrom?: string
  gradientTo?: string
}

export function AnimatedText({ 
  text, 
  className, 
  gradient = false,
  gradientFrom = 'white',
  gradientTo = 'gray-400'
}: AnimatedTextProps) {
  return (
    <motion.span
      className={clsx(
        'inline-block',
        gradient ? `bg-gradient-to-r from-${gradientFrom} to-${gradientTo} bg-clip-text text-transparent` : '',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {text}
    </motion.span>
  )
}