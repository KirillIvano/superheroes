import React, { Component, Fragment } from 'react';
import './App.css';
import Catalog from './catalog/catalog.component';
import Menu from './menu/menu.component';
import Universe from './universe/universe.component';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Fragment>
        <Catalog universe="dc"/>
        <Switch>
          <Route path="/(|dc)" component={()=><Menu universe="dc"/>}/>
          <Route exact path="/marvel" component={()=><Menu universe="marvel"/>}/>
        </Switch>
        <Universe/>
      </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
