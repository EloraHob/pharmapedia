'use client'

import styles from './page.module.css';
import Header from '../components/Header';
import ResultsDisplayGrid from './ResultsDisplayGrid';
import FilterSection from './FilterSection';
import FilterSearch from './FilterSearch';
import { FaSearch } from 'react-icons/fa';

/* 
    WE MAY NEED TP USE openFDA API here.
    API KEY: 9Coj99auGenhBnKNdAQ5bOOAdFd8aGYSXcEKtAcV

    Potential filter categories: 
      DOSAGE_FORM: https://api.fda.gov/drug/drugsfda.json?search=products.dosage_form:{"term"} &limit=100     // double quotes indicates EXACT match
      MARKETING_STATUS: https://api.fda.gov/drug/drugsfda.json?search=products.marketing_status:1 &limit=100

      
*/

const medicationsData = [
  [
    {
      drugName: "Aspirin",
      activeIngredient: "Acetylsalicylic Acid",
    },
    {
      drugName: "Tylenol",
      activeIngredient: "Acetaminophen",
    },
    {
      drugName: "Advil",
      activeIngredient: "Ibuprofen",
    },
  ],
  [
    {
      drugName: "Zyrtec",
      activeIngredient: "Cetirizine",
    },
    {
      drugName: "Claritin",
      activeIngredient: "Loratadine",
    },
    {
      drugName: "Allegra",
      activeIngredient: "Fexofenadine",
    },
  ],
  [
    {
      drugName: "Nexium",
      activeIngredient: "Esomeprazole",
    },
    {
      drugName: "Prilosec",
      activeIngredient: "Omeprazole",
    },
    {
      drugName: "Prevacid",
      activeIngredient: "Lansoprazole",
    },
  ],
];


export default function Filter() {
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
            placeholder="enter a drug name"
            ButtonIcon={FaSearch}
          />
          <ResultsDisplayGrid medications={medicationsData} />
        </div>
      </div>
    </main>
  )
}