import styles from './page.module.css';
import Header from '../components/Header';
import SelectionSection from './components/selection-section/SelectionSection';
import ResultsSection from './components/results-section/ResultsSection';

import jsonData from './TEST_DATA.json'; 

const drugName = jsonData.drugData; // Test data containing 3 medications
const interactionData = jsonData.interactionData; // Test data containing 3 interactions

// ALL API CALLS NEED TO HAPPEN HERE

/* Results section API call:
  https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=207106+152923+656659

  Service domain: https://rxnav.nlm.nih.gov
  HTTP request: GET  /REST/interaction/list.xml?rxcuis=rxcuis&sources=sources

  request: https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis= {['+' separated list of rxcuis in test 'drugData' array (or user-generated selectedMeds array)]}  
*/

export default function Interactions() {
  return (
    <main className={styles.main}>
      <Header
        bgImage="/images/pills-xaxis-bg-teal.jpeg"
        title="Drug Interaction Checker"
        subheader="Improve your safety and awareness by checking for possible conflicts between your medications."
        className={styles.header}
      />
      <SelectionSection
        medicationData={drugName}
      />
      <ResultsSection />
    </main>
  )
};
