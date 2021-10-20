import './App.css';
import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Landing } from './components/Landing.component';

function App({store}) {
  return (
    <Router>
      <Switch>
        <Router path="/">
          <Landing className="app-props" store={store} />
        </Router>
      </Switch>
    </Router>
    
  );
}

export default App;