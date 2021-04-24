import { ThemeProvider, createMuiTheme } from '@material-ui/core';

import '../styles/globals.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#34C1C0"
    }
  },
  fontFamily: [
    'Roboto',
    'sans-serif'
  ].join(',')
})

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
