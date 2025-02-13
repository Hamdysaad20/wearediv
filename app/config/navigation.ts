export const navigation = {
  primary: [
    { name: 'Home', href: '/' },
    {
      name: 'Platform',
      href: '#',
      children: [
        { name: 'Dashboard', href: '/platform/dashboard' },
        { name: 'Music Distribution Tools', href: '/platform/distribution' },
        { name: 'Rights Management', href: '/platform/rights' },
        { name: 'Revenue Tracking', href: '/platform/revenue' },
        { name: 'Developer Portal', href: '/platform/developer' },
      ],
    },
    {
      name: 'Services',
      href: '#',
      children: [
        { name: 'For Artists & Managers', href: '/services/artists' },
        { name: 'For Content Creators', href: '/services/creators' },
        { name: 'For Labels & Companies', href: '/services/labels' },
      ],
    },
    {
      name: 'Resources',
      href: '#',
      children: [
        { name: 'Documentation', href: '/resources/docs' },
        { name: 'Blog & News', href: '/resources/blog' },
        { name: 'Tutorials & Case Studies', href: '/resources/tutorials' },
      ],
    },
    {
      name: 'Company',
      href: '#',
      children: [
        { name: 'About Us', href: '/company/about' },
        { name: 'Careers', href: '/company/careers' },
        { name: 'Press', href: '/company/press' },
        { name: 'Contact', href: '/company/contact' },
      ],
    },
    {
      name: 'Support',
      href: '#',
      children: [
        { name: 'Help Center', href: '/support/help' },
        { name: 'Community Forums', href: '/support/community' },
        { name: 'Live Chat', href: '/support/chat' },
      ],
    },
  ],
  auth: [
    { name: 'Login', href: '/login' },
    { name: 'Sign Up', href: '/signup' },
  ],
}

export type NavigationItem = {
  name: string
  href: string
  children?: NavigationItem[]
}

export type Navigation = {
  primary: NavigationItem[]
  auth: NavigationItem[]
}