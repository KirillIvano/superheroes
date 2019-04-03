import React, { Component, Fragment } from 'react';
import './App.css';
import Catalog from './catalog/catalog.component';
import Menu from './menu/menu.component';
import Universe from './universe/universe.component';
class App extends Component {
  render() {
    return (
      <Fragment>
        <Catalog universe="dc"/>
        <Menu universe="dc"/>
        <Universe/>
      </Fragment>
    );
  }
}

export default App;
