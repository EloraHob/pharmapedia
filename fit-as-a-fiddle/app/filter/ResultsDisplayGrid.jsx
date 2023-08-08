import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const MedicationInfoCard = ({ drugName, manufacturer, description }) => {
  return (
    <Card className="m-3" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{drugName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{manufacturer}</Card.Subtitle>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

const ResultsDisplayGrid = ({ medications = [], firstVisit = true }) => {
  if (firstVisit) {
    return null; 
  }

  if (!medications || medications.length === 0) {
    return <p>No matching results found. Consider modifying your search for better results. </p>
  }

  return (
    <Container>
      <Row>
        {medications.map((medication, i) => (
          <Col key={`col-${i}`} xs={12} sm={6} md={4} className='mb-4'>
            <MedicationInfoCard
              drugName={medication.drugName}
              manufacturer={medication.manufacturer}
              description={medication.description}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ResultsDisplayGrid;
