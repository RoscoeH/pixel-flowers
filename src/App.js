import React from "react"
import { ThemeProvider } from "theme-ui"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"

import theme from "./core/theme"
import Home from "./pages/Home"
import Designer from "./pages/Designer"
import Flower from "./pages/Flower"
import Garden from "./pages/Garden"
import NotFoundPage from "./pages/NotFoundPage"

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/designer/:id">
              <Designer />
            </Route>
            <Route exact path="/designer">
              <Designer />
            </Route>
            <Route exact path="/flower/:id">
              <Flower />
            </Route>
            <Route exact path="/flower">
              <Flower />
            </Route>
            <Route exact path="/garden">
              <Garden />
            </Route>
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
