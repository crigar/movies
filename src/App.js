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



const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if(serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    // Ignore write errors;
  }
};
const persistedState = loadState();


let store = createStore(todoApp, persistedState, /* preloadedState, */ devToolsEnhancer(
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
));

store.subscribe(() => {
  console.log(store.getState())
  saveState(store.getState());
});

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