import React, { Component } from 'react';
import Header from './header.js';
import Navbar from './navbar.js';

class App extends Component {
  render() {
    return (
      <div style={{ width: '90%', height: '1000px', backgroundColor: '#dcdfe6f0', marginLeft: 'auto', marginRight: 'auto', marginTop: '30px', marginBottom: '30px', boxShadow: '5px 5px 5px black'}}>
        <Header/>
        <Navbar/>
        <div style={{display: 'flex'}}>
          <div style={{width: '65%', height: '500px', margin: '45px 0px 0px 45px', borderRadius: '25px', boxShadow: '2px 4px 2px #fb4646', backgroundColor: '#000000c4'}}/>
          <div style={{width: '25%', height: '500px', margin: '45px 3% 0px', borderRadius: '25px', boxShadow: '2px 4px 2px #19cff9', backgroundColor: '#000000c4'}}/>
        </div>
        <div style={{width: '93%', height: '300px', margin: '30px auto 0px', borderRadius: '25px', boxShadow: '2px 4px 2px #8900ff', backgroundColor: '#000000c4'}}/>
      </div>
    );
  }
}

export default App;
