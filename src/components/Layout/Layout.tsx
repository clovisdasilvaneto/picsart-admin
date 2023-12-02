'use client'

import React from 'react'
import { LayoutWrapper, LayoutColumn } from './styled'
import Menu from '@/components/Menu'

interface ILayoutProps {
  children: React.ReactNode
}

function Layout({ children }: ILayoutProps) {
  return (
    <LayoutWrapper maxWidth="xl">
      <Menu />
      <LayoutColumn>{children}</LayoutColumn>
    </LayoutWrapper>
  )
}

export default Layout
