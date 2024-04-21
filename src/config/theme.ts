declare module '@mui/material/styles' {
  interface Palette {
    ownWhite: Palette['primary'];
    ownBlack: Palette['primary'];
  }
  interface PaletteOptions {
    ownWhite: Palette['primary'];
    ownBlack: Palette['primary'];
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    ownWhite: true;
    ownBlack: true;
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    ownWhite: true;
    ownBlack: true;
  }
}
declare module '@mui/material/CircularProgress' {
  interface CircularProgressPropsColorOverrides {
    ownWhite: true;
    ownBlack: true;
  }
}

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#65B741',
      contrastText: '#fff',
    },
    ownBlack: {
      main: '#000',
      contrastText: '#000',
      dark: '#000',
      light: '#000',
    },
    ownWhite: {
      main: '#fff',
      contrastText: '#fff',
      dark: '#fff',
      light: '#fff',
    },
  },
});

export default theme;
