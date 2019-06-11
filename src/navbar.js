import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
    <div style={{ backgroundColor: 'black', height: '42px'}}>
            <div style={{display: 'flex', width: 'min-content', marginLeft: 'auto', marginRight: 'auto'}}>
                <h1 style={{color: 'white', marginLeft: '10px', marginRight: '10px', textShadow: '1px 1px 1px black', position: 'relative', bottom: '14px', fontSize: '25px'}}><NavLink activeClassName="active" to={"/"} style={{color: 'white', textDecoration: 'none'}}>Home</NavLink></h1>
                <h1 style={{color: 'white', marginLeft: '10px', marginRight: '10px', textShadow: '1px 1px 1px black', position: 'relative', bottom: '14px', fontSize: '25px'}}><NavLink activeClassName="active" to={"/forum"} style={{color: 'white', textDecoration: 'none'}}>Forum</NavLink></h1>
                <h1 style={{color: 'white', marginLeft: '10px', marginRight: '10px', textShadow: '1px 1px 1px black', position: 'relative', bottom: '14px', fontSize: '25px'}}><NavLink activeClassName="active" to={"/events"} style={{color: 'white', textDecoration: 'none'}}>Events</NavLink></h1>
                <h1 style={{color: 'white', marginLeft: '10px', marginRight: '10px', textShadow: '1px 1px 1px black', position: 'relative', bottom: '14px', fontSize: '25px'}}><NavLink activeClassName="active" to={"/news"} style={{color: 'white', textDecoration: 'none'}}>News</NavLink></h1>
                <h1 style={{color: 'white', marginLeft: '10px', marginRight: '10px', textShadow: '1px 1px 1px black', position: 'relative', bottom: '14px', fontSize: '25px'}}><NavLink activeClassName="active" to={"/members"} style={{color: 'white', textDecoration: 'none'}}>Members</NavLink></h1>
                <h1 style={{color: 'white', marginLeft: '10px', marginRight: '10px', textShadow: '1px 1px 1px black', position: 'relative', bottom: '14px', fontSize: '25px'}}><NavLink activeClassName="active" to={"/gallery"} style={{color: 'white', textDecoration: 'none'}}>Gallery</NavLink></h1>
                <h1 style={{color: 'white', marginLeft: '10px', marginRight: '10px', textShadow: '1px 1px 1px black', position: 'relative', bottom: '14px', fontSize: '25px'}}><NavLink activeClassName="active" to={"/contact"} style={{color: 'white', textDecoration: 'none'}}>Contact</NavLink></h1>
            </div>
        </div>
    );
    }
}

export default withRouter(Navbar);