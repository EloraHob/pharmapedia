import React, { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import styles from './MedicationCard.module.css';

// Renders a medication card with clickable delete button.
export default function MedicationCard({ medication }) {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    setIsDeleted(true);
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.medName}>{medication}</h3>
      <button
        className={styles.deleteBtn}
        type="button"
        onClick={handleDelete}
      >
        <MdDeleteForever size={50}/>
      </button>
    </div>
  );
};