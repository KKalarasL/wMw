import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './App.css';

class Navbar extends Component {
  render() {
    return (
    <div style={{ backgroundColor: 'black', height: '42px'}}>
            <div id='nav' style={{display: 'flex', width: 'min-content', marginLeft: 'auto', marginRight: 'auto'}}>
                <h1 style={{color: 'white', marginLeft: '10px', marginRight: '10px', textShadow: '1px 1px 1px black', position: 'relative', bottom: '14px', fontSize: '25px'}}><NavLink activeClassName="active" activeStyle={{ color: "cyan" }} exact to={"/"} style={{":hover": { background: "green" },color: 'white', textDecoration: 'none'}}>Home</NavLink></h1>
                <h1 style={{color: 'white', marginLeft: '10px', marginRight: '10px', textShadow: '1px 1px 1px black', position: 'relative', bottom: '14px', fontSize: '25px'}}><NavLink activeClassName="active" activeStyle={{ color: "cyan" }} exact to={"/forum"} style={{color: 'white', textDecoration: 'none'}}>Forum</NavLink></h1>
                <h1 style={{color: 'white', marginLeft: '10px', marginRight: '10px', textShadow: '1px 1px 1px black', position: 'relative', bottom: '14px', fontSize: '25px'}}><NavLink activeClassName="active" activeStyle={{ color: "cyan" }} exact to={"/events"} style={{color: 'white', textDecoration: 'none'}}>Events</NavLink></h1>
                <h1 style={{color: 'white', marginLeft: '10px', marginRight: '10px', textShadow: '1px 1px 1px black', position: 'relative', bottom: '14px', fontSize: '25px'}}><NavLink activeClassName="active" activeStyle={{ color: "cyan" }} exact to={"/news"} style={{color: 'white', textDecoration: 'none'}}>News</NavLink></h1>
                <h1 style={{color: 'white', marginLeft: '10px', marginRight: '10px', textShadow: '1px 1px 1px black', position: 'relative', bottom: '14px', fontSize: '25px'}}><NavLink activeClassName="active" activeStyle={{ color: "cyan" }} exact to={"/members"} style={{color: 'white', textDecoration: 'none'}}>Members</NavLink></h1>
                <h1 style={{color: 'white', marginLeft: '10px', marginRight: '10px', textShadow: '1px 1px 1px black', position: 'relative', bottom: '14px', fontSize: '25px'}}><NavLink activeClassName="active" activeStyle={{ color: "cyan" }} exact to={"/gallery"} style={{color: 'white', textDecoration: 'none'}}>Gallery</NavLink></h1>
                <h1 style={{color: 'white', marginLeft: '10px', marginRight: '10px', textShadow: '1px 1px 1px black', position: 'relative', bottom: '14px', fontSize: '25px'}}><NavLink activeClassName="active" activeStyle={{ color: "cyan" }} exact to={"/contact"} style={{color: 'white', textDecoration: 'none'}}>Contact</NavLink></h1>
            </div>
        </div>
    );
    }
}

export default withRouter(Navbar);