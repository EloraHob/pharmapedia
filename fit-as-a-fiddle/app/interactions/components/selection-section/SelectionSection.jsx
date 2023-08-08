"use client";

import React, { useState } from "react";
import SelectedMeds from "./SelectedMeds";
import SearchBar from "@/app/interactions/components/selection-section/SearchBar";
import { Container, Button, Row, Col } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import styles from "./SelectionSection.module.css";

// Informational subheading above search bar
const InformationText = () => (
  <p className="mt-4 text-center">
    Add two or more medications below to check for interactions.
  </p>
);

// Renders content for the medication selection section of the Interactions page.
const SelectionSection = ({ onCheckInteractions }) => {
  const [selectedMedCards, setSelectedMedCards] = useState([]);

  const handleDeleteCard = (index) => {
    setSelectedMedCards(selectedMedCards.filter((_, i) => i !== index));
  };

  const handleAddMedCard = (drug) => {
    if (!selectedMedCards.some((item) => item.rxcui === drug.rxcui)) {
      setSelectedMedCards((prev) => [...prev, drug]);
    }
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
          disabled={selectedMedCards.length < 2} // Disabling the button when less than 2 meds are selected
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
          <SearchBar
            placeholder="Enter a drug name"
            ButtonIcon={FaPlus}
            onDrugSelect={handleAddMedCard}
          />
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
