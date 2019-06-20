import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './App.css';

class Navbar extends Component {
  render() {
    return (
    <div style={{ backgroundColor: 'black', height: '42px'}}>
            <div id='nav' style={{display: 'flex', width: 'min-content', marginLeft: 'auto', marginRight: 'auto'}}>
                <h1 style={{color: 'white', marginLeft: '10px', marginRight: '10px', textShadow: '1px 1px 1px black', position: 'relative', bottom: '14px', fontSize: '25px'}}><NavLink activeStyle={{ color: "cyan", textShadow: '2px 2px #cc00ff' }} exact to={"/"} style={{color: 'white', textDecoration: 'none'}}>Home</NavLink></h1>
                <h1 style={{color: 'white', marginLeft: '10px', marginRight: '10px', textShadow: '1px 1px 1px black', position: 'relative', bottom: '14px', fontSize: '25px'}}><NavLink activeStyle={{ color: "cyan", textShadow: '2px 2px #cc00ff' }} exact to={"/news"} style={{color: 'white', textDecoration: 'none'}}>News</NavLink></h1>
                <h1 style={{color: 'white', marginLeft: '10px', marginRight: '10px', textShadow: '1px 1px 1px black', position: 'relative', bottom: '14px', fontSize: '25px'}}><NavLink activeStyle={{ color: "cyan", textShadow: '2px 2px #cc00ff' }} exact to={"/events"} style={{color: 'white', textDecoration: 'none'}}>Events</NavLink></h1>
                <h1 style={{color: 'white', marginLeft: '10px', marginRight: '10px', textShadow: '1px 1px 1px black', position: 'relative', bottom: '14px', fontSize: '25px'}}><NavLink activeStyle={{ color: "cyan", textShadow: '2px 2px #cc00ff' }} exact to={"/forum"} style={{color: 'white', textDecoration: 'none', cursor: 'not-allowed'}} onClick={e => e.preventDefault()}>Forum</NavLink></h1>
                <h1 style={{color: 'white', marginLeft: '10px', marginRight: '10px', textShadow: '1px 1px 1px black', position: 'relative', bottom: '14px', fontSize: '25px'}}><NavLink activeStyle={{ color: "cyan", textShadow: '2px 2px #cc00ff' }} exact to={"/gallery"} style={{color: 'white', textDecoration: 'none'}}>Gallery</NavLink></h1>
                <h1 style={{color: 'white', marginLeft: '10px', marginRight: '10px', textShadow: '1px 1px 1px black', position: 'relative', bottom: '14px', fontSize: '25px'}}><NavLink activeStyle={{ color: "cyan", textShadow: '2px 2px #cc00ff' }} exact to={"/members"} style={{color: 'white', textDecoration: 'none'}}>Members</NavLink></h1>
                <h1 style={{color: 'white', marginLeft: '10px', marginRight: '10px', textShadow: '1px 1px 1px black', position: 'relative', bottom: '14px', fontSize: '25px'}}><NavLink activeStyle={{ color: "cyan", textShadow: '2px 2px #cc00ff' }} exact to={"/contact"} style={{color: 'white', textDecoration: 'none'}}>Contact</NavLink></h1>
            </div>
        </div>
    );
    }
}

export default withRouter(Navbar);