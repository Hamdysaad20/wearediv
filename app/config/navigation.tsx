import React from 'react';
import {
  LayoutDashboard,
  Music,
  Shield,
  LineChart,
  Code,
  Users,
  Video,
  Building2,
  BookOpen,
  Newspaper,
  GraduationCap,
  Building,
  Briefcase,
  HelpCircle,
  Users2,
  MessagesSquare
} from 'lucide-react'

// Export the interface so it can be used in other files
export interface NavigationItem {
  name: string
  href: string
  description?: string
  icon?: React.ReactElement
  children?: readonly NavigationItem[]
}

interface NavigationConfig {
  primary: readonly NavigationItem[]
  auth: readonly NavigationItem[]
}

export const navigation: NavigationConfig = {
  primary: [
    { name: 'Home', href: '/' },
    {
      name: 'Platform',
      href: '#',
      children: [
        {
          name: 'Dashboard',
          description: 'Get a bird\'s-eye view of your music',
          href: '/platform/dashboard',
          icon: <LayoutDashboard className="w-6 h-6" />  
        },
        {
          name: 'Music Distribution',
          description: 'Distribute your music worldwide',
          href: '/platform/distribution',
          icon: <Music className="w-6 h-6" />
        },
        {
          name: 'Rights Management',
          description: 'Protect and manage your rights',
          href: '/platform/rights',
          icon: <Shield className="w-6 h-6" />
        },
        {
          name: 'Revenue Tracking',
          description: 'Monitor your earnings and analytics',
          href: '/platform/revenue',
          icon: <LineChart className="w-6 h-6" />
        },
        {
          name: 'Developer Portal',
          description: 'Access APIs and development tools',
          href: '/platform/developer',
          icon: <Code className="w-6 h-6" />
        }
      ]
    },
    {
      name: 'Services',
      href: '#',
      children: [
        {
          name: 'For Artists & Managers',
          description: 'Tools and services for music professionals',
          href: '/services/artists',
          icon: <Users className="w-6 h-6" />
        },
        {
          name: 'For Content Creators',
          description: 'Solutions for digital content creation',
          href: '/services/creators',
          icon: <Video className="w-6 h-6" />
        },
        {
          name: 'For Labels & Companies',
          description: 'Enterprise-level music solutions',
          href: '/services/labels',
          icon: <Building2 className="w-6 h-6" />
        }
      ]
    },
    {
      name: 'Resources',
      href: '#',
      children: [
        {
          name: 'Documentation',
          description: 'Guides and technical documentation',
          href: '/resources/docs',
          icon: <BookOpen className="w-6 h-6" />
        },
        {
          name: 'Blog & News',
          description: 'Latest updates and industry insights',
          href: '/resources/blog',
          icon: <Newspaper className="w-6 h-6" />
        },
        {
          name: 'Tutorials',
          description: 'Learn from our experts',
          href: '/resources/tutorials',
          icon: <GraduationCap className="w-6 h-6" />
        }
      ]
    },
    {
      name: 'Company',
      href: '#',
      children: [
        {
          name: 'About Us',
          description: 'Our story and mission',
          href: '/company/about',
          icon: <Building className="w-6 h-6" />
        },
        {
          name: 'Careers',
          description: 'Join our team',
          href: '/company/careers',
          icon: <Briefcase className="w-6 h-6" />
        },
        {
          name: 'Press',
          description: 'News and media resources',
          href: '/company/press',
          icon: <Newspaper className="w-6 h-6" />
        }
      ]
    },
    {
      name: 'Support',
      href: '#',
      children: [
        {
          name: 'Help Center',
          description: 'Find answers to your questions',
          href: '/support/help',
          icon: <HelpCircle className="w-6 h-6" />
        },
        {
          name: 'Community',
          description: 'Join our community forums',
          href: '/support/community',
          icon: <Users2 className="w-6 h-6" />
        },
        {
          name: 'Live Chat',
          description: 'Get instant support',
          href: '/support/chat',
          icon: <MessagesSquare className="w-6 h-6" />
        }
      ]
    }
  ],
  auth: [
    { name: 'Login', href: '/login' },
    { name: 'Get Started', href: '/signup' }
  ]
} 