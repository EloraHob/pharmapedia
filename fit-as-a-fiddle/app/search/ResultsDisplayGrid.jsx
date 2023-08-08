import React, { useState } from 'react';
import MedicationInfoCard from '../search/MedicationInfoCard';
import { Container, Row, Col } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';

const chunkSize = 9; // Number of cards per page

const ResultsDisplayGrid = ({ medications }) => {
  const [currentPage, setCurrentPage] = useState(0);

  // Flatten the 2D array
  const flatMedications = medications.reduce((acc, val) => acc.concat(val), []);

  // Function to chunk the data into pages
  const chunkArray = (array, size) => {
    let result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  // Creating chunks/pages of data
  const pages = chunkArray(flatMedications, chunkSize);

  // The data for the current page
  const currentData = pages[currentPage] || [];

  let items = [];
  for (let page = 1; page <= pages.length; page++) {
    items.push(
      <Pagination.Item key={page} active={page === currentPage + 1} onClick={() => setCurrentPage(page - 1)}>
        {page}
      </Pagination.Item>,
    );
  }

  return (
    <Container>
      <Row>
      {currentData.map((medication, i) => (
           <Col key={`col-${i}`} xs={12} sm={6} md={4} className='mb-4'>
           <MedicationInfoCard
             drugName={medication.drugName}
             activeIngredient={medication.activeIngredient}
             description={medication.description}
             />
           </Col>
         ))}
       </Row>
       <Pagination>{items}</Pagination>
    </Container>
  );
};

export default ResultsDisplayGrid;