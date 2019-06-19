import React, { Component } from 'react';
import Header from './header.js';
import Navbar from './navbar.js';

class App extends Component {
  render() {
    return (
      <div style={{ width: '90%', height: '1000px', backgroundColor: '#dcdfe6b5', marginLeft: 'auto', marginRight: 'auto', marginTop: '30px', marginBottom: '30px', boxShadow: '5px 5px 5px black'}}>
        <Header/>
        <Navbar/>
      </div>
    );
  }
}

export default App;
