import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

const MedLinePlusBaseUrl = 'https://connect.medlineplus.gov/service';

const MedicationInfoCard = ({ drugName, activeIngredient, description, rxcui }) => {
  const [medLinePlusLink, setMedLinePlusLink] = useState('');
  const [ingredientName, setIngredientName] = useState('');

  useEffect(() => {
    // Parse out the ingredient name from the activeIngredient
    const indexOfOpenBracket = activeIngredient.indexOf('(');
    const name = indexOfOpenBracket !== -1 ? activeIngredient.slice(0, indexOfOpenBracket).trim() : '';

    setIngredientName(name);

    const fetchMedLinePlusLink = async () => {
      try {
        const medLinePlusUrl = `${MedLinePlusBaseUrl}?knowledgeResponseType=application%2Fjson&mainSearchCriteria.v.cs=2.16.840.1.113883.6.88&mainSearchCriteria.v.c=&mainSearchCriteria.v.dn=${ingredientName}&informationRecipient.languageCode.c=en`;
        const response = await fetch(medLinePlusUrl);
        const data = await response.json();
        const entry = data?.feed?.entry?.[0];
        const link = entry?.link?.[0]?.href || '';
        setMedLinePlusLink(link);
      } catch (error) {
        console.error('Error fetching MedLinePlus link:', error);
      }
    };

    fetchMedLinePlusLink();
  }, [rxcui]);

  const openMedLinePlusLink = () => {
    if (medLinePlusLink) {
      window.open(medLinePlusLink, '_blank');
    } else {
      alert(`We don't have information about "${ingredientName}" recored yet. Please try clicking on other medication cards.`);
    }
  };

  return (
    <div onClick={openMedLinePlusLink} style={{ textDecoration: 'none', cursor: 'pointer' }}>
      <Card className="m-3" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{drugName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{activeIngredient}</Card.Subtitle>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MedicationInfoCard;