import React from "react";
import "./style.css";
// import { Nav, Navbar } from 'react-bootstrap'
import {Link } from "react-router-dom"

function MyNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Joe Davis
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    // <Navbar bg="light" expand="lg">
    //   <Navbar.Brand href="#about">About Joe Davis</Navbar.Brand>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="mr-auto">
    //       {/* <Nav.Link href="#home">Home</Nav.Link> */}
    //       <Nav.Link href="#portfolio">Portfolio</Nav.Link>
    //       {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //         <NavDropdown.Item href="#about">About</NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //         <NavDropdown.Divider />
    //         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    //       </NavDropdown> */}
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
  );
}

export default MyNavbar;