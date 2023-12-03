export const withInputConfig = (sx = {}) => ({
  defaultProps: {
    sx: {
      ...sx,
      '.MuiInputBase-root': { borderRadius: 8, paddingLeft: 2 },
      '.MuiInputBase-input': {
        paddingLeft: 2,
        paddingTop: 2,
      },
      '.Mui-disabled:not(p)': {
        cursor: 'not-allowed',
        overflow: 'hidden',
        background: '#f0f0f0',
      },
      'marginBottom': 2,
    },
  },
})
