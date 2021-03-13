import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './homePage/HomePage'
import Awb from './AWB/Awb'
import Progression from './progression/Progression'

const App = () => {
    return (
        <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/awb" exact component={Awb} />
          <Route path="/progression" exact component={Progression} />
        </Switch>
      </BrowserRouter>
    )
}

export default App