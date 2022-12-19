import {Navbar as NavbarBs, Nav, Container, Row, Col} from "react-bootstrap"
import { NavLink, useNavigate } from "react-router-dom"

import 'bootstrap-icons/font/bootstrap-icons.css'
import './Navbar.css' 

const Navbar = () => {
  const navigate = useNavigate()
  const clickHandler = ()=>{
    navigate('/')
}
  return (
    // <NavbarBs className="bg-white shadow-sm mb-3">
    <NavbarBs className="bg-light navbar shadow-sm mb-3">
        <Row className="ms-4">
          <Col className="col-logo" onClick={clickHandler}>
            {/* <img src="/tokyoya_logo_white.png"/> */}
              <img src="/tokyoya_logo.png" style={{width:"50px",height:"50px"}}/>
              <h1 className="title-text">TOKYOYA</h1>
          </Col>
        </Row>
     
      <Row className="ms-auto me-auto">
        <Col>
          <Nav>
            <Nav.Link to="/" as={NavLink}>
              Home 
            </Nav.Link>
            <Nav.Link to="/menu" as={NavLink}>
              Menu
            </Nav.Link>
            <Nav.Link to="/about" as={NavLink}>
              About
            </Nav.Link>
            <Nav.Link to="/contact" as={NavLink}>
              Contact
            </Nav.Link>
          </Nav>
        </Col>
      {/* </Col> */}
        </Row>
        
      {/* </Container> */}
    </NavbarBs>
  )
}

export default Navbar