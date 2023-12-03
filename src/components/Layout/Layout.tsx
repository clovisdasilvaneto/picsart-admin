'use client'

import React from 'react'
import { LayoutWrapper, LayoutColumn } from './styled'
import Menu from '@/components/Menu'
import PageTransition from '@/infra/PageTransition/PageTransition'

interface ILayoutProps {
  children: React.ReactNode
}

function Layout({ children }: ILayoutProps) {
  return (
    <PageTransition>
      <LayoutWrapper maxWidth="xl">
        <Menu />

        <LayoutColumn>{children}</LayoutColumn>
      </LayoutWrapper>
    </PageTransition>
  )
}

export default Layout
