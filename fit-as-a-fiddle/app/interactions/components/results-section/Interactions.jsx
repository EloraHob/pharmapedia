import React from 'react';
import { TbArrowsExchange2 } from "react-icons/tb";
import styles from './Interactions.module.css';

// Renders single interaction result
const Interaction = ({ interaction }) => {
  const [{ minConceptItem: name1 }, { minConceptItem: name2 }] = interaction.interactionConcept;
  const { description } = interaction;

  return (
    <div className={styles.container} >
      <div className={styles.interaction}>
        <h3>{name1.name}</h3>
        <TbArrowsExchange2 size={30} className={styles.icon} />
        <h3>{name2.name}</h3>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

// Creates group of interaction results based on given data
const Interactions = ({ interactionData }) => {
  return (
    <div>
      {interactionData.flatMap((group) =>
        group.fullInteractionType.flatMap((interactionType) =>
          interactionType.interactionPair.map((interaction) => (
            <Interaction 
              key={`${interaction.interactionConcept[0].minConceptItem.name}-${interaction.interactionConcept[1].minConceptItem.name}`} 
              interaction={interaction} 
            />
          ))
        )
      )}
    </div>
  );
};

export default Interactions;
