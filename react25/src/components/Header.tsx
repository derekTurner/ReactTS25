import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <LinkContainer to="/">
        <Navbar.Brand>Svelte Starter</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/presentation">
            <Nav.Link>Presentation</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/tutorial">
            <Nav.Link>Tutorial</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
