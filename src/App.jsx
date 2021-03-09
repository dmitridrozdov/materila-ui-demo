import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './homePage/HomePage'
import Awb from './AWB/Awb'

const App = () => {
    return (
        <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/awb" exact component={Awb} />
        </Switch>
      </BrowserRouter>
    )
}

export default App