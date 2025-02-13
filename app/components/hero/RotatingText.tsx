'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../../lib/utils'

interface RotatingTextProps {
  words: string[]
}

export const RotatingText = ({ words }: RotatingTextProps) => {
  const [mounted, setMounted] = React.useState(false)
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [words.length])

  if (!mounted) {
    return <div className="h-8 overflow-hidden">{words[0]}</div>
  }

  return (
    <div className="h-8 w-64 flex justify-center overflow-hidden">
      {words.map((word, idx) => (
        <motion.div
          key={word}
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: idx === index ? 1 : 0,
            y: idx === index ? 0 : 50,
          }}
          transition={{ 
            duration: 0.7,
            ease: "easeInOut",
          }}
          className={cn(
            "absolute bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-clip-text text-transparent bg-[length:200%_auto]",
            idx === index ? "visible" : "invisible"
          )}
        >
          {word}
        </motion.div>
      ))}
    </div>
  )
}