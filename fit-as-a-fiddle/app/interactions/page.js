'use client'

import React, { useState } from 'react';
import Header from '../components/Header';
import SelectionSection from './components/selection-section/SelectionSection';
import ResultsSection from './components/results-section/ResultsSection';
import styles from './page.module.css';

const Interactions = () => {
  const [results, setResults] = useState(null);
  const [hasChecked, setHasChecked] = useState(false);

  const fetchInteractions = (rxcuiList) => {
    setHasChecked(true);
    fetch(`https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=${rxcuiList}&sources=DrugBank`)
      .then(response => response.json())
      .then(data => {
        setResults(data);
      })
      .catch(error => console.error("Error fetching data:", error));
  };

  return (
    <main className='min-vh-100'>
      <Header
        bgImage="/images/pills-xaxis-bg-teal.jpeg"
        title="Drug Interaction Checker"
        subheader="Improve your safety and awareness by checking for possible conflicts between your medications."
        className={styles.header}
      />
      <SelectionSection onCheckInteractions={fetchInteractions} />
      <ResultsSection results={results} hasChecked={hasChecked} />
    </main>
  );
};

export default Interactions;
