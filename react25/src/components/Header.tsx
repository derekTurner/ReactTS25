import type { JSX } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router";

const Header = ():JSX.Element => {
  return (
<>
    {/*
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Svelte Starter</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/Presentation">Presentation</Nav.Link>
            <Nav.Link as={NavLink} to="/Tutorial">Tutorial</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    */}
   <h1>go</h1>
     <NavLink to="/tutorial" end>
        Trending Concerts
      </NavLink>
</>

  );
};

export default Header;
