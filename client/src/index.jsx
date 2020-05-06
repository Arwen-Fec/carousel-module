import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Carousel from './components/Carousel.jsx';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      images : [],
      enlargedImages : [],
      currentIndex : 0,

    }
    this.toggleNewImage = this.toggleNewImage.bind(this);
  }

  componentDidMount () {
    this.getCarouselImages();
    this.getCarouselEnlargedImages();
   }

  getCarouselImages () {
    var product_id = window.location.pathname.slice(1,2);
    console.log(product_id);
    $.ajax({
      type: 'GET',
      url: `/api/carousel/${product_id}`,
    }).done((data) => {
      var urls = [];
      for (var i = 0; i < data.length; i++) {
        urls.push(data[i].color_url);
      }
      this.setState({
        images : urls,
        toggleImage: urls[0]

      });
      console.log(data);
    })
  }

  getCarouselEnlargedImages () {
    var product_id = window.location.pathname.slice(1,2);
    console.log(product_id);
    $.ajax({
      type: 'GET',
      url: `/api/carouselEnlarged/${product_id}`,
    }).done((data) => {
      var urls = [];
      for (var i = 0; i < data.length; i++) {
        urls.push(data[i].color_url);
      }
      this.setState({
        enlargedImages : urls,
        toggleImage: urls[0]

      });
      console.log(data);
    })
  }
//change index when onClicked
  toggleNewImage (index) {
    $("img").css( "border", 0 );
    $(`#a${index}` ).css( "border", "2px solid black" );
    this.setState({
      toggleImage: this.state.enlargedImages[index]
    })
  }

  render () {
    return (
    <div class="row">
      <div class="column imageslider" >
        <Carousel images = {this.state.images} toggleCarouselImage = {this.toggleNewImage} />
      </div>
      <div class="column">
        <img class = "imageDisplay" src = {this.state.toggleImage}/>
      </div>
    </div>)
  }
}


ReactDOM.render(<App />, document.getElementById('app'));