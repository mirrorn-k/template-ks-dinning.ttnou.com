'use client'
import React from 'react'
import { baseTheme } from '@themes/BaseTheme'
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import deepmerge from 'deepmerge'
// import color from "@consts/color";

let theme = createTheme(
  deepmerge(baseTheme, {
    palette: {},
    typography: {
      h1: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      h2: {
        fontSize: '3.5rem',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      h3: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      h4: {
        fontSize: '2.0rem',
        fontWeight: '700',
        textAlign: 'center',
      },
      h5: {
        fontSize: '1.5rem',
        fontWeight: '500',
        textAlign: 'center',
      },
      body1: {
        fontSize: '1.2rem',
        fontWeight: '400',
      },
      body2: {
        fontSize: '1.5rem',
        fontWeight: '400',
      },
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            '&.subcatchcopy': {
              fontWeight: 'bold',
              textAlign: 'center',
            },
          },
        },
      },
    },
  })
)

theme = responsiveFontSizes(theme)

interface ThemeProps {
  children: React.ReactNode
}

const TopThemeProvider: React.FC<ThemeProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default TopThemeProvider
