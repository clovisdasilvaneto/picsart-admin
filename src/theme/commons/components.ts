import { withInputConfig } from './utils'

export const components = {
  MuiCard: {
    defaultProps: {
      sx: {
        borderRadius: 16,
      },
    },
  },

  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
      sx: {
        '&.MuiButtonBase-root:not(.MuiIconButton-root).MuiButton-sizeLarge': {
          padding: '.8rem 3rem',
          borderRadius: 8,
          textTransform: 'none',
        },
        '&.MuiButtonBase-root:not(.MuiIconButton-root).MuiButton-sizeMedium': {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
    },
  },
  MuiSelect: withInputConfig({
    borderRadius: 8,
  }),
  MuiTextField: withInputConfig(),
  MuiAutocomplete: withInputConfig(),
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
  },
}
