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
        <div className="flex items-center justify-between w-full">
          <LogoSection 
            logoWidth={28}
            logoHeight={28}
            logoColor="white"
            logoClassName="mr-2"
            textGradientFrom="white"
            textGradientTo="gray-400"
            textClassName="text-xl font-bold"
          />
          <div className="hidden lg:flex flex-1 justify-center">
            <DesktopNavigation />
          </div>
          <div className="flex items-center">
            <AuthButtons />
            <MobileMenuButton 
              isOpen={state.mobileMenuOpen} 
              onToggle={toggleMobileMenu} 
              className="ml-4" 
            />
          </div>
        </div>
      </nav>
      <MobileNavigation 
        isOpen={state.mobileMenuOpen} 
        onClose={() => setState(prev => ({ ...prev, mobileMenuOpen: false }))} 
      />
    </motion.header>
  )
}