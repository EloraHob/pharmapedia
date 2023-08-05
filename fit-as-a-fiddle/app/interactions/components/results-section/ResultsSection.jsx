"use client";

import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import styles from "./ResultsSection.module.css";
import { PiWarningBold } from "react-icons/pi";
import SampleDataPage from "./interaction-results/TEST_DATA";

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

const Disclaimer = () => {
  return (
    <div className={styles.disclaimer}>
      <div>
        <PiWarningBold size={80} className={styles.icon} />
      </div>
      <div className={styles.message}>
        <strong>No interactions were found.</strong>
        <p>However, this does not necessarily mean no interactions exist. Always consult your healthcare provider for guidance.</p>
      </div>
    </div>
  );
};

const Liability = () => {
  return (
    <div className={styles.liability}>
        <PiWarningBold size={30} className={styles.icon} />
        <strong>In order to ensure safe and appropriate management, talk to your healthcare practitioner if you believe you are experiencing, or may experience, a drug interaction.</strong>
    </div>
  );
};

const ResultsSection = () => {
  const [apiResults, setApiResults] = useState(null); // will use to conditionally render message based on API response
  const [firstLoad, setFirstLoad] = useState(true); // hide both messages on first load

  let content;
  if (!firstLoad) {
    if (apiResults === null) {
      content = (
        <Disclaimer />
      );
    } else {
      content = (
        <>
          <Liability />
          <SampleDataPage />
        </>
      );
    }
  }

  return (
    <section className="m-4">
      <Container className={styles.container}>
        <ResultsHeader />
        {content}
      </Container>
    </section>
  );
};

export default ResultsSection;
