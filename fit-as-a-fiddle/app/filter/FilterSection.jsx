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

const categoryMapping = {
  "Dosage Form": "products.dosage_form",
  "Route of Administration": "products.route",
  "Drug Status": "products.marketing_status",
};

const FilterSection = ({ setActiveFilters }) => {
  const initialFilterState = filterOptions.reduce((acc, curr) => {
    acc[curr.category] = curr.options.reduce((a, option) => {
      a[option] = false;
      return a;
    }, {});
    return acc;
  }, {});

  const [filters, setFilters] = useState(initialFilterState);

  const handleCheck = (category, option) => {
    setFilters(prevState => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [option]: !prevState[category][option],
      }
    }));
  };

  const resetFilters = () => {
    setFilters(initialFilterState);
  };

  const handleApplyFilters = () => {
    let querySegments = [];

    for (const [category, options] of Object.entries(filters)) {
        let selectedOptions = [];
        
        for (const [option, isChecked] of Object.entries(options)) {
            if (isChecked) {
                selectedOptions.push(`${categoryMapping[category]}=${option.toLowerCase()}`);
            }
        }

        if (selectedOptions.length) {
            querySegments.push(selectedOptions.join("+AND+"));
        }
    }

    const fullQuery = querySegments.join("+AND+");
    setActiveFilters(fullQuery);
    console.log(fullQuery);
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