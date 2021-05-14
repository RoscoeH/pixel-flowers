import React from "react"
import { ThemeProvider } from "theme-ui"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import theme from "./core/theme"
import Home from "./pages/Home"
import Designer from "./pages/Designer"
import Garden from "./pages/Garden"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/designer">
            <Designer />
          </Route>
          <Route exact path="/garden">
            <Garden />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
