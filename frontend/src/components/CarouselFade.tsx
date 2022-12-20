
import { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import {Carousel} from 'react-bootstrap';

import './Carousel.css'

function CarouselFade() {

  // function handleScroll() {
  //   if (ScrollY > 299) {
  //     setScrollY(window.pageYOffset);
  //     setScrollActive(true);
  //   } else {
  //     setScrollY(window.pageYOffset);
  //     setScrollActive(false);
  //   }
  // }

  const [y, setY] = useState(0);
  const [ScrollActive, setScrollActive] = useState(false);
  // const ref = useRef<HTMLDivElement>("")

  function handleScroll() {
    setY(-window.scrollY/2) //negative: makes image move slower upwards
  }

  useEffect(()=>{
   window.addEventListener("scroll", handleScroll)
    return ()=>{
      window.removeEventListener("scroll", handleScroll)
    }
 },[])
const imgUrl = [
  "/background.jpg",
  "/background2.jpg",
]

  return (
    <>
    {/* <div className="d-block w-100 bg-picture"
        style={{backgroundImage: `url(${imgUrl[0]})`, backgroundPositionY:y}}/> */}
    <Carousel fade interval={2000}>
      {imgUrl.map((item, idx)=>(
        <Carousel.Item key={idx}>
          <div
            className="d-block w-100 bg-picture"
            style={{backgroundImage: `url(${item})`, backgroundPositionY:y}}
          />
          <Carousel.Caption>
            <h3>{idx} slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    </>
  );
}

export default CarouselFade;

