'use client'

import React from 'react'

import GlobalStyles from '@/theme/globals'
import { ThemeProvider as MaterialTheme } from '@mui/material/styles'
import theme from '@/theme'
import { CssBaseline } from '@mui/material'
import { DefaultTheme, ThemeProvider } from 'styled-components'

interface ThemeProviderComponentProps {
  children: React.ReactNode
}

function ThemeProviderComponent({ children }: ThemeProviderComponentProps) {
  return (
    <MaterialTheme theme={theme}>
      <ThemeProvider theme={theme as DefaultTheme}>
        <CssBaseline />
        <GlobalStyles />

        {children}
      </ThemeProvider>
    </MaterialTheme>
  )
}

export default ThemeProviderComponent
