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
        <div style={{display: 'block', width: '444px', height: '350px', fontSize: '20px', margin: '100px auto', backgroundColor: '#e6e9ed', paddingTop: '10px', paddingLeft: '35px', border: '20px solid #005b88', borderRadius: '20px', borderStyle: 'double'}}>
        <form action="action_page.php">
          <div>
          <label for="name" style={{color: '#FF00FF', textShadow: '1px 1px black'}}>Name</label>
          <input class="textfield" type="text" id="name" name="name" placeholder="Your Name" maxlength="25" style={{fontSize: '20px', width: '400px', backgroundColor: 'black', color: 'white'}}/>
          </div>
          <div>
          <label for="email" style={{color: '#FF00FF', textShadow: '1px 1px black'}}>Email</label>
          <input class="emailfield" type="email" id="email" name="email" placeholder="Your Email Address" maxlength="25" style={{fontSize: '20px', width: '400px', backgroundColor: 'black', color: 'white'}}/>
          </div>
          <div>
          <label for="sub" style={{color: '#FF00FF', textShadow: '1px 1px black'}}>Subject</label>
          <input class="textfield" type="text" id="sub" name="subject" placeholder="Your Subject" maxlength="25" style={{fontSize: '20px', width: '400px', backgroundColor: 'black', color: 'white'}}/>
          </div>
          <div>
          <label for="msg" style={{color: '#FF00FF', textShadow: '1px 1px black'}}>Message</label>
          <textarea id="msg" name="message" placeholder="Type Your Message Here" maxlength="300" style={{fontSize: '20px', width: '400px', height: '100px', backgroundColor: 'black', color: 'white'}}></textarea>
          </div>
          <input class="submitfield" type="submit" value="Submit" style={{fontSize: '20px', backgroundColor: '#005b88', color: 'white'}}/>
        </form>
      </div>

      </div>
    );
  }
}

export default App;
