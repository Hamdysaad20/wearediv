'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../../lib/utils'

interface SparkButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}

export const SparkButton = ({ children, variant = 'primary' }: SparkButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-10 py-4 text-base font-medium transition duration-300 ease-out shadow-xl",
        variant === 'primary' 
          ? "bg-white text-black" 
          : "border border-white/10 text-white hover:bg-white/5"
      )}
    >
      {variant === 'primary' && (
        <>
          <span className="absolute inset-0 bg-gradient-to-r from-white via-gray-100 to-white"></span>
          <span className="absolute inset-0 bg-gradient-to-r from-white via-gray-400 to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 animate-shimmer"></span>
        </>
      )}
      <span className="relative flex items-center gap-3">
        {children}
      </span>
    </motion.button>
  )
}