"use client";

import React from "react";
import { Container } from "react-bootstrap";
import styles from "./ResultsSection.module.css";
import { PiWarningBold } from "react-icons/pi";

/*
  This is a client component for the MedicationCard component. 
  Since components are server components by default, we need to explicitly 
  define client components-- this enables us to use things like useState. 
  All children of client components become part of this client bundle.
  See Next.js App Router docs for more info.
*/

const ResultsHeader = () => (
  <div className={"p-2"}>
    <h2 className={styles.heading}>Interaction Results</h2>
  </div>
);

const Disclaimer = ({ bold, message }) => {
  return (
    <div className={styles.disclaimer}>
      <div>
        <PiWarningBold size={80} className={styles.icon} />
      </div>
      <div className={styles.message}>
        <strong>{bold}</strong>
        <p>{message}</p>
      </div>
    </div>
  );
};

const ResultsSection = () => {
  return (
    <section className="m-4">
      <Container className={styles.container}>
        <ResultsHeader />
        <Disclaimer
          bold="No interactions were found. "
          message="However, this does not necessarily mean no interactions exist. Always consult your healthcare provider for guidance."
        />
      </Container>
    </section>
  );
};

export default ResultsSection;
