import { Nav, Navbar } from "react-bootstrap";
import { GITHUB, HIRE_ME, NAME } from "../constants";

export function Header() {
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      variant="light"
      className="navbar"
    >
      <Navbar.Brand className="nav-logo">
        <img src="./favicon.ico" alt="" width="80%" />
      </Navbar.Brand>
        <strong>{NAME}</strong>
      <Navbar.Toggle
        className="nav-toggle"
        aria-controls="responsive-navbar-nav"
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="justify-content-end ms-auto nav-item-right">
          <Nav.Link href="https://github.com/faccon" className="Nav-text">
            {GITHUB}
          </Nav.Link>
          <Nav.Link href="mailto:adeniyi.germany@gmail.com" className="Nav-text">
            {HIRE_ME}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
