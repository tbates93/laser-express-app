import React, { Component } from 'react';
import './App.css';

import { HashRouter, Route } from 'react-router-dom'

import Login from './components/login/Login'
import Dashboard from "./components/dashboard/Dashboard"
import NavBar from "./components/navbar/NavBar"
import Customers from "./components/customers/Customers"
import Repairs from "./components/repairs/Repairs"
import Deliveries from "./components/deliveries/Deliveries"
import Orders from "./components/orders/Orders"
import Insight from "./components/insight/Insight"
import Toners from "./components/toners/Toners"
import LaserExpress from "./components/staticsite/LaserExpress"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  render() {
    return (
      <div>

        <HashRouter>
          <MuiThemeProvider>
          {/* window.location.href.search('static') === -1 ? <NavBar/> : null */}
            <Route component={Login} exact path='/' />
            <Route component={Dashboard} path='/dashboard' />
            <Route component={Deliveries} path='/deliveries' />
            <Route component={Customers} path="/customers" />
            <Route component={Repairs} path="/repairs" />
            <Route component={Orders} path="/orders" />
            <Route component={Insight} path="/insight" />
            <Route component={Toners} path="/toners" />
            <Route component={LaserExpress} path="/static"/>
          </MuiThemeProvider>
        </HashRouter>
      </div>

    );
  }
}

export default App;
