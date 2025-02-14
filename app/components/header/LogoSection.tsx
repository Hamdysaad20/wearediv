import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedText } from '../ui/AnimatedText'
import { Logo } from '../ui/Logo'

interface LogoSectionProps {
  logoWidth?: number
  logoHeight?: number
  logoColor?: string
  logoClassName?: string
  textGradientFrom?: string
  textGradientTo?: string
  className?: string
  textClassName?: string
  text?: string
}

export function LogoSection({ 
  logoWidth = 28,
  logoHeight = 28,
  logoColor = "white",
  logoClassName = "mr-2",
  textGradientFrom = "white",
  textGradientTo = "gray-400",
  className = "",
  textClassName = "text-2xl font-bold",
  text = "Divzoon Network"
}: LogoSectionProps) {
  return (
    <motion.div 
      className={`flex items-center ${className}`}
      whileHover={{ scale: 1.05 }}
      initial={false}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Link href="/" className="-m-1.5 z-[60] p-1.5 flex items-center">
        <Logo 
          width={logoWidth}
          height={logoHeight}
          color={logoColor}
          className={logoClassName}
        />
        <AnimatedText
          text={text}
          className={textClassName}
          gradient
          gradientFrom={textGradientFrom}
          gradientTo={textGradientTo}
        />
      </Link>
    </motion.div>
  )
}