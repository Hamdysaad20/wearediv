import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { navigation } from '../../config/navigation'
import { NavigationItem, NavigationChild } from '../../../types/header'

export function DesktopNavigation() {
  return (
    <div className="hidden lg:flex lg:gap-x-4">
      {navigation.primary.map((item) => (
        <DesktopMenuItem key={item.name} item={item as NavigationItem} />
      ))}
    </div>
  )
}

function DesktopMenuItem({ item }: { item: NavigationItem }) {
  return (
    <motion.div
      className="relative group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={item.href}
        className="flex items-center text-sm font-semibold leading-6 text-white hover:text-gray-300 transition-colors"
      >
        {item.name}
        {item.children && (
          <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
        )}
      </Link>
      {item.children && (
        <DesktopSubmenu>
          {item.children}
        </DesktopSubmenu>
      )}
    </motion.div>
  )
}

function DesktopSubmenu({ children }: { children: NavigationChild[] }) {
  return (
    <div className="absolute left-1/2 mt-2 w-[800px] -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
      <div className="mt-4 rounded-xl bg-black/95 p-8 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl">
        <div className="grid grid-cols-2 gap-8">
          {children.map((child) => (
            <Link
              key={child.name}
              href={child.href}
              className="group/item flex items-start gap-4 rounded-lg p-4 transition-colors hover:bg-white/5 backdrop-blur-xl"
            >
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg border border-white/10 bg-white/5 group-hover/item:border-white/20 group-hover/item:bg-white/10">
                {child.icon}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-white text-base">
                  {child.name}
                </div>
                <p className="mt-1 text-sm text-gray-400 line-clamp-2">
                  {child.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}