import { Menu, X } from 'lucide-react'

interface MobileMenuButtonProps {
  isOpen: boolean
  onToggle: () => void
  className?: string
}

export function MobileMenuButton({ isOpen, onToggle, className = '' }: MobileMenuButtonProps) {
  return (
    <div className={`flex lg:hidden relative z-[60] ${className}`}>
      <button
        type="button"
        className="text-white hover:text-gray-300 transition-colors"
        onClick={onToggle}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>
    </div>
  )
}