"use client";

import React, { useState } from "react";
import SelectedMeds from "./SelectedMeds";
import SearchBar from "@/app/components/SearchBar";
import { Container, Button, Row, Col } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import styles from "./SelectionSection.module.css";

// Test data
const TEST_DATA = [
  {
    drugName: "simvastatin 40 MG Oral Tablet [Zocor]",
    rxcui: "152923",
  },
  {
    drugName: "fluconazole 50 MG Oral Tablet [Diflucan]",
    rxcui: "207106",
  },
  {
    drugName: "bosentan 125 MG Oral Tablet",
    rxcui: "656659",
  },
];

// Informational subheading above search bar
const InformationText = () => (
  <p className="mt-4 text-center">
    Add two or more medications below to check for interactions.
  </p>
);

// Renders content for the medication selection section of the Interactions page.
const SelectionSection = ({ onCheckInteractions }) => {
  const [selectedMedCards, setSelectedMedCards] = useState(TEST_DATA);

  const handleDeleteCard = (index) => {
    setSelectedMedCards(selectedMedCards.filter((_, i) => i !== index));
  };

  // Concats rxcui for each selected med into + separated string
  let rxcuiList = selectedMedCards
    .map((medication) => medication.rxcui)
    .join("+");

  const CheckInteractionsButton = () => (
    <Row
      className={`justify-content-end mt-3 mb-3 ${styles.checkInteractionsButton}`}
    >
      <Col xs="auto bg-white">
        <Button
          variant="primary"
          onClick={() => onCheckInteractions(rxcuiList)}
          disabled={selectedMedCards.length < 2}
        >
          Check interactions
        </Button>
      </Col>
    </Row>
  );

  // Renders medication selection section.
  return (
    <section>
      <InformationText />
      <Container className={styles.container}>
        <div className={styles.search}>
          <SearchBar placeholder="Enter a drug name" ButtonIcon={FaPlus} />
        </div>

        <SelectedMeds
          selectedCards={selectedMedCards}
          onDelete={handleDeleteCard}
        />

        <CheckInteractionsButton />
      </Container>
    </section>
  );
};

export default SelectionSection;
