import { ReactNode } from 'react'

export interface BaseNavigationItem {
  name: string
  href: string
}

export interface NavigationChild extends BaseNavigationItem {
  icon: ReactNode
  description: string
}

export interface NavigationItem extends BaseNavigationItem {
  children?: NavigationChild[]
}

export interface Navigation {
  primary: NavigationItem[]
  auth: BaseNavigationItem[]
}