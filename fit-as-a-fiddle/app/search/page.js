'use client'

import styles from './page.module.css';
import Header from '../components/Header';
import SearchSection from './search';
import ResultsDisplayGrid from '../filter/ResultsDisplayGrid';

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
      description: "Zyrtec (Cetirizine) is an antihistamine used to relieve allergy symptoms such as watery eyes, runny nose, itching eyes/nose, sneezing, hives, and itching."
    },
    {
      drugName: "Claritin",
      activeIngredient: "Loratadine",
      description: "Claritin (Loratadine) is an antihistamine used to relieve allergy symptoms such as watery eyes, runny nose, itching eyes/nose, and sneezing."
    },
    {
      drugName: "Allegra",
      activeIngredient: "Fexofenadine",
      description: "Allegra (Fexofenadine) is an antihistamine used to relieve allergy symptoms such as watery eyes, runny nose, itching eyes/nose, sneezing, hives, and itching."
    },
  ],
  [
    {
      drugName: "Nexium",
      activeIngredient: "Esomeprazole",
      description: "Nexium (Esomeprazole) is a proton pump inhibitor that decreases the amount of acid produced in the stomach."
    },
    {
      drugName: "Prilosec",
      activeIngredient: "Omeprazole",
      description: "Prilosec (Omeprazole) is a proton pump inhibitor that decreases the amount of acid produced in the stomach."
    },
    {
      drugName: "Prevacid",
      activeIngredient: "Lansoprazole",
      description: "Prevacid (Lansoprazole) is a proton pump inhibitor that decreases the amount of acid produced in the stomach."
    },
  ],
];

export default function Interactions() {
  return (
    <main className={styles.main}>
      <Header
        bgImage="/images/search-header.jpg"
        title="Just Search"
        subheader="Search for information about a specific medication"
        className={styles.header}
      />
      <SearchSection/>
      <ResultsDisplayGrid medications={medicationsData} />
    </main>
  )
}