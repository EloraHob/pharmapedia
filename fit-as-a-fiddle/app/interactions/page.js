'use client';

import React from 'react';
import styles from './page.module.css';
import Header from '../components/Header';
import SelectionSection from './components/selection-section/SelectionSection';
import ResultsSection from './components/results-section/ResultsSection';
import { Suspense } from 'react';

import jsonData from './TEST_DATA.json';
const interactionData = jsonData.interactionData;

// ALL API CALLS NEED TO HAPPEN HERE

/* Selection section API call:
  https://rxnav.nlm.nih.gov/REST/approximateTerm.json?term=zocor&maxEntries=4

  Service domain: https://rxnav.nlm.nih.gov
  HTTP request: GET  /REST/approximateTerm.xml?term=[value]&maxEntries=[value]&option=[value]

  request: https://rxnav.nlm.nih.gov/REST/approximateTerm.json?term={userInput}&maxEntries=4

  ** Must filter these results to ensure that ONLY entries containing both name AND rxcui are displayed to the user. **


  ALTERNATIVE OPTION:


  https://rxnav.nlm.nih.gov/REST/rxcui.json?name=Zocor

  Service domain: https://rxnav.nlm.nih.gov
  HTTP request: GET  /REST/rxcui.xml?name=yourName&allsrc=0or1&srclist=yourSources&search=0or1or2

  request: https://rxnav.nlm.nih.gov/REST/rxcui.json?name={userInput}&search={0 for exact, 1 for normalized, 2 for best match}

  ** This method would simply take the user input and generate card with the input as the term name and the rxcui as the API result. Would need to create component to display error if no result is found. **

*/

/* Results section API call:
  https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=207106+152923+656659

  Service domain: https://rxnav.nlm.nih.gov
  HTTP request: GET  /REST/interaction/list.xml?rxcuis=rxcuis&sources=sources

  request: https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis={['+' separated list of rxcuis in test 'drugData' array (or user-generated selectedMeds array)]}&sources=DrugBank  

    
*/
export const dynamic = 'force-dynamic'


// ASYNC CAN'T BE USED ON CLIENT FUNCTIONS HELPPPP
export default function Interactions({ params, searchParams }) {
  return (
    <main className={styles.main}>
      <Header
        bgImage="/images/pills-xaxis-bg-teal.jpeg"
        title="Drug Interaction Checker"
        subheader="Improve your safety and awareness by checking for possible conflicts between your medications."
        className={styles.header}
      />

      <SelectionSection />

      <Suspense fallback={<h1>Loading...</h1>}>
        <ResultsSection />
      </Suspense>
    </main>
  )
};
