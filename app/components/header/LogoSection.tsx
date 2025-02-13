import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedText } from '../ui/AnimatedText'
import { Logo } from '../ui/Logo'

export function LogoSection() {
  return (
    <motion.div 
      className="flex lg:flex-1 items-center"
      whileHover={{ scale: 1.05 }}
      initial={false}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Link href="/" className="-m-1.5 z-[60] p-1.5 flex items-center">
        <Logo />
        <AnimatedText
          text="Divzoon Network"
          className="text-2xl font-bold"
          gradient
        />
      </Link>
    </motion.div>
  )
}