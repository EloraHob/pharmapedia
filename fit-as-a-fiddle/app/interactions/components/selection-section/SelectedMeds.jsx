import React from "react";
import { MdDeleteForever } from "react-icons/md";
import styles from "./SelectedMeds.module.css";

// Renders list of medication cards based on given input
const MedicationCards = ({ onDelete }) => {
  const selectedCards = [
    {
      drugName: "simvastatin 40 MG Oral Tablet [Zocor]",
      rxcui: "152923",
    },
    {
      drugName: "fluconazole 50 MG Oral Tablet [Diflucan]",
      rxcui: "207106",
    },
    {
      drugName: "bosentan 125 MG Oral Tablet",
      rxcui: "656659",
    },
  ];

  // Individual med card
  const renderCard = (medication, index) => (
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

  // List of selected med cards
  return <div className={styles.medList}>{selectedCards.map(renderCard)}</div>;
};

export default MedicationCards;
