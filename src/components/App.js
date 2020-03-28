import React, { Fragment, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Homepage from './Homepage';
import Aboutpage from './Aboutpage';
import Header from './Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/about">
          <Aboutpage />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
