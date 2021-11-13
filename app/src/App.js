import React, {Component, useRef} from 'react'
import './App.css';
import {Route, withRouter, Switch, Redirect, BrowserRouter} from "react-router-dom";
import { connect, Provider } from 'react-redux'
import { compose } from 'redux'
import store from './redux/store'
import { MainInfo } from './components/MainInfo/MainInfo';
import { Header } from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {WardsPage} from './components/Pages/WardsPage/WardsPage';
import {TeamPage} from './components/Pages/TeamPage/TeamPage';
import {OrganizationsPage} from './components/Pages/OrganizationsPage/OrganizationsPage';
import {GrathPage} from './components/Pages/GrathPage/GrathPage';
import {GrathLeadPage} from './components/Pages/GrathLeadPage/GrathLeadPage';
import {LoginPage} from './components/Pages/LoginPage/LoginPage';
import {loginUser} from './redux/reducers'
import DocumentsPage from './components/Pages/DocumentsPage/DocumentsPage';

import Cropper from 'react-perspective-cropper'

class App extends Component {
    componentDidMount() {
        const login = localStorage.getItem('login')
        const password = localStorage.getItem('password')
        this.props.loginUser(login, password)
    }

    render() {
        if (!this.props.initialized) {
      return (
        <LoginPage/>
      )
    }else{
      return (
        <div className={'container'}>
          <Header/>
          <div className={'grid-wrapper'}>
            <MainInfo/>
            <div className={'content'}>
              {(() => {
                  switch(this.props.userType) {
                    case "teamlead": 
                      return <Navbar />
                    case "user": 
                      return <Navbar type="user"/>
                    default:      
                      return  <Navbar />
                  }
              })()}
              <div className={'page-wrapper'}>
              {(() => {
                  switch(this.props.userType) {
                    case "teamlead": 
                      return <Switch>
                      <Route path={'/organizations'} component={() => <OrganizationsPage/>}/>
                      <Route path={'/team'} component={() => <TeamPage/>}/>
                      <Route path={'/grath'} component={() => <GrathLeadPage/>}/>
                      <Route path={'/documents'} component={() => <DocumentsPage/>}/>
                      <Route path="*"><Redirect to="/grath" /></Route>
                    </Switch>
                    case "user": 
                      return <Switch>
                      <Route path={'/wards'} component={() => <WardsPage/>}/>
                      <Route path={'/organizations'} component={() => <OrganizationsPage/>}/>
                      <Route path={'/team'} component={() => <TeamPage/>}/>
                      <Route path={'/grath'} component={() => <GrathPage/>}/>
                      <Route path={'/documents'} component={() => <DocumentsPage/>}/>
                      <Route path="*"><Redirect to="/wards" /></Route>
                    </Switch>
                    default:      
                      return  <Navbar />
                  }
              })()}
                
              </div>

            </div>
          </div>
        </div>
      );
    } 
  }
}

const mapStateToProps = (state) => ({
  userType: state.app.userType,
  initialized: state.app.initialized
})

const AppContainer = compose(withRouter , connect(mapStateToProps, { loginUser }))(App)

const MainApp = props => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  </BrowserRouter>
} 


export default MainApp;
