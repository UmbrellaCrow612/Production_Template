import { createTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = createTheme({
  palette: {},
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1536,
    },
  },
})

export default theme
