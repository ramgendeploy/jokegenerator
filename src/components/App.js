import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Homepage from './Homepage';
import Aboutpage from './Aboutpage';
import Header from './Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/jokegenerator/about">
          <Aboutpage />
        </Route>
        <Route path="/jokegenerator">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
