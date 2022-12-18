import {Navbar as NavbarBs, Nav, NavLink, Container} from "react-bootstrap"

const Navbar = () => {
  return (
    <NavbarBs className="bg-white shadow-sm mb-3">
      <Container className="me-auto">
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
        </Nav>
      </Container>
    </NavbarBs>
  )
}

export default Navbar