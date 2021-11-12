import React, { Component } from 'react'
import './App.css';
import {Route, withRouter, Switch, BrowserRouter} from "react-router-dom";
import { connect, Provider } from 'react-redux'
import { compose } from 'redux'
import store from './redux/store'
import { MainInfo } from './components/MainInfo/MainInfo';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { WardsPage } from './components/Pages/WardsPage/WardsPage';
import { OrganizationsPage } from './components/Pages/OrganizotionsPage/OrganizationsPage';

class App extends Component {
  render() {
    return (
      <div className={'container'}>
        <Header/>
        <div className={'grid-wrapper'}>
          <MainInfo/>
          <div className={'content'}>
            <Navbar/>
            <div className={'page-wrapper'}>
              <Switch>
                <Route path={'/wards'} component={() => <WardsPage/>}/>
                <Route path={'/organizations'} component={() => <OrganizationsPage/>}/>
              </Switch>
            </div>
          </div>
        </div>
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
