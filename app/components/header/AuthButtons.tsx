import Link from 'next/link'

export function AuthButtons() {
  return (
    <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6 items-center">
      <Link
        href="/login"
        className="text-sm font-semibold leading-6 text-white hover:text-gray-300 transition-colors"
      >
        Log in
      </Link>
      <Link
        href="/signup"
        className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition duration-300 ease-out shadow-xl hover:scale-105"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-white via-gray-100 to-white"></span>
        <span className="absolute inset-0 bg-gradient-to-r from-white via-gray-400 to-white opacity-0 transition-opacity duration-300 opacity-100 animate-shimmer"></span>
        <span className="relative flex items-center gap-2">
          Get Started
        </span>
      </Link>
    </div>
  )
}