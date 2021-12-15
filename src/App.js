import './App.css';
import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Landing } from './components/Landing.component';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux'
import { todoApp } from './redux/reducers/index';
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(todoApp, /* preloadedState, */ devToolsEnhancer(
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
));


function App() {
  return (
    <Provider store={store}>
        <Router>
          <Switch>
            <Router path="/">
              <Landing className="app-props"/>
            </Router>
          </Switch>
      </Router>
    </Provider>
      
    
  );
}

export default App;