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
    palette: {},
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            posission: 'sticky',
            top: 0,
            left: 0,
            backgroundColor: 'rgba(255,255,255, 1)', // デフォルトの背景色
            color: grey[900], // デフォルトの文字色
            boxShadow: 'none',
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            borderRadius: '50%',
            padding: baseTheme.spacing(1),
            backgroundColor: 'black',
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
