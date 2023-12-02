import { createTheme, Theme, responsiveFontSizes } from '@mui/material'
import { components } from './commons/components'
import typography from './commons/typography'
import lightVariant from './variants/light'

const themeInstance: Theme = createTheme({
  typography,
  components,
  palette: lightVariant,
})

const theme = responsiveFontSizes(themeInstance)

export default theme
