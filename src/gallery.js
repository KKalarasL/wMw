import React, { Component } from 'react';
import Header from './header.js';
import Navbar from './navbar.js';
import Slider from "react-slick";
import wood from "./images/wood.jpg"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  };

    componentDidMount() {
      this.setState({
        nav1: this.slider1,
        nav2: this.slider2
      });
    }

  render() {
    const settings = {
      className: "slider variable-width",
      dots: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div style={{ width: '90%', height: '1000px', backgroundColor: '#dcdfe6b5', marginLeft: 'auto', marginRight: 'auto', marginTop: '30px', marginBottom: '30px', boxShadow: '5px 5px 5px black'}}>
        <Header/>
        <Navbar/>
        <div>
        <h4 style={{textAlign: 'center'}}>First Slider</h4>
        <Slider {...settings}
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          <div>
            <h3 style={{margin: '0px auto', width: 'fit-content'}}><img src={wood}/></h3>
          </div>
          <div>
            <h3 style={{margin: '0px auto', width: 'fit-content'}}><img src={wood}/></h3>
          </div>
          <div>
            <h3 style={{margin: '0px auto', width: 'fit-content'}}><img src={wood}/></h3>
          </div>
          <div>
            <h3 style={{margin: '0px auto', width: 'fit-content'}}><img src={wood}/></h3>
          </div>
          <div>
            <h3 style={{margin: '0px auto', width: 'fit-content'}}><img src={wood}/></h3>
          </div>
          <div>
            <h3 style={{margin: '0px auto', width: 'fit-content'}}><img src={wood}/></h3>
          </div>
          <div>
            <h3 style={{margin: '0px auto', width: 'fit-content'}}><img src={wood}/></h3>
          </div>
          <div>
            <h3 style={{margin: '0px auto', width: 'fit-content'}}><img src={wood}/></h3>
          </div>
          <div>
            <h3 style={{margin: '0px auto', width: 'fit-content'}}><img src={wood}/></h3>
          </div>
          <div>
            <h3 style={{margin: '0px auto', width: 'fit-content'}}><img src={wood}/></h3>
          </div>
        </Slider>

        <h4 style={{textAlign: 'center', marginTop: '15%'}}>Second Slider</h4>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={5}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <div>
            <h3 style={{width: '100px', height: '100px'}}><img src={wood}/></h3>
          </div>
          <div>
            <h3 style={{width: '100px', height: '100px'}}><img src={wood}/></h3>
          </div>
          <div>
            <h3 style={{width: '100px', height: '100px'}}><img src={wood}/></h3>
          </div>
          <div>
            <h3 style={{width: '100px', height: '100px'}}><img src={wood}/></h3>
          </div>
          <div>
            <h3 style={{width: '100px', height: '100px'}}><img src={wood}/></h3>
          </div>
          <div>
            <h3 style={{width: '100px', height: '100px'}}><img src={wood}/></h3>
          </div>
          <div>
            <h3 style={{width: '100px', height: '100px'}}><img src={wood}/></h3>
          </div>
          <div>
            <h3 style={{width: '100px', height: '100px'}}><img src={wood}/></h3>
          </div>
          <div>
            <h3 style={{width: '100px', height: '100px'}}><img src={wood}/></h3>
          </div>
          <div>
            <h3 style={{width: '100px', height: '100px'}}><img src={wood}/></h3>
          </div>
        </Slider>
      </div>
      </div>
    );
  }
}

export default App;
