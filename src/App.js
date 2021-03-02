import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import theme from './Theme'
import Header from './layout/Header'
import Footer from './layout/Footer'
import ErrorPage from './components/404'
import HomePage from './pages/HomePage'
import AboutPage from './pages/Portfolio/About'
import ResumePage from './pages/Portfolio/Resume'
import Works from './pages/Portfolio/Works'
function App() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [value, setValue] = useState(0)

  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route
            exact
            path='/'
            render={(props) => (
              <HomePage
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path='/portfolio'
            render={(props) => (
              <AboutPage
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path='/resume'
            render={(props) => (
              <ResumePage
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path='/works'
            render={(props) => (
              <Works
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route component={ErrorPage} />
        </Switch>
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </MuiThemeProvider>
  )
}

export default App
