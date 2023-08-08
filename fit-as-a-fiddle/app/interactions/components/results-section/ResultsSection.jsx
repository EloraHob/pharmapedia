"use client";

import React from "react";
import { Container } from "react-bootstrap";
import { PiWarningBold } from "react-icons/pi";
import styles from "./ResultsSection.module.css";
import Interactions from "./Interactions";

// Render header
const ResultsHeader = () => (
  <div className={"p-2"}>
    <h2 className={styles.heading}>Interaction Results</h2>
  </div>
);

// No-interactions-found message
const Disclaimer = () => {
  return (
    <div className={styles.disclaimer}>
      <div>
        <PiWarningBold size={80} className={styles.icon} />
      </div>
      <div className={styles.message}>
        <strong>No interactions were found.</strong>
        <p>
          However, this does not necessarily mean no interactions exist. Always
          consult your healthcare provider for guidance.
        </p>
      </div>
    </div>
  );
};

// Liability message (displays with results)
const Liability = () => {
  return (
    <div className={styles.liability}>
      <PiWarningBold size={30} className={styles.icon} />
      <strong>
        In order to ensure safe and appropriate management, talk to your
        healthcare practitioner if you believe you are experiencing, or may
        experience, a drug interaction.
      </strong>
    </div>
  );
};

// Results section of Interaction page
const ResultsSection = ({ results, hasChecked }) => {
  const hasInteractions =
    results?.fullInteractionTypeGroup?.[0]?.fullInteractionType?.length > 0;

  return (
    <section className="m-4">
      <Container className={styles.container}>
        <ResultsHeader />
        {hasChecked && (
          <>
            {hasInteractions ? <Liability /> : <Disclaimer />}
            {hasInteractions && (
              <Interactions interactionData={results?.fullInteractionTypeGroup?.[0]?.fullInteractionType} />

            )}
          </>
        )}
      </Container>
    </section>
  );
};

export default ResultsSection;
