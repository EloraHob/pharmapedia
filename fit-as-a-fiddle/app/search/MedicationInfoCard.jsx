import React from 'react';
import Card from 'react-bootstrap/Card';

const MedLinePlusBaseUrl = 'https://connect.medlineplus.gov/service';
const MedicationInfoCard = ({ drugName, activeIngredient, description, rxcui }) => {
  const medLinePlusUrl = `${MedLinePlusBaseUrl}?knowledgeResponseType=application%2Fjson&mainSearchCriteria.v.cs=2.16.840.1.113883.6.88&mainSearchCriteria.v.c=${rxcui}&mainSearchCriteria.v.dn=&informationRecipient.languageCode.c=en`;

  return (
    <a href={medLinePlusUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
      <Card className="m-3" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{drugName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{activeIngredient}</Card.Subtitle>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
};

export default MedicationInfoCard;

