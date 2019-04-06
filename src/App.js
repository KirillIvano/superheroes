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
        <Catalog/>
        <Switch>
          <Route path="/(|dc)" component={()=><Fragment><Menu universe="dc"/><Universe universe="dc"/></Fragment>}/>
          <Route exact path="/marvel" component={()=><Fragment><Menu universe="marvel"/><Universe universe="marvel"/></Fragment>}/>
        </Switch>

      </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
