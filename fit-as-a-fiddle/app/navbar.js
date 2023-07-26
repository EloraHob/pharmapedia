'use client'
import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Image } from 'react-bootstrap';
const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">
        <Image src="/images/logo.png" alt="App Logo" width="30" height="30" className="d-inline-block align-top" /> {' '}
        Pharmapedia
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="mr-auto">
          <Nav.Link href="#" active>Home</Nav.Link>
          <NavDropdown title="Features" id="navbarDropdown">
            <NavDropdown.Item href="#">Medication Information Filter</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Search</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Interaction checker</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/about" active>About</Nav.Link>
        </Nav>
        <div className="me-auto flex-row-reverse bd-highlight">
          <Form inline className="d-flex my-2 my-lg-0">
            <FormControl type="search" placeholder="Search" className="mr-sm-2 d-inline-block" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;