import { Container, Row, Col } from 'react-bootstrap';
// import {useEffect, useState, useRef} from 'react'

import CarouselFade from '../components/CarouselFade';
// import useIntersectionObsever from '../components/useIntersectionObserver';
import './Home.css';

const Home = () => {
  // const ref = useRef<HTMLDivElement>(null)
  // const observer = useRef<IntersectionObserver>()

  const option={
    threshold:1, //100% of the element must be on the screen to trigger the "entries" function
    rootMargin: "", //this sets the margin limits of a container to diplay elements
  }
  window.addEventListener('scroll', (event)=>{
    const rows = document.querySelectorAll('.home-row')
    // })
    const observer = new IntersectionObserver((entries)=>{
          entries.forEach(entry=>{
            // console.log(entry)
            entry.target.classList.toggle("show", entry.intersectionRatio === 1)
            // this stops observing the elements that were once observed
            if(entry.isIntersecting) observer.unobserve(entry.target) 
        })
      },option)
    rows.forEach(row=>{
      observer.observe(row)
    })
  })

  return (
    <>
      <CarouselFade />
      <Container className="mb-0 pb-5">
        <h1 className="text-center">Tokyoya Sushi & Bulgogi</h1>
        <h4 className="home-semi-title text-center">
          Do you love sushi? Then Tokyoya is the place for you!
        </h4>
        <Row className="home-row">
          <Col>
          <p>
            We believe that great sushi comes not only from top-quality
            ingredients, but also from a passionate, sincere and Tokyoya Sushi
            chef who puts their all into preparing each dish.
          </p>
          <p>Chef Kang offers a sushi experience like no other – a friendly,
            sincere and frankfurt sushi restaurant that will excite your taste
            buds and passion for Japanese cuisine.</p></Col>
          <Col><img className="home-sushi-picture" src="/sushi/plate/sushi1.png"/></Col>
        </Row>
        
        <Row className="home-row">
          <Col><img className="home-sushi-picture" src="/sushi/plate/sushi2.png"/></Col>
          <Col><p>Chef Kang will prepare your meal with all the finesse and pride of a
            true sushi chef, while he takes care to ensure that every detail is
            perfect to make your dining experience unforgettable.</p></Col>
        </Row>
        <Row className="home-row">
          <Col><p>At Tokyoya Sushi, we want to offer our guests an amazing sushi
            experience that will leave them genuinely passionate about sushi and
            eager to come back again and again.</p></Col>
          <Col><img className="home-sushi-picture" src="/sushi/plate/sushi3.png"/></Col>
        </Row>

        <Row className="home-row">
          <Col><img className="home-sushi-picture" src="/sushi/plate/sushi4.png"/></Col>
          <Col><p>Japanese cuisine is one of the most widely-known cuisines in the
          world. But, with so many different types of sushi, ramen, and other
          dishes, how do you know where to start?</p></Col>
        </Row>
        <Row className="home-row">
          <Col><p>Sushi is an art form in which rice, fish, or other ingredients are
          arranged in a bite-size piece of seasoned rice. The best sushi in the world is fresh. It is made with the best
          ingredients and is prepared by the best sushi chefs.</p></Col>
          <Col><img className="home-sushi-picture" src="/sushi/plate/sushi5.png"/></Col>
        </Row>
        <Row className="home-row">
          <Col><img className="home-sushi-picture" src="/sushi/plate/sushi6.png"/></Col>
          <Col><p> The full-flavored broth takes hours of work. With just a few simple ingredients, you can enjoy a
          beautifully-presented meal that is full of flavour. This is an original recipe for a delicious, full-flavored ramen soup.
          It's perfect for a cold day. The taste is perfect for cold winter nights, but it is also simple
          enough to make ahead for a quick lunch or dinner. The best ramen takes effort, but it's well worth it. For this recipe,
        ramen is transformed into a rich, complex, and deeply satisfying meal.</p></Col>
        </Row>
      </Container>
      {/* <CarouselFade/> */}
    </>
  );
};


export default Home;
