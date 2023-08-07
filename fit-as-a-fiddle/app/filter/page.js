'use client'

import { useState, useEffect } from 'react';
import styles from './page.module.css';
import Header from '../components/Header';
import ResultsDisplayGrid from './ResultsDisplayGrid';
import FilterSection from './FilterSection';
import FilterSearch from './FilterSearch';


/* 
    WE MAY NEED TP USE openFDA API here.
    API KEY: 9Coj99auGenhBnKNdAQ5bOOAdFd8aGYSXcEKtAcV

    Potential filter categories: 
      DOSAGE_FORM: https://api.fda.gov/drug/drugsfda.json?search=products.dosage_form:{"term"} &limit=100     // double quotes indicates EXACT match
      MARKETING_STATUS: https://api.fda.gov/drug/drugsfda.json?search=products.marketing_status:1 &limit=100
  
      
*/

export default function Filter() {
  const [searchResults, setSearchResults] = useState([]);
    
  useEffect(() => {
    console.log('Search results updated in parent:', searchResults);
  }, [searchResults]);
  
  return (
    <main className={styles.main}>
      <Header
        bgImage="/images/filter-header.jpg"
        title="Basic Medication Info"
        subheader="Experiment with different filters to discover different medications!"
        className={styles.header}
      />
      <div className='d-flex'>
        <FilterSection />
        <div className="d-flex-column">
          <FilterSearch
            placeholder="enter a drug or manufacturer name"
            setResults={setSearchResults}
          />
          <ResultsDisplayGrid medications={searchResults} />
        </div>
      </div>
    </main>
  )
}