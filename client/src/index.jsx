import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Carousel from './components/Carousel.jsx';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      images : [],

    }
    this.toggleNewImage = this.toggleNewImage.bind(this);
  }

  componentDidMount () {
    this.getCarouselImages();
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

  toggleNewImage (image) {
    this.setState({
      toggleImage: image
    })
  }

  render () {
    return (
    <div class="row">
      <div class="column">
        <Carousel images = {this.state.images} toggleCarouselImage = {this.toggleNewImage}/>
      </div>
      <div>
        <img class = "imageDisplay" src = {this.state.toggleImage}/>
      </div>
    </div>)
  }
}


ReactDOM.render(<App />, document.getElementById('app'));