import React, { Component } from 'react'
import './App.css';
import {Route, withRouter, Switch, BrowserRouter} from "react-router-dom";
import { connect, Provider } from 'react-redux'
import { compose } from 'redux'
import store from './redux/store'

class App extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  } 
}

const AppContainer = compose(withRouter , connect(null))(App)

const MainApp = props => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  </BrowserRouter>
} 


export default MainApp;
