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
import { grey } from '@mui/material/colors'

let theme = createTheme(
  deepmerge(baseTheme, {
    palette: {
      primary: {
        main: grey[700],
        contrastText: grey[900],
      },
      secondary: {
        main: '#ff0080',
      },
    },
    components: {
      MuiToolbar: {
        styleOverrides: {
          root: {
            flexGrow: 1,
            textAligin: 'left',
            borderBottom: `1px solid ${'black'}`,
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            borderRadius: '50%',
            padding: baseTheme.spacing(1),
            backgroundColor: grey[900],
            color: grey[50],
            '&:hover': {
              backgroundColor: 'gray',
            },
            '& svg': {
              color: 'white', // 子要素のアイコン色
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

const HeaderThemeProvider: React.FC<ThemeProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default HeaderThemeProvider
