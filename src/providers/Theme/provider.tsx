'use client'

import React, { useCallback } from 'react'

import GlobalStyles from '@/theme/globals'
import { ThemeProvider as MaterialTheme } from '@mui/material/styles'
import { EThemeVariants } from '@/theme'
import { CssBaseline } from '@mui/material'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import getTheme from '@/theme'

interface IThemeProviderComponentProps {
  children: React.ReactNode
}

interface IThemeModeContext {
  toggleThemeMode: () => void
}

export const themeModeContext = React.createContext<IThemeModeContext>({ toggleThemeMode: () => null })

function ThemeProviderComponent({ children }: IThemeProviderComponentProps) {
  const [mode, setMode] = React.useState<EThemeVariants>(EThemeVariants.LIGHT)

  const toggleThemeMode = useCallback(() => {
    setMode((prevMode) => (prevMode === EThemeVariants.LIGHT ? EThemeVariants.DARK : EThemeVariants.LIGHT))
  }, [])

  const theme = React.useMemo(() => getTheme(mode), [mode])

  return (
    <themeModeContext.Provider value={{ toggleThemeMode }}>
      <MaterialTheme theme={theme}>
        <ThemeProvider theme={theme as DefaultTheme}>
          <CssBaseline />
          <GlobalStyles />

          {children}
        </ThemeProvider>
      </MaterialTheme>
    </themeModeContext.Provider>
  )
}

export default ThemeProviderComponent
