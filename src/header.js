import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <div style={{ backgroundColor: '#2f77ce', textAlign: 'center', height: '100px' }}>
            <h1 style={{color: 'white', textShadow: '1px 1px 1px black', paddingTop: '25px'}}>..::World's Most Wanted::..</h1>
        </div>
    );
    }
}

export default Header;