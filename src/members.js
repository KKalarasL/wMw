import React, { Component } from 'react';
import Header from './header.js';
import Navbar from './navbar.js';

class App extends Component {
  render() {
    return (
      <div style={{ width: '90%', height: '1000px', backgroundColor: '#dcdfe6b5', marginLeft: 'auto', marginRight: 'auto', marginTop: '30px', marginBottom: '30px', boxShadow: '5px 5px 5px black'}}>
        <Header/>
        <hr style={{border: '1px solid #cc00ff', marginTop: '0px', marginBottom: '0px', boxShadow: '1px 1px 20px 2px #2f77ce'}}/>
        <Navbar/>
        <hr style={{border: '1px solid #cc00ff', marginTop: '0px', marginBottom: '0px', boxShadow: '1px 1px 20px 2px #2f77ce'}}/>
      </div>
    );
  }
}

export default App;
