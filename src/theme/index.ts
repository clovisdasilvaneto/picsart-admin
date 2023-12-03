import { createTheme, Theme, responsiveFontSizes } from '@mui/material'
import { components } from './commons/components'
import typography from './commons/typography'
import lightVariant from './variants/light'
import darkVariant from './variants/dark'

export enum EThemeVariants {
  LIGHT = 'light',
  DARK = 'dark',
}

const getTheme = (mode: EThemeVariants) => {
  const themeConfig = {
    typography,
    components,
    palette: mode === EThemeVariants.LIGHT ? lightVariant : darkVariant,
  }

  const themeInstance: Theme = createTheme(themeConfig)
  const theme = responsiveFontSizes(themeInstance)

  return theme
}

export default getTheme
