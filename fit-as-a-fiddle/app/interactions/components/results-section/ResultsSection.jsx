"use client";

import React from "react";
import { Container } from "react-bootstrap";

/*
  This is a client component for the MedicationCard component. 
  Since components are server components by default, we need to explicitly 
  define client components-- this enables us to use things like useState. 
  All children of client components become part of this client bundle.
  See Next.js App Router docs for more info.
*/

const ResultsHeader = () => (
  <div className="p-2">
    <h2>Interaction Results</h2>
  </div>
);

const ResultsSection = () => {
  return (
    <section className="m-4">
      <Container className="border border-primary rounded mt-2 mb-5">
        <ResultsHeader />
        <p>Test!</p>
      </Container>
    </section>
  );
};

export default ResultsSection;
