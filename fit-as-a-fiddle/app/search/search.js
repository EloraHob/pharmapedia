import React, { useState } from 'react';
import styles from './search.module.css';
import MedicationSearch from './MedicationSearch';
import MedicationInfoCard from './filter/MedicationInfoCard';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const data = await MedicationSearch(searchTerm);
      setSearchResults(data.results);
    } catch (error) {
      console.error('Error searching medication:', error);
    }
  };

  return (
    <div className={styles.search}>
      <div className={styles.bar}>
        {/* Magnifying glass icon */}
        <div className={styles.icon}>
          <img src="./images/search.png" alt="Magnifying Glass" width="20" height="20" />
        </div>

        {/* Prefilled greyed text */}
        <input
          type="text"
          placeholder="Enter a medication name here..."
          className={styles.input}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Search now button */}
        <button className={styles.button} onClick={handleSearch}>
          Search Now
        </button>
      </div>

      {/* Display search results */}
      <div>
        <ul>
          {searchResults.map((result) => (
            <MedicationInfoCard
              key={result.product_id}
              drugName={result.brand_name}
              activeIngredient={result.active_ingredients.map((ingredient) => ingredient.name)}
              description={result.packaging.description}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchPage;