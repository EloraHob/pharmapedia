import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const MedLinePlusBaseUrl = 'https://connect.medlineplus.gov/service';

const MedicationInfoCard = ({ ingredient, drugName, strength, manufacturer, description }) => {
  const [medLinePlusLink, setMedLinePlusLink] = useState('');
  const [isLinkGenerated, setIsLinkGenerated] = useState(false);

  useEffect(() => {
    const fetchMedLinePlusLink = async () => {
      if (ingredient) {
        try {
          const medLinePlusUrl = `${MedLinePlusBaseUrl}?knowledgeResponseType=application%2Fjson&mainSearchCriteria.v.cs=2.16.840.1.113883.6.88&mainSearchCriteria.v.c=&mainSearchCriteria.v.dn=${ingredient}&informationRecipient.languageCode.c=en`;
          const response = await fetch(medLinePlusUrl);
          const data = await response.json();
          const entry = data?.feed?.entry?.[0];
          const link = entry?.link?.[0]?.href || '';
          setMedLinePlusLink(link);
          setIsLinkGenerated(true); // Set the flag to true when the link is generated
        } catch (error) {
          console.error('Error fetching MedLinePlus link:', error);
        }
      }
    };

    fetchMedLinePlusLink();
  }, [ingredient]);

  const openMedLinePlusLink = () => {
    if (isLinkGenerated && medLinePlusLink) {
      window.open(medLinePlusLink, '_blank');
    } else {
      alert(`Information about ${ingredient} is not yet recorded. Please try clicking on other medication cards.`);
    }
  };

  return (
    <div onClick={openMedLinePlusLink} style={{ textDecoration: 'none', cursor: 'pointer' }}>
      <Card className="m-3" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{`${drugName} ${strength}`.trim()}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{manufacturer}</Card.Subtitle>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

const ResultsDisplayGrid = ({ medications = [], firstVisit = true }) => {
  if (firstVisit) {
    return <p>Please make a search to see results.</p>;
  }

  if (medications.length === 0) {
    return '';
  }

  return (
    <Container>
      <Row>
        {medications.map((medication, i) => (
          <Col key={`col-${i}`} xs={12} sm={6} md={4} className='mb-4'>
            <MedicationInfoCard
              ingredient={medication.ingredient}
              drugName={medication.drugName}
              strength={medication.strength}
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