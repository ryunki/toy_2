
import {Carousel} from 'react-bootstrap';

import './Carousel.css'

function CarouselFade() {
const imgUrl = [
  "/background.jpg",
  "/background2.jpg",
]

  return (

    <Carousel fade interval={2000} >
      {imgUrl.map((item, idx)=>(
        <Carousel.Item key={idx}>
          <div
            className="d-block w-100 bg-picture"
            // src={item}
            // alt={idx + " slide"}
            style={{backgroundImage: `url(${item})`}}
          />
          {/* <img
            className="d-block w-100 bg-picture"
            src={item}
            alt={idx + " slide"}
            style={{backgroundImage: `url(${item})`}}
          /> */}
          <Carousel.Caption>
            <h3>{idx} slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselFade;