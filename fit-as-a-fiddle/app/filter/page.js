'use client';

import { useState } from 'react';
import styles from './page.module.css';
import Header from '../components/Header';
import ResultsDisplayGrid from './ResultsDisplayGrid';
import FilterSection from './FilterSection';
import FilterSearch from './FilterSearch';

const SEARCH_STATUS = {
  INITIAL: 'initial',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
  NO_RESULTS: 'no_results',
};

export default function Filter() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [searchStatus, setSearchStatus] = useState(SEARCH_STATUS.INITIAL);

  const renderContent = () => {
    switch (searchStatus) {
      case SEARCH_STATUS.INITIAL:
        return '';
      case SEARCH_STATUS.LOADING:
        return <div>Loading...</div>; // consider adding a loading state
      case SEARCH_STATUS.SUCCESS:
        return <ResultsDisplayGrid medications={searchResults} />;
      case SEARCH_STATUS.NO_RESULTS:
        return <div>No matches found!</div>;
      case SEARCH_STATUS.ERROR:
      default:
        return <div>Something went wrong. Please try again.</div>;
    }
  };

  return (
    <main className={styles.main}>
      <Header
        bgImage="/images/filter-header.jpg"
        title="Basic Medication Info"
        subheader="Experiment with different filters to discover different medications!"
        className={styles.header}
      />
      <div className='d-flex'>
        <FilterSection onFiltersChange={setSelectedFilters} />
        <div className={styles.filterSearchContainer}>
          <FilterSearch
            placeholder="enter a drug name or manufacturer"
            setResults={setSearchResults}
            filters={selectedFilters}
            searchStatus={searchStatus}
            setSearchStatus={setSearchStatus}
          />

          {renderContent()}
        </div>
      </div>
    </main>
  );
}
