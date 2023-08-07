import React from "react";
import { MdDeleteForever } from "react-icons/md";
import styles from "./SelectedMeds.module.css";

// Renders list of medication cards based on provided input
const MedicationCards = ({ selectedCards, onDelete }) => {
  // Individual med card
  const medication = (medication, index) => (
    <div className={styles.card} key={medication.rxcui}>
      <h3 className={styles.medName}>{medication.drugName}</h3>
      <button
        className={styles.deleteBtn}
        type="button"
        onClick={() => onDelete(index)}
      >
        <MdDeleteForever size={30} />
      </button>
    </div>
  );

  // Render list of selected med cards
  return <div className={styles.medList}>{selectedCards.map(medication)}</div>;
};

export default MedicationCards;
