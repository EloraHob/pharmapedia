'use client'

import React, { useState } from 'react';
import MedicationCard from './MedicationCard';

/*
  This is a client component for the MedicationCard component. 
  Since components are server components by default, we need to explicitly 
  define client components-- this enables us to use things like useState. 
  All children of client components become part of this client bundle.
  See Next.js App Router docs for more info.
*/
const MedicationCardContainer = ({ medication }) => {
  const [isDeleted, setIsDeleted] = useState(false);

  return (
    <MedicationCard
      medication={medication}
      isDeleted={isDeleted}
      onDelete={() => setIsDeleted(true)}
    />
  );
};

export default MedicationCardContainer;
