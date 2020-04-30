import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Carousel from './components/Carousel.jsx';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      images : []
    }
  }

  componentDidMount () {
    this.getCarouselImages();
   }

  getCarouselImages () {

    $.ajax({
      type: 'GET',
      url: '/api/carousel',
    }).done(() => {

    })
  }

  render () {
    return (
    <div>
      <Carousel images = {this.state.images}/>
    </div>)
  }
}


ReactDOM.render(<App />, document.getElementById('app'));