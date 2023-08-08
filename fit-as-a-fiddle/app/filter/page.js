'use client'

import { useState, useEffect } from 'react';
import styles from './page.module.css';
import Header from '../components/Header';
import ResultsDisplayGrid from './ResultsDisplayGrid';
import FilterSection from './FilterSection';
import FilterSearch from './FilterSearch';
import axios from 'axios';

export default function Filter() {
  const [searchResults, setSearchResults] = useState([]);
  const [firstVisit, setFirstVisit] = useState(true);
  const [activeFilters, setActiveFilters] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  const fetchResults = (searchType, searchTerm) => {
    setSearchResults([]);
    setErrorMsg(null);
    const baseURL = `https://api.fda.gov/drug/drugsfda.json?search=`;

    let query;
    if (searchType === "Medication") {
      query = `products.brand_name=${searchTerm}`;
    } else if (searchType === "Manufacturer") {
      query = `openfda.manufacturer_name=${searchTerm}+sponsor_name=${searchTerm}`;
    }

    // If there are active filters, combine them with the query
    if (activeFilters) {
      query = `${query}+AND+${activeFilters}`;
    }

    const url = `${baseURL}${query}&limit=5`;

    axios
      .get(url)
      .then((response) => {
        if (response.data.error && response.data.error.code === "NOT_FOUND") {
          setSearchResults([]);
          setFirstVisit(false);
          setErrorMsg(response.data.error.message);
        } else {
          const formattedResults = response.data.results.map((result) => {
            const manufacturer = result.sponsor_name;
            return result.products.map((product) => ({
              drugName: product.brand_name,
              manufacturer: manufacturer,
              description: product.route
            }));
          }).flat();
          setSearchResults(formattedResults);
          setErrorMsg(null);
          setFirstVisit(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setErrorMsg("No results found. Try modifying your search for better results.");
      })
      .finally(() => {
        setFirstVisit(false);
      });
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
        <FilterSection setActiveFilters={setActiveFilters} />
        <div className={styles.filterSearchContainer}>
          <FilterSearch
            placeholder="enter a drug or manufacturer name"
            fetchResults={fetchResults}
          />
          {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
          <ResultsDisplayGrid medications={searchResults} firstVisit={firstVisit} />
        </div>
      </div>
    </main>
  )
}