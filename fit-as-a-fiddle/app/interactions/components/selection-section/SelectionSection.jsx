"use client";

import React, { useState } from "react";
import SelectedMeds from "./SelectedMeds";
import SearchBar from "@/app/components/SearchBar";
import { Container, Button, Row, Col } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import styles from "./SelectionSection.module.css";

// Test data
const selectedCards = [
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

const InformationText = () => (
  <p className="mt-4 text-center">
    Add two or more medications below to check for interactions.
  </p>
);

// Renders content for the medication selection section of the Interactions page.
const SelectionSection = () => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [selectedMedCards, setSelectedMedCards] = useState(selectedCards);

  // Prepares list of selectedMedCards for Interaction API request.
  // The rxcui from each MedCard is saved into a string.
  const convertSelectedMedsToString = () => {
    const rxcuiList = selectedMedCards
      .map((medication) => medication.rxcui)
      .join("+");
    console.log(rxcuiList);
  };

  // I don't think this is right. Just wanna toggle the deletion of the card.
const handleDeleteCard = (index) => {

};

  // TODO: modify so api call is triggered on click
  // should this be in its own .jsx file as a separate component?
  const CheckInteractionsButton = () => (
    <Row
      className={`justify-content-end mt-3 mb-3 ${styles.checkInteractionsButton}`}
    >
      <Col xs="auto">
        <Button variant="primary" onClick={convertSelectedMedsToString}>
          {"Check interactions"}
        </Button>
      </Col>
    </Row>
  );

  // Renders medication search & selection section.
  return (
    <section>
      <InformationText />
      <Container className={styles.container}>
        <div className={styles.search}>
          <SearchBar placeholder="Enter a drug name" ButtonIcon={FaPlus} />
        </div>

        <SelectedMeds
          selectedCards={selectedCards}
          onDelete={handleDeleteCard}
        />

        <CheckInteractionsButton />
      </Container>
    </section>
  );
};

export default SelectionSection;
