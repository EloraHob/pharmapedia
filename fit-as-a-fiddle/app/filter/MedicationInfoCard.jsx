import React from 'react';
import Card from 'react-bootstrap/Card';

const MedicationInfoCard = ({ drugName, activeIngredient, description }) => {
  return (
    <Card className="m-3" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{drugName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{activeIngredient}</Card.Subtitle>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MedicationInfoCard;