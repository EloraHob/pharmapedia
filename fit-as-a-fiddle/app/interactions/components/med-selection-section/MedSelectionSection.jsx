import React from "react";
import SelectedMedsContainer from "./selected-meds/SelectedMedsContainer";

const InstructionText = ({ text }) => {
  return <p className="lead text-center mt-4">{text}</p>;
};

export default function MedSelectionSection() {
  return (
    <section className="mt-5">
      <InstructionText text="Add two or more medications below to check for interactions." />
      <SelectedMedsContainer medication="test" />
    </section>
  );
};
