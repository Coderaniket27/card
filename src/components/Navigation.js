import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Navigation() {
  return (
    <>
      <Navbar expand="lg" className="navbar-area">
        <nav className="container-fluid d-flex navbar-container">
          <Navbar.Brand href="#home" className="main-logo">
            <img src="/logo (1).png" height={74} width={90} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="navbar-collapse pl-200"
          >
            <Nav className="me-auto fs-18 navbar-items mr2">
              <Nav.Link as={Link} to="/" className="navlink mr10">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="navlink mr10">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/services" className="navlink mr10">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/products" className="navlink mr10">
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="/offers" className="navlink mr10">
                Offers
              </Nav.Link>
              <Nav.Link as={Link} to="/benifits" className="navlink mr10">
                Benefits
              </Nav.Link>
              <Nav.Link as={Link} to="/card" className="navlink">
                Card
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Link to="/Contact">
            <button className="btn btn-primary mr-10">Reach Us</button>
          </Link>
        </nav>
      </Navbar>
    </>
  );
}

export default Navigation;
