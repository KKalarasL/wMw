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
      autoplay: false
    };
    return (
      <div style={{ width: '90%', height: '1000px', backgroundColor: '#dcdfe6b5', marginLeft: 'auto', marginRight: 'auto', marginTop: '30px', marginBottom: '30px', boxShadow: '5px 5px 5px black'}}>
        <Header/>
        <Navbar/>
        <div style={{width: '100%'}}>
        <h4 style={{textAlign: 'center'}}>First Slider</h4>
        <Slider {...settings}
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
            <div style={{margin: '0px auto', width: 'fit-content'}}>
              <img src={wood} width="1120" height="524" style={{margin: '0px auto'}}/>
            </div>
            <div style={{margin: '0px auto', width: 'fit-content'}}>
              <img src={wood} width="1120" height="524" style={{margin: '0px auto'}}/>
            </div>
            <div style={{margin: '0px auto', width: 'fit-content'}}>
              <img src={wood} width="1120" height="524" style={{margin: '0px auto'}}/>
            </div>
            <div style={{margin: '0px auto', width: 'fit-content'}}>
              <img src={wood} width="1120" height="524" style={{margin: '0px auto'}}/>
            </div>
            <div style={{margin: '0px auto', width: 'fit-content'}}>
              <img src={wood} width="1120" height="524" style={{margin: '0px auto'}}/>
            </div>
            <div style={{margin: '0px auto', width: 'fit-content'}}>
              <img src={wood} width="1120" height="524" style={{margin: '0px auto'}}/>
            </div>
            <div style={{margin: '0px auto', width: 'fit-content'}}>
              <img src={wood} width="1120" height="524" style={{margin: '0px auto'}}/>
            </div>
            <div style={{margin: '0px auto', width: 'fit-content'}}>
              <img src={wood} width="1120" height="524" style={{margin: '0px auto'}}/>
            </div>
            <div style={{margin: '0px auto', width: 'fit-content'}}>
              <img src={wood} width="1120" height="524" style={{margin: '0px auto'}}/>
            </div>
            <div style={{margin: '0px auto', width: 'fit-content'}}>
              <img src={wood} width="1120" height="524" style={{margin: '0px auto'}}/>
            </div>
        </Slider>
        </div>
        <div>
        <h4 style={{textAlign: 'center', marginTop: '5%'}}>Second Slider</h4>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={5}
          swipeToSlide={true}
          focusOnSelect={true}

        >
          <div>
            <img src={wood} width="180px" style={{margin: '0px auto'}}/>
          </div>
          <div>
            <img src={wood} width="180px" style={{margin: '0px auto'}}/>
          </div>
          <div>
            <img src={wood} width="180px" style={{margin: '0px auto'}}/>
          </div>
          <div>
            <img src={wood} width="180px" style={{margin: '0px auto'}}/>
          </div>
          <div>
            <img src={wood} width="180px" style={{margin: '0px auto'}}/>
          </div>
          <div>
            <img src={wood} width="180px" style={{margin: '0px auto'}}/>
          </div>
          <div>
            <img src={wood} width="180px" style={{margin: '0px auto'}}/>
          </div>
          <div>
            <img src={wood} width="180px" style={{margin: '0px auto'}}/>
          </div>
          <div>
            <img src={wood} width="180px" style={{margin: '0px auto'}}/>
          </div>
          <div>
            <img src={wood} width="180px" style={{margin: '0px auto'}}/>
          </div>
        </Slider>
      </div>
      </div>
    );
  }
}

export default App;
