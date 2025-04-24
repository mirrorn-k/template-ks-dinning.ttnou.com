'use client';
import React from 'react';
import { baseTheme } from '@/themes/BaseTheme';
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import deepmerge from 'deepmerge';
// import color from "src/consts/color";

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
        fontSize: '1.5rem',
        fontWeight: 'bold',
        textAlign: 'center',
      },
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            '&.chip': {
              '&.category-chip': {
                width: '100%',
                maxWidth: '200px',
                '&.SNS': {
                  backgroundColor: '#3b5998',
                  color: 'white',
                },
              },
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

const TopThemeProvider: React.FC<ThemeProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default TopThemeProvider;
