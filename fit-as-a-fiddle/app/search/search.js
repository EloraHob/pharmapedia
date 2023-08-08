import React, { useState } from 'react';
import styles from './search.module.css';
import MedicationSearch from './MedicationSearch';
import MedicationInfoCard from './MedicationInfoCard';
import ResultsDisplayGrid from './ResultsDisplayGrid';

const medicationsData = [
  [
    {
      drugName: "Aspirin",
      activeIngredient: "Acetylsalicylic Acid",
      description: "Aspirin is a salicylate that is used to treat pain, and reduce fever or inflammation.",
      rxcui: 252857
    },
    {
      drugName: "Tylenol",
      activeIngredient: "Acetaminophen",
      description: "Tylenol is used to treat mild to moderate and pain, to treat moderate to severe pain in conjunction with opiates, or to reduce fever.",
      rxcui: 198440
    },
    {
      drugName: "Advil",
      activeIngredient: "Ibuprofen",
      description: "Advil is a nonsteroidal anti-inflammatory drug (NSAID). It works by reducing hormones that cause inflammation and pain in the body.",
      rxcui: 310964
    },
  ],
  [
    {
      drugName: "Zyrtec",
      activeIngredient: "Cetirizine",
      description: "Zyrtec (Cetirizine) is an antihistamine used to relieve allergy symptoms such as watery eyes, runny nose, itching eyes/nose, sneezing, hives, and itching.",
      rxcui: 1014677
    },
    {
      drugName: "Claritin",
      activeIngredient: "Loratadine",
      description: "Claritin (Loratadine) is an antihistamine used to relieve allergy symptoms such as watery eyes, runny nose, itching eyes/nose, and sneezing.",
      rxcui: 755476
    },
    {
      drugName: "Allegra",
      activeIngredient: "Fexofenadine",
      description: "Allegra (Fexofenadine) is an antihistamine used to relieve allergy symptoms such as watery eyes, runny nose, itching eyes/nose, sneezing, hives, and itching.",
      rxcui: 997420
    },
  ],
  [
    {
      drugName: "Nexium",
      activeIngredient: "Esomeprazole",
      description: "Nexium (Esomeprazole) is a proton pump inhibitor that decreases the amount of acid produced in the stomach.",
      rxcui: 284799
    },
    {
      drugName: "Prilosec",
      activeIngredient: "Omeprazole",
      description: "Prilosec (Omeprazole) is a proton pump inhibitor that decreases the amount of acid produced in the stomach.",
      rxcui: 283742
    },
    {
      drugName: "Prevacid",
      activeIngredient: "Lansoprazole",
      description: "Prevacid (Lansoprazole) is a proton pump inhibitor that decreases the amount of acid produced in the stomach.",
      rxcui: 206206
    },
  ],
];

const ITEMS_PER_PAGE = 9; // Number of medication cards per page

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSectionHidden, setIsSectionHidden] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = async () => {
    try {
      const data = await MedicationSearch(searchTerm);
      setSearchResults(data.results);
      setCurrentPage(1);
      setIsSectionHidden(true);
    } catch (error) {
      console.error('Error searching medication:', error);
      setIsSectionHidden(true);
      setErrorMessage('An error occurred while searching for medications. Please try again later.');
    }
  };

  const handleHideSection = () => {
    setIsSectionHidden(true);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalMedications = searchResults.length;
  const totalPages = Math.ceil(totalMedications / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalMedications);

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

       {/* Display error message if there's an error */}
       {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}

      {!isSectionHidden && (
        <div>
          <ResultsDisplayGrid medications={medicationsData} />
        </div>
      )}

      {/* Display search results */}
      {!errorMessage && searchResults.length > 0 && (
        <div className={styles.medicationGrid}>
          {searchResults
            .slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)
            .map((result) => (
              <div key={result.product_id} className={styles.medicationCard}>
                <MedicationInfoCard
                  drugName={result.brand_name}
                  activeIngredient={result.active_ingredients[0]?.name || 'Unknown'}
                  description={result.labeler_name || 'Description not available'}
                  rxcui={result.openfda.rxcui}
                />
              </div>
            ))}
        </div>
      )}

      {/* Pagination */}
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            className={currentPage === page ? styles.activePage : styles.pageButton}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
