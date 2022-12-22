import {Container, Row, Col} from 'react-bootstrap'

const About = () => {
  return (
    <>
    <Row className="mt-5 mx-0">
      <h2 className="text-center">About Us </h2>
      <section className="text-center">
        <p>This restaurant is staffed by talented chefs who are dedicated to providing you with quality sushi</p>
        <p>If you're looking for a delicious, worthy sushi experience that will take your time to enjoy, then look no further than Tokyoya Sushi.</p>
        <p>at Tokyoya Sushi you can have an enjoyable time and savor your meal while it's being prepared.</p>
      </section>
      
      <p>Please send a screenshot where we can clearly see, no matter which order portal! Picking up (with a surprise portion) is faster than having it delivered! WhatsApp/Imsg/Telegram 0160.9822.7444 Line:friora,카톡:yesaudi 한인 전화주문시 할인.</p>
    </Row>
      <Row className="mt-5 mx-0">
        <Col className="px-4">
        <h2 className="text-center">Kang Soon Won</h2>
          <p>&emsp;He's Chef Kang, and he loves to talk about the foods, the preparation, and anything else that comes up. He's friendly, loves to talk about sushi, and is passionate about it. And because he knows so much about this delicious cuisine, you can always count on him to give you a great recommendation.</p>
          <p>Our chefs are passionate about their food and take pride in creating the highest quality sushi possible.</p>
        </Col>
        <Col className="px-0">
          <img className="about-chef" src="/chef.png"/>
        </Col>
      </Row>
      <Row className="mt-5 mx-0">
        <Col className="px-0">
          <img className="about-chef" src="/chef.png"/>
        </Col>
        <Col className="px-4">
        <h2 className="text-center">moshi moshi</h2>
        <p>Sushi is a unique dining experience that lets you enjoy friendly conversation with a chef in an intimate setting. It's the perfect way to experience something special, and it's also a great way to learn about sushi</p>
        </Col>
      </Row>
    </>
  )
}

export default About