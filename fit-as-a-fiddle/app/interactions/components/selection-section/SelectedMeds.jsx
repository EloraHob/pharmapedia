import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import styles from './SelectedMeds.module.css';

const MedicationCards = ({ medications, onDelete }) => {

  const renderCard = (medication, index) => (
    <div className={styles.card} key={medication.rxcui}>
      <h3 className={styles.medName}>{medication.drugName}</h3>
      <button className={styles.deleteBtn} type="button" onClick={() => onDelete(index)}>
        <MdDeleteForever size={30} />
      </button>
    </div>
  );

  return (
    <div className={styles.medList}>
      {medications.map(renderCard)}
    </div>
  );
};

export default MedicationCards;
