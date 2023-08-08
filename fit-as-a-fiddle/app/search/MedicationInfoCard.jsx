import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

const MedLinePlusBaseUrl = 'https://connect.medlineplus.gov/service';

const MedicationInfoCard = ({ drugName, activeIngredient, description, rxcui }) => {
  const [medLinePlusLink, setMedLinePlusLink] = useState('');
  const [ingredientName, setIngredientName] = useState('');
  const [isLinkGenerated, setIsLinkGenerated] = useState(false);

  useEffect(() => {
    // Parse out the ingredient name from the activeIngredient
    const indexOfOpenBracket = activeIngredient.indexOf('(');
    if (indexOfOpenBracket !== -1) {
      const name = activeIngredient.slice(0, indexOfOpenBracket).trim();
      setIngredientName(name);
    } else {
      // If no brackets are found, use the original active ingredient as the ingredient name
      setIngredientName(activeIngredient);
    }

    const fetchMedLinePlusLink = async () => {
      try {
        const medLinePlusUrl = `${MedLinePlusBaseUrl}?knowledgeResponseType=application%2Fjson&mainSearchCriteria.v.cs=2.16.840.1.113883.6.88&mainSearchCriteria.v.c=&mainSearchCriteria.v.dn=${ingredientName}&informationRecipient.languageCode.c=en`;
        const response = await fetch(medLinePlusUrl);
        const data = await response.json();
        const entry = data?.feed?.entry?.[0];
        const link = entry?.link?.[0]?.href || '';
        setMedLinePlusLink(link);
        setIsLinkGenerated(true); // Set the flag to true when the link is generated
      } catch (error) {
        console.error('Error fetching MedLinePlus link:', error);
      }
    };

    fetchMedLinePlusLink();
  }, [rxcui, activeIngredient]);

  const openMedLinePlusLink = () => {
    if (isLinkGenerated && medLinePlusLink) {
      window.open(medLinePlusLink, '_blank');
    } else {
      alert(`Information about ${ingredientName} is not yet recorded. Please try clicking on other medication cards.`);
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