import React from "react";
import { TbArrowsExchange2 } from "react-icons/tb";
import styles from "./Interactions.module.css";

// Renders single interaction result
const Interaction = ({ interaction }) => {
  const [{ sourceConceptItem: name1 }, { sourceConceptItem: name2 }] =
    interaction.interactionConcept;
  const { description } = interaction;

  return (
    <div className={styles.container}>
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
  const uniqueKeys = new Set();

  // Filter interactionData to keep only unique interactions
  const uniqueInteractions = interactionData.flatMap((interactionType) => {
    return interactionType.interactionPair.filter((interaction) => {
      const names = [
        interaction.interactionConcept[0].sourceConceptItem.name,
        interaction.interactionConcept[1].sourceConceptItem.name
      ].sort(); // Sort the names so they're always in a consistent order

      const key = `${names[0]}-${names[1]}`;
      if (!uniqueKeys.has(key)) {
        uniqueKeys.add(key);
        return true; // Keep this interaction
      }
      return false; // Discard this interaction
    });
  });

  return (
    <div>
      {uniqueInteractions.map((interaction) => (
        <Interaction
          key={`${interaction.interactionConcept[0].sourceConceptItem.name}-${interaction.interactionConcept[1].sourceConceptItem.name}`}
          interaction={interaction}
        />
      ))}
    </div>
  );
};

export default Interactions;
