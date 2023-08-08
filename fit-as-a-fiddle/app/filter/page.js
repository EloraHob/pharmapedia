'use client'

import { useState, useEffect } from 'react';
import styles from './page.module.css';
import Header from '../components/Header';
import ResultsDisplayGrid from './ResultsDisplayGrid';
import FilterSection from './FilterSection';
import FilterSearch from './FilterSearch';

export default function Filter() {
  const [searchResults, setSearchResults] = useState([]);
  
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
        <div className={styles.filterSearchContainer}>
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