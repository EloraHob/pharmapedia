import React from 'react';
import MedicationInfoCard from './MedicationInfoCard';
import { Container, Row, Col } from 'react-bootstrap';

const ResultsDisplayGrid = ({ medications }) => {
  return (
    <Container>
      {medications.map((row, i) => (
        <Row key={`row-${i}`} className='mb-4'>
          {row.map((medication, j) => (
            <Col key={`col-${j}`} xs={12} sm={6} md={4}>
              <MedicationInfoCard
                drugName={medication.drugName}
                activeIngredient={medication.activeIngredient}
                description={medication.description}
              />
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default ResultsDisplayGrid;
