'use client';
import React from 'react';
import { baseTheme } from '@themes/BaseTheme';
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import deepmerge from 'deepmerge';
import { grey } from '@mui/material/colors';

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
    typography: {
      body2: {
        fontSize: '0.75rem',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          footer: {
            backgroundColor: baseTheme.palette.secondary.main, // デフォルトの背景色
            color: baseTheme.palette.secondary.contrastText, // デフォルトの文字色
            padding: 2,
            marginTop: 6,
          },
          '& .copyright': {
            fontSize: '0.75rem !important',
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
);

theme = responsiveFontSizes(theme);

interface ThemeProps {
  children: React.ReactNode;
}

const HeaderThemeProvider: React.FC<ThemeProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default HeaderThemeProvider;
