import React, { Component } from 'react';
import Header from './header.js';
import Navbar from './navbar.js';
import Slider from "react-slick";
import news1 from "./images/1.jpg";
import news2 from "./images/2.jpg";
import news3 from "./images/3.jpg";
import news4 from "./images/4.jpg";

class App extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
    };
    return (
      <div style={{ width: '90%', height: 'auto', backgroundColor: '#dcdfe6b5', margin: '30px auto', paddingBottom: '40px', boxShadow: '5px 5px 5px black'}}>
        <Header/>
        <hr style={{border: '1px solid #cc00ff', marginTop: '0px', marginBottom: '0px', boxShadow: '1px 1px 20px 2px #2f77ce'}}/>
        <Navbar/>
        <hr style={{border: '1px solid #cc00ff', marginTop: '0px', marginBottom: '0px', boxShadow: '1px 1px 20px 2px #2f77ce'}}/>
        <div style={{display: 'flex'}}>
          <div style={{width: '65%', height: '500px', margin: '25px 0px 0px 45px', borderRadius: '25px 0px 0px 0px', boxShadow: '6px 6px 10px #fb4646', backgroundColor: '#000000', border: '1px solid #fb4646'}}>
            <h3 style={{color: 'white', textAlign: 'center'}}>Latest News</h3>
        <Slider {...settings}>
        <div class="container" style={{margin: '0px auto'}}>
          <img src={news1} width="100%" height="438px" style={{margin: '0px auto', display: 'block'}}/>
          <div class="overlay">Synthwave out of 80's</div>
        </div>
        <div class="container" style={{margin: '0px auto'}}>
          <img src={news2} width="100%" height="438px" style={{margin: '0px auto', display: 'block'}}/>
          <div class="overlay">Tron: Evolution Removed from Steam?!</div>
        </div>
        <div class="container" style={{margin: '0px auto'}}>
          <img src={news3} width="100%" height="438px" style={{margin: '0px auto', display: 'block'}}/>
          <div class="overlay">Hyperdrive Music</div>
        </div>
        <div class="container" style={{margin: '0px auto'}}>
          <img src={news4} width="100%" height="438px" style={{margin: '0px auto'}}/>
          <div class="overlay">Trojan Zeus Story</div>
        </div>
        </Slider>
          </div>
          <div style={{width: '25%', height: '500px', margin: '25px 3% 0px', borderRadius: '0px 25px 0px 0px', boxShadow: '6px 6px 10px 5px #19cff9', backgroundColor: '#000000', border: '1px solid #19cff9'}}>
            <h3 style={{color: 'white', textAlign: 'center'}}>Leaderboards</h3>
            <ol style={{color: 'white'}}>
              <li><div style={{display: 'flex', height: '30px'}}><p>KKLStyl3:</p><p style={{width: '67%', textAlign: 'right'}}>1000</p></div></li>
              <li><div style={{display: 'flex', height: '30px'}}><p>KKLStyl3:</p><p style={{width: '67%', textAlign: 'right'}}>1000</p></div></li>
              <li><div style={{display: 'flex', height: '30px'}}><p>KKLStyl3:</p><p style={{width: '67%', textAlign: 'right'}}>1000</p></div></li>
              <li><div style={{display: 'flex', height: '30px'}}><p>KKLStyl3:</p><p style={{width: '67%', textAlign: 'right'}}>1000</p></div></li>
              <li><div style={{display: 'flex', height: '30px'}}><p>KKLStyl3:</p><p style={{width: '67%', textAlign: 'right'}}>1000</p></div></li>
              <li><div style={{display: 'flex', height: '30px'}}><p>KKLStyl3:</p><p style={{width: '67%', textAlign: 'right'}}>1000</p></div></li>
              <li><div style={{display: 'flex', height: '30px'}}><p>KKLStyl3:</p><p style={{width: '67%', textAlign: 'right'}}>1000</p></div></li>
              <li><div style={{display: 'flex', height: '30px'}}><p>KKLStyl3:</p><p style={{width: '67%', textAlign: 'right'}}>1000</p></div></li>
              <li><div style={{display: 'flex', height: '30px'}}><p>KKLStyl3:</p><p style={{width: '67%', textAlign: 'right'}}>1000</p></div></li>
              <li><div style={{display: 'flex', height: '30px'}}><p>KKLStyl3:</p><p style={{width: '67%', textAlign: 'right'}}>1000</p></div></li>
              <li><div style={{display: 'flex', height: '30px'}}><p>KKLStyl3:</p><p style={{width: '67%', textAlign: 'right'}}>1000</p></div></li>
              <li><div style={{display: 'flex', height: '30px'}}><p>KKLStyl3:</p><p style={{width: '67%', textAlign: 'right'}}>1000</p></div></li>
              <li><div style={{display: 'flex', height: '30px'}}><p>KKLStyl3:</p><p style={{width: '67%', textAlign: 'right'}}>1000</p></div></li>
            </ol>
          </div>
        </div>
        <div style={{width: '93%', height: '300px', margin: '30px auto 0px', borderRadius: '0px 0px 25px 25px', boxShadow: '6px 6px 10px #8900ff', backgroundColor: '#000000', border: '1px solid #8900ff'}}>
          <h3 style={{color: 'white', textAlign: 'center'}}>About Us</h3>
          <p style={{color: '#E0EDEF', margin: '0px auto', width: 'inherit', textShadow: '1px 1px 4px white'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
          text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
          Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
          text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
          Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
          text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
    );
  }
}

export default App;
