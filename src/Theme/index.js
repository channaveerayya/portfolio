import { createMuiTheme } from '@material-ui/core/styles'
const rainStorm = '#264653',
  estateBlue = '#1d3557',
  azureTide = '#2a9d8f',
  crystal = '#a8dadc',
  winterOasis = '#f1faee',
  warpiendGrey = '#6d6875'
export default createMuiTheme({
  palette: {
    common: {
      rainStorm,
      estateBlue,
      azureTide,
      crystal,
      winterOasis,
    },
    primary: {
      main: estateBlue,
    },
    secondary: {
      main: azureTide,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      color: 'white',
      fontSize: '1rem',
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white',
    },
    h2: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: estateBlue,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: 'Pacifico',
      fontSize: '2.5rem',
      color: estateBlue,
    },
    h4: {
      fontFamily: 'Raleway',
      fontSize: '1.75rem',
      color: estateBlue,
      fontWeight: 700,
    },
    h6: {
      fontWeight: 500,
      fontFamily: 'Raleway',
      color: estateBlue,
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: warpiendGrey,
    },
    subtitle2: {
      color: 'white',
      fontWeight: 300,
      fontSize: '1.25rem',
    },
    body1: {
      fontSize: '1.25rem',
      color: warpiendGrey,
      fontWeight: 300,
    },
    caption: {
      fontSize: '1rem',
      fontWeight: 300,
      color: warpiendGrey,
    },
    learnButton: {
      borderColor: estateBlue,
      borderWidth: 2,
      textTransform: 'none',
      color: estateBlue,
      borderRadius: 50,
      fontFamily: 'Roboto',
      fontWeight: 'bold',
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: estateBlue,
        fontSize: '1rem',
      },
    },
    MuiInput: {
      root: {
        color: warpiendGrey,
        fontWeight: 300,
      },
      underline: {
        '&:before': {
          borderBottom: `2px solid ${estateBlue}`,
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `2px solid ${estateBlue}`,
        },
      },
    },
  },
})
