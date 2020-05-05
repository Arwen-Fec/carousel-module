import React from 'react';

const Carousel = (props) => (

  <div class = "carousel-track-container">
    <ul class="carousel-track">
      {props.images.map((image) => <li><img onClick = {() => props.toggleCarouselImage(image)}
      class = "carousel-image" src={image}/></li>)}
    </ul>
  </div>
);

export default Carousel;