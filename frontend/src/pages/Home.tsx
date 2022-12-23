
import { Container, Row, Col } from 'react-bootstrap';
import {useEffect, useState, useRef} from 'react'

import CarouselFade from '../components/CarouselFade';
// import useIntersectionObsever from '../components/useIntersectionObserver';
import './Home.css';

const Home = () => {
  // window.addEventListener('load', (event)=>{  //because it wont detect element after refresh
  //   const elemsAll = document.querySelectorAll('.home-sushi-picture')
  //   const effectEl = document.querySelectorAll('.col-contents-blur-effect')
  //   const obs =  new ResizeObserver(changes => {
  //       console.log("changes: ",changes )
  //       changes.map((change,idx)=>{
  //           effectEl[idx].style.height = change.contentRect.height+"px"
  //           effectEl[idx].style.width = change.contentRect.width+"px"
  //       })
  //     })
  //   elemsAll.forEach(elem=>{
  //     obs.observe(elem)
  //   })
  // })
  // const effectEl: HTMLElement | null
  // const elemsAll: HTMLElement | null
  useEffect(()=>{
    const elemsAll = document.querySelectorAll<HTMLElement>('.home-sushi-picture') 
    const effectEl = document.querySelectorAll<HTMLElement>('.col-contents-blur-effect') 
    const obs =  new ResizeObserver(changes => {
        changes.map((change,idx)=>{
            effectEl[idx].style.height = change.contentRect.height+"px"
            effectEl[idx].style.width = change.contentRect.width+"px"
        })
      })
    elemsAll.forEach(elem=>{
      obs.observe(elem)
    })
  },[])

  const option={
    threshold:1, //100% of the element must be on the screen to trigger the "entries" function
    rootMargin: "", //this sets the margin limits of a container to diplay elements
  }
  window.addEventListener('scroll', (event)=>{
    const rows = document.querySelectorAll('.home-row')
    const observer = new IntersectionObserver((entries)=>{
          entries.forEach(entry=>{
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
        {/* <h1 className="text-center">Tokyoya Sushi & Bulgogi</h1> */}
        <h4 className="home-semi-title text-center">
          Do you love sushi? Then Tokyoya is the place for you!
        </h4>
        <Row className="home-row">
          <Col xs={{span:12, order:2}} sm={{span:6, order:1}} className="col-contents-text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum .</p>
          </Col>
          
            <Col xs={{span:12, order:1}} sm={{span:6, order:2}} 
              className="col-contents-photo"
              style={{
                // backgroundImage:"url('/sushi/plate/sushi1.png')"
              }}>
              <img className="home-sushi-picture img-fluid" src="/sushi/plate/sushi1.png"/>
                <div className="col-contents-blur-effect">
                </div>
            </Col>

        </Row>
        
        <Row className="home-row">
          <Col xs={{span:12, order:1}} sm={{span:6, order:1}} className="col-contents-photo">
            <img className="home-sushi-picture img-fluid" src="/sushi/plate/sushi2.png"/>
            <div className="col-contents-blur-effect">
                </div>
          </Col>
          
          <Col xs={{span:12, order:2}} sm={{span:6, order:2}} className="col-contents-text">
            <p>Lorem ipsum doloquet, odio dolor laoreet magna, quis ullamcorper tellus ex at mauris. Morbi in posuere justo. Nullam sed egestas elit. Quisque accumsan, diam vitae tempor tincidunt, urna turpis ullamcorper sem, a.</p></Col>
        </Row>
        <Row className="home-row">
          <Col xs={{span:12, order:2}} sm={{span:6, order:1}} className="col-contents-text">
            <p>Lolor laoreet magna, quis ullamcorper tellus ex at mauris. Morbi in posuere justo. Nullam sed egestas elit. Quisque accumsan, diam vitae tempor tincidunt, urna turpis ullamcorper sem, a.</p></Col>
        
          <Col xs={{span:12, order:1}} sm={{span:6, order:2}} className="col-contents-photo">
            <img className="home-sushi-picture img-fluid" src="/sushi/plate/sushi3.png"/>
            <div className="col-contents-blur-effect"></div>
            </Col>
        </Row>

        <Row className="home-row">
          <Col xs={{span:12, order:1}} sm={{span:6, order:1}} className="col-contents-photo">
            <img className="home-sushi-picture img-fluid" src="/sushi/plate/sushi4.png"/>
            <div className="col-contents-blur-effect"></div>
          </Col>
        
          <Col xs={{span:12, order:2}} sm={{span:6, order:2}} className="col-contents-text">
            <p>Loreolor laoreet magna, quis ullamcorper tellus ex at mauris. Morbi in posuere justo. Nullam sed egestas elit. Quisque accumsan, diam vitae tempor tincidunt, urna turpis ullamcorper sem, a.</p></Col>
        </Row>
        <Row className="home-row">
          <Col xs={{span:12, order:2}} sm={{span:6, order:1}} className="col-contents-text">
            <p>Lorer laoreet magna, quis ullamcorper tellus ex at mauris. Morbi in posuere justo. Nullam sed egestas elit. Quisque accumsan, diam vitae tempor tincidunt, urna turpis ullamcorper sem, a.</p></Col>
     
          <Col xs={{span:12, order:1}} sm={{span:6, order:2}} className="col-contents-photo">
            <img className="home-sushi-picture img-fluid" src="/sushi/plate/sushi5.png"/>
            <div className="col-contents-blur-effect"></div>
          </Col>
        </Row>
        <Row className="home-row">
          <Col xs={{span:12, order:1}} sm={{span:6, order:1}} className="col-contents-photo">
            <img className="home-sushi-picture img-fluid" src="/sushi/plate/sushi6.png"/>
            <div className="col-contents-blur-effect"></div>
            </Col>
 
          <Col xs={{span:12, order:2}} sm={{span:6, order:2}} className="col-contents-text">
            <p> Loquet, odio dolor laoreet magna, quis ullamcorper tellus ex at mauris. Morbi in posuere justo. Nullam sed egestas elit. Quisque accumsan, diam vitae tempor tincidunt, urna turpis ullamcorper sem, a.</p></Col>
        </Row>
      </Container>
      {/* <CarouselFade/> */}
    </>
  );
};


export default Home;
