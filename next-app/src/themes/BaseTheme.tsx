'use client';
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import '@fontsource/noto-serif-jp';
import '@fontsource/noto-sans-jp';
import { grey, lightBlue } from '@mui/material/colors';

// テーマ作成
const theme1 = createTheme({
  palette: {
    primary: {
      main: grey[100],
      contrastText: grey[900],
      light: grey[400],
      dark: grey[700],
    },
    secondary: {
      main: '#CCCCCC',
      contrastText: grey[100],
      light: '#E6E6E6',
      dark: '#999999',
    },
    text: {
      primary: grey[900],
      secondary: grey[100],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 650,
      lg: 1000,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: `'Noto Sans JP', sans-serif`,
    h1: {
      fontFamily: `'Noto Serif JP', sans-serif`,
      fontWeight: 'bold',
    },
    h2: {
      fontFamily: `'Noto Serif JP', sans-serif`,
      fontWeight: '700',
    },
    h3: {
      fontFamily: `'Noto Serif JP', sans-serif`,
    },
    h4: {
      fontFamily: `'Noto Serif JP', sans-serif`,
    },
    h5: {
      fontFamily: `'Noto Serif JP', sans-serif`,
      fontSize: '1.5rem',
    },
    h6: {
      fontFamily: `'Noto Serif JP', sans-serif`,
    },
    body1: {
      fontFamily: `'Noto Serif JP', sans-serif`,
      textAlign: 'left',
      fontWeight: '300',
    },
    body2: {
      fontFamily: `'Noto Serif JP', sans-serif`,
      fontWeight: '200',
    },
  },
});

const theme2 = createTheme({
  ...theme1,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        main: {
          //marginTop: theme1.spacing(8),
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: theme1.spacing(4),
          gridRowStart: 1,
        },
        '&*': {
          opacity: 1,
          transition: 'opacity 0.5s',
          '&.hidden': {
            // 0.5秒かけて透明にする
            opacity: 0,
          },
        },
        li: {
          '&.marker-none': {
            '::marker': {
              color: 'transparent',
            },
          },
          '&.list-style-none': {
            listStyle: 'none',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          color: lightBlue[500],
          '&.atom-Link-Main': {
            fontWeight: '700 ',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.font-tittle': {
            fontFamily: theme1.typography.h1.fontFamily,
          },
          '&.font-text': {
            fontFamily: theme1.typography.body1.fontFamily,
          },
          '&.hashtag': {
            '::before': {
              content: '"#"',
            },
          },
          '&.textAlignCenter': {
            textAlign: 'center',
          },
          '&.textAlignRight': {
            textAlign: 'right',
          },
          '&.textAlignLeft': {
            textAlign: 'left',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          backgroundColor: theme1.palette.primary.main,
          borderRadius: '50%',
          padding: '8px',
          '&:hover': {
            backgroundColor: theme1.palette.primary.light,
          },
        },
      },
    },
  },
});

export const baseTheme = responsiveFontSizes(theme2);

interface ThemeProps {
  children: React.ReactNode;
}

const BaseThemeProvider: React.FC<ThemeProps> = ({ children }) => {
  return (
    <ThemeProvider theme={baseTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default BaseThemeProvider;
