'use client'
import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Image } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#" className="ms-3">
        <Image src="./logo.png" alt="App Logo" width="170" height="40" className="d-inline-block align-top" /> {' '}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="me-auto">
          <Nav.Link href="/" className="ms-3 me-4" active>Home</Nav.Link>
          <NavDropdown title="Features" id="navbarDropdown" className="me-4">
            <NavDropdown.Item href="/filter">Medication Information Filter</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Search</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Interaction checker</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/about" className="me-4" active>About</Nav.Link>
        </Nav>
        <Form className="d-flex ms-auto my-2 my-lg-0">
          <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
