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

let theme = createTheme(
  deepmerge(baseTheme, {
    palette: {},
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            /*
            posission: 'sticky',
            top: 0,
            left: 0,
            */
            backgroundColor: baseTheme.palette.secondary.main, // デフォルトの背景色
            color: baseTheme.palette.secondary.contrastText, // デフォルトの文字色
            boxShadow: 'none',
            height: 'inherit',
            //padding: '40px 15px 15px 15px',
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            borderRadius: '50%',
            padding: baseTheme.spacing(1),
            backgroundColor: 'inherit',
            color: baseTheme.palette.secondary.contrastText,
            '&:hover': {
              backgroundColor: baseTheme.palette.secondary.light,
            },
            '& svg': {
              color: baseTheme.palette.secondary.contrastText, // 子要素のアイコン色
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
