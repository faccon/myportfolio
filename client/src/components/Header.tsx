import { Nav, Navbar } from "react-bootstrap";
import { GITHUB, GITHUB_URL, HIRE_ME, MAILTO, NAME } from "../constants";

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
          <Nav.Link href={GITHUB_URL} className="Nav-text">
            {GITHUB}
          </Nav.Link>
          <Nav.Link href={MAILTO} className="Nav-text">
            {HIRE_ME}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
