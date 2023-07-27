'use client'

import styles from './page.module.css';
import Header from '../components/Header';
import ResultsDisplayGrid from './ResultsDisplayGrid';

const medicationsData = [
    [
      { 
        drugName: "Aspirin", 
        activeIngredient: "Acetylsalicylic Acid", 
        description: "Aspirin is a salicylate that is used to treat pain, and reduce fever or inflammation."
      },
      { 
        drugName: "Tylenol", 
        activeIngredient: "Acetaminophen", 
        description: "Tylenol is used to treat mild to moderate and pain, to treat moderate to severe pain in conjunction with opiates, or to reduce fever." 
      },
      { 
        drugName: "Advil", 
        activeIngredient: "Ibuprofen", 
        description: "Advil is a nonsteroidal anti-inflammatory drug (NSAID). It works by reducing hormones that cause inflammation and pain in the body." 
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
  

export default function Filter() {
    return (
        <main className={styles.main}>
            <Header
                bgImage="/images/pills-xaxis-bg-teal.jpeg"
                title="Basic Medication Info"
                subheader="Experiment with different filters to discover different medications!"
                className={styles.header}
            />
            <ResultsDisplayGrid medications={medicationsData} />
        </main>
    )
}