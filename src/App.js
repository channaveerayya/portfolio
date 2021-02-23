import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import theme from './Theme'
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={(props) => <h2>root</h2>} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  )
}

export default App
