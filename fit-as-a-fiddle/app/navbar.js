"use client"
import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Image } from 'react-bootstrap';

const MyNavbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      // Use the browser's JavaScript API to navigate to the search page with the search term as a query parameter
      window.location.href = `/search?term=${encodeURIComponent(searchTerm)}`;
    }
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/" className="ms-3">
        <Image src="./logo.png" alt="App Logo" width="170" height="40" className="d-inline-block align-top" /> {' '}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Collapse id="navbarSupportedContent" className="me-2">
        <Nav className="me-auto">
          <Nav.Link href="/" className="ms-3 me-4" active>Home</Nav.Link>
          <NavDropdown title="Features" id="navbarDropdown" className="me-4">
            <NavDropdown.Item href="/filter">Medication Information Filter</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/search">Search</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/interactions">Interaction checker</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/about" className="me-4" active>About</Nav.Link>
        </Nav>
        <Form className="d-flex ms-auto my-2 my-lg-0 me-2">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="outline-success" onClick={handleSearch} disabled={!searchTerm.trim()}>
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
