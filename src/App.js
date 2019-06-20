import React, { Component } from 'react';
import Header from './header.js';
import Navbar from './navbar.js';
import Carousel from 'nuka-carousel';

class App extends Component {
  render() {
    return (
      <div style={{ width: '90%', height: 'auto', backgroundColor: '#dcdfe6b5', margin: '30px auto', paddingBottom: '40px', boxShadow: '5px 5px 5px black'}}>
        <Header/>
        <Navbar/>
        <div style={{display: 'flex'}}>
          <div style={{width: '65%', height: '500px', margin: '45px 0px 0px 45px', borderRadius: '25px', boxShadow: '6px 6px 10px #fb4646', backgroundColor: '#000000c4'}}>
            <h3 style={{color: 'white', textAlign: 'center'}}>Latest News</h3>
            <Carousel autoplay='true' wrapAround='true' slideWidth={1} initialSlideHeight={1} style={{margin: '20px auto', maxWidth: '1000px'}}>
              <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
              <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
              <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
              <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
              <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
              <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
            </Carousel>
          </div>
          <div style={{width: '25%', height: '500px', margin: '45px 3% 0px', borderRadius: '25px', boxShadow: '6px 6px 10px 5px #19cff9', backgroundColor: '#000000c4'}}>
            <h3 style={{color: 'white', textAlign: 'center'}}>Leaderboards</h3>
            <ol style={{color: 'white'}}>
              <li style={{height: '40px', paddingTop: '15px'}}>KKLStyl3:   1000</li>
              <li style={{height: '40px'}}>                    KKLStyl3:   800</li>
              <li style={{height: '40px'}}>                    KKLStyl3:   300</li>
              <li style={{height: '40px'}}>                    KKLStyl3:   285</li>
              <li style={{height: '40px'}}>                    KKLStyl3:   70</li>
              <li style={{height: '40px'}}>                    KKLStyl3:   1000</li>
              <li style={{height: '40px'}}>                    KKLStyl3:   800</li>
              <li style={{height: '40px'}}>                    KKLStyl3:   300</li>
              <li style={{height: '40px'}}>                    KKLStyl3:   285</li>
              <li style={{height: '40px'}}>                    KKLStyl3:   70</li>
            </ol>
          </div>
        </div>
        <div style={{width: '93%', height: '300px', margin: '30px auto 0px', borderRadius: '25px', boxShadow: '6px 6px 10px #8900ff', backgroundColor: '#000000c4'}}>
          <h3 style={{color: 'white', textAlign: 'center', paddingTop: '15px'}}>About Us</h3>
          <p style={{color: 'white', margin: '0px auto', width: 'inherit'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
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
