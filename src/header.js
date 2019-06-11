import React, { Component } from 'react';
import wmw from './images/wmw3.png';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <div style={{ backgroundColor: '#2f77ce', textAlign: 'center', height: '60px', display: 'flex' }}>
            <NavLink to="/"><img src={wmw} alt="wmw" width="100" height="100" style={{position: "relative", left: "5px"}}/></NavLink>
            <h1 style={{color: 'white', textShadow: '1px 1px 1px black', marginRight: 'auto', marginLeft: 'auto', width: 'auto', position: 'relative', right: '55px', bottom: '10px'}}>..::World's Most Wanted::..</h1>
        </div>
    );
    }
}

export default withRouter(Header);