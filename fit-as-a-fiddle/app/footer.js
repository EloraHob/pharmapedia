'use client'
import React from 'react';
import { Container, Nav, Button, Row, Col } from 'react-bootstrap';

const MyFooter = () => {
  const styles = {
    footer: {
      backgroundColor: '#97d8c4',
      padding: '20px 0',
    },
    footerText: {
      fontFamily: 'Lato, sans-serif',
      fontSize: '0.9rem',
      color: '#005051'
    }
  };
  
  return (
    <div style={styles.footer}>
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <span style={styles.footerText}>© 2023 Fit as a Fiddle. All rights reserved.</span>
          </Col>
          <Col xs={12} md={3}>
            <span style={styles.footerText}>The data provided by this service is for informational purposes only and is not a substitute for professional medical advice.</span>
          </Col>
          <Col xs={12} md={3}>
            <Nav className="mr-auto">
              <Nav.Link href="https://lhncbc.nlm.nih.gov/RxNav/APIs/index.html" target="_blank" style={styles.footerText}>RxNorm API</Nav.Link>
              <Nav.Link href="https://medlineplus.gov/about/developers/webservices/" target="_blank" style={styles.footerText}>MedlinePlus Connect</Nav.Link>
            </Nav>
          </Col>
          <Col xs={12} md={3} className="d-flex justify-content-end">
            <Button variant="link" onClick={() => window.scrollTo(0, 0)} style={styles.footerText}>Back to Top</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyFooter;
