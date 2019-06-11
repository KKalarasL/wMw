import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
        <div style={{ backgroundColor: 'black', height: '42px'}}>
            <div style={{display: 'flex', width: 'min-content', marginLeft: 'auto', marginRight: 'auto'}}>
                <h1 style={{color: 'white', marginLeft: '10px', marginRight: '10px', textShadow: '1px 1px 1px black', position: 'relative', bottom: '22px'}}>Home</h1>
                <h1 style={{color: 'white', marginLeft: '10px', marginRight: '10px', textShadow: '1px 1px 1px black', position: 'relative', bottom: '22px'}}>News</h1>
                <h1 style={{color: 'white', marginLeft: '10px', marginRight: '10px', textShadow: '1px 1px 1px black', position: 'relative', bottom: '22px'}}>Events</h1>
                <h1 style={{color: 'white', marginLeft: '10px', marginRight: '10px', textShadow: '1px 1px 1px black', position: 'relative', bottom: '22px'}}>Members</h1>
                <h1 style={{color: 'white', marginLeft: '10px', marginRight: '10px', textShadow: '1px 1px 1px black', position: 'relative', bottom: '22px'}}>Contact</h1>
            </div>
        </div>
    );
    }
}

export default Navbar;