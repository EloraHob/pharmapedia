'use client'

import React, { useState } from 'react';
import MedicationCard from './MedicationCard';
import SearchBar from '@/app/components/SearchBar';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { FaPlus } from "react-icons/fa";

/*
  This is a client component for the MedicationCard component. 
  Since components are server components by default, we need to explicitly 
  define client components-- this enables us to use things like useState. 
  All children of client components become part of this client bundle.
  See Next.js App Router docs for more info.
*/

const CheckInteractionsButton = () => (
  <Row className="justify-content-end mt-3 mb-3">
    <Col xs="auto">
      <Button variant="primary">Check Interactions</Button>
    </Col>
  </Row>
);

const InformationText = ({ text }) => (
  <p className='mt-4 text-center'>{text}</p>
);

const MedicationCardContainer = ({ medication }) => {
  const [isDeleted, setIsDeleted] = useState(false);

  return (
    <section>
      <InformationText text="Add two or more medications below to check for interactions." />
      <Container className="border border-primary rounded mt-2 mb-5">
        <SearchBar
          placeholder="Enter a drug name"
          ButtonIcon={FaPlus}
        />

        <MedicationCard
          medication={medication}
          isDeleted={isDeleted}
          onDelete={() => setIsDeleted(true)}
        />

        <CheckInteractionsButton />
      </Container>
    </section>
  );
};

export default MedicationCardContainer;
