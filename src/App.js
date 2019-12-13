import React, { Component } from 'react'
import NavBar from './component/navbar/NavBar'
import { MuiThemeProvider } from 'material-ui';
import Search from './component/search/Search';

import './App.css';

class App extends Component {

  render() {

    return (
    <MuiThemeProvider>
    <div>
      <NavBar/>
      <Search/>
    </div>
  </MuiThemeProvider>
  );
  }
  
}

export default App;
