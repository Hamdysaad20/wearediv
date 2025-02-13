'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { DesktopNavigation } from './DesktopNavigation'
import { MobileNavigation } from './MobileNavigation'
import { MobileMenuButton } from './MobileMenuButton'
import { LogoSection } from './LogoSection'
import { AuthButtons } from './AuthButtons'

export function Header() {
  const [state, setState] = useState({
    mobileMenuOpen: false,
    hasMounted: false
  })

  useEffect(() => {
    setState(prev => ({ ...prev, hasMounted: true }))
  }, [])

  if (!state.hasMounted) {
    return <div className="fixed w-full h-[76px] bg-black/90" />
  }

  const toggleMobileMenu = () => {
    setState(prev => ({
      ...prev,
      mobileMenuOpen: !prev.mobileMenuOpen
    }))
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-black/90 backdrop-blur-sm z-50 border-b border-white/10"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <LogoSection />
        <MobileMenuButton isOpen={state.mobileMenuOpen} onToggle={toggleMobileMenu} />
        <DesktopNavigation />
        <AuthButtons />
      </nav>
      <MobileNavigation 
        isOpen={state.mobileMenuOpen} 
        onClose={() => setState(prev => ({ ...prev, mobileMenuOpen: false }))} 
      />
    </motion.header>
  )
}