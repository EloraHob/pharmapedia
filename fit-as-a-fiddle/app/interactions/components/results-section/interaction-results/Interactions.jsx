import React from 'react';
import { TbArrowsExchange2 } from "react-icons/tb";
import styles from './Interactions.module.css';

// Renders single interaction result
const Interaction = ({ interaction }) => {
  const [{ minConceptItem: name1 }, { minConceptItem: name2 }] =
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
const InteractionGroup = ({ group }) => {
    return (
        <div>
            {group.fullInteractionType.map((interactionType) => (
                interactionType.interactionPair.map((interaction, index) => (
                    <Interaction key={index} interaction={interaction} />
                ))
            ))}
        </div>
    );
};


const Interactions = ({ interactionData }) => {
    return (
        <div>
            {interactionData.fullInteractionTypeGroup.map((group, index) => (
                <InteractionGroup key={index} group={group} />
            ))}
        </div>
    );
};

export default Interactions;
