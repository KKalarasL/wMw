import React, { Component } from 'react';
import Header from './header.js';
import Navbar from './navbar.js';
import Slider from "react-slick";
import wood from "./images/wood.jpg";
// import news1 from "./images/news1.jpg";
// import news2 from "./images/news2.jpg";
// import news3 from "./images/news3.jpg";
// import news4 from "./images/news4.jpg";

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
          <div style={{width: '65%', height: '500px', margin: '25px 0px 0px 45px', borderRadius: '25px', boxShadow: '6px 6px 10px #fb4646', backgroundColor: '#000000'}}>
            <h3 style={{color: 'white', textAlign: 'center'}}>Latest News</h3>
        <Slider {...settings}>
        <div style={{margin: '0px auto'}}>
          <img src={wood} width="95%" height="400px" style={{margin: '0px auto'}}/>
        </div>
        <div style={{margin: '0px auto'}}>
          <img src={wood} width="95%" height="400px" style={{margin: '0px auto'}}/>
        </div>
        <div style={{margin: '0px auto'}}>
          <img src={wood} width="95%" height="400px" style={{margin: '0px auto'}}/>
        </div>
        <div style={{margin: '0px auto'}}>
          <img src={wood} width="95%" height="400px" style={{margin: '0px auto'}}/>
        </div>
        </Slider>
          </div>
          <div style={{width: '25%', height: '500px', margin: '25px 3% 0px', borderRadius: '25px', boxShadow: '6px 6px 10px 5px #19cff9', backgroundColor: '#000000'}}>
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
        <div style={{width: '93%', height: '300px', margin: '30px auto 0px', borderRadius: '25px', boxShadow: '6px 6px 10px #8900ff', backgroundColor: '#000000'}}>
          <h3 style={{color: 'white', textAlign: 'center', paddingTop: '15px'}}>About Us</h3>
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
