import { Nav, Navbar } from "react-bootstrap";

export function Header() {
  return (
    <Navbar
      sticky='top'
      collapseOnSelect
      expand="lg"
      variant="light"
      className="navbar"
    >
      <Navbar.Brand href="#home" className="nav-logo">
        <img src='./favicon.ico' alt="" width='80%' />
      </Navbar.Brand>
      <a href="/">
        <strong>Portfolio</strong>
      </a>
      <Navbar.Toggle
        className="nav-toggle"
        aria-controls="responsive-navbar-nav"
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="justify-content-end ms-auto nav-item-right">
          <Nav.Link href="https://github.com/faccon" className="Nav-text">
            Github
          </Nav.Link>
          <Nav.Link href="#pricing" className="Nav-text">
            Hire me
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
