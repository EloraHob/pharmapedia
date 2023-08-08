"use client";

import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const filterOptions = [
  {
    category: "Dosage Form",
    options: [
      "Tablet",
      "Capsule",
      "Liquid",
      "Foam",
      "Cream",
      "Gel",
      "Lotion",
      "Injection",
    ],
  },
  {
    category: "Route of Administration",
    options: [
      "Oral",
      "Topical",
      "Injection",
      "Nasal",
      "Otic (ear)",
    ],
  },
  {
    category: "Drug Status",
    options: ["Prescription", "OTC", "Discontinued"],
  },
];

const FilterSection = ({ onFiltersChange }) => {
  const initialFilters = filterOptions.reduce(
    (acc, curr) => ({
      ...acc,
      [curr.category]: curr.options.reduce(
        (acc, curr) => ({ ...acc, [curr]: false }),
        {}
      ),
    }),
    {}
  );

  const [filters, setFilters] = useState(initialFilters);

  const handleCheck = (category, option) => {
    setFilters({
      ...filters,
      [category]: {
        ...filters[category],
        [option]: !filters[category][option],
      },
    });
  };

  const resetFilters = () => setFilters(initialFilters);

  const handleApplyFilters = () => {
    const appliedFilters = Object.entries(filters).reduce((acc, [category, options]) => {
        const selectedOptions = Object.keys(options).filter(option => options[option]);
        if (selectedOptions.length > 0) {
            acc[category] = selectedOptions;
        }
        return acc;
    }, {});

    // Send the applied filters to the parent component
    onFiltersChange(appliedFilters);
    console.log(appliedFilters);
};

  return (
    <div className="border border-dark rounded w-25 m-3 p-3">
      {filterOptions.map(({ category, options }) => (
        <div key={category}>
          <h5 className="pt-4 text-uppercase font-weight-bold">{category}</h5>
          {options.map((option) => (
            <Form.Check
              type="checkbox"
              key={option}
              id={option}
              label={option}
              checked={filters[category][option]}
              onChange={() => handleCheck(category, option)}
            />
          ))}
        </div>
      ))}
      <div className="pt-4 text-center">
        <Button variant="secondary" onClick={resetFilters} className="me-4 px-4">
          Reset All
        </Button>
        <Button variant="primary" onClick={handleApplyFilters}>
          Apply Filters
        </Button>
      </div>
    </div>
  );
};

export default FilterSection;
