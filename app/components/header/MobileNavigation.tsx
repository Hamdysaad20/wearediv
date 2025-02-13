import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { navigation } from '../../config/navigation'
import {  NavigationChild } from '../../../types/header'


interface MobileNavigationProps {
  isOpen: boolean
  onClose: () => void
}


export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          <motion.div
            className="lg:hidden fixed inset-x-0 top-[73px] bottom-0 z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="relative h-[calc(100vh-73px)] bg-black/95 border-t border-white/10 overflow-y-auto">
              <div className="p-6 divide-y divide-white/10">
                <MobileMenuItems onClose={onClose} />
                <MobileAuthButtons onClose={onClose} />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

function MobileMenuItems({ onClose }: { onClose: () => void }) {
  return (
    <>
      {navigation.primary.map((item) => (
        <div key={item.name} className="py-6 first:pt-0">
          <Link
            href={item.href}
            onClick={onClose}
            className="block text-base font-semibold text-white hover:text-gray-300"
          >
            {item.name}
          </Link>
          {item.children && (
            <div className="mt-4 pl-4 space-y-4">
              {item.children.map((child) => (
                <Link
                  key={child.name}
                  href={child.href}
                  onClick={onClose}
                  className="group flex items-center gap-3 rounded-lg p-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5"
                >
                  <div className="flex h-9 w-9 flex-none items-center justify-center rounded-lg border border-white/10 bg-white/5 group-hover:border-white/20">
                    {(child as NavigationChild).icon}
                  </div>
                  <div className="flex-1">
                    <span className="block">{child.name}</span>
                    <span className="mt-1 block text-sm text-gray-400">
                      {(child as NavigationChild).description}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  )
}

function MobileAuthButtons({ onClose }: { onClose: () => void }) {
  return (
    <div className="py-6">
      <div className="space-y-4">
        {navigation.auth.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={onClose}
            className={`block text-center text-sm font-semibold ${
              item.name === 'Get Started'
                ? 'bg-white text-black px-6 py-2.5 rounded-lg hover:bg-gray-100'
                : 'text-white hover:text-gray-300'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}