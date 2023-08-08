import React, { useEffect, useState } from "react";
import { InputGroup, Dropdown, FormControl, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import styles from "./FilterSection.module.css";
import { useRouter } from "next/navigation";
import axios from "axios";

const FilterSearch = ({
  placeholder,
  setResults,
  filters,
  setSearchStatus,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("Medication");
  const router = useRouter();

  const categoryMapping = {
    "Dosage Form": "product.dosage_form",
    "Route of Administration": "route",
    "Drug Status": "marketing_status",
  };

  const handleSelect = (e) => {
    setSearchType(e);
  };

  const formatFiltersForQuery = (filters) => {
    return Object.entries(filters)
      .map(([key, values]) => {
        const mappedKey = categoryMapping[key] || key;
        return values.map((value) => `${mappedKey}:${value}`).join("+AND+");
      })
      .join("+AND+");
  };

  const handleSubmit = () => {
    const baseURL = `https://api.fda.gov/drug/drugsfda.json?search=`;

    // Modify the query depending on the searchType
    let query;
    if (searchType === "Medication") {
      query = `products.brand_name=${searchTerm}`;
    } else if (searchType === "Manufacturer") {
      query = `openfda.manufacturer_name=${searchTerm}+sponsor_name=${searchTerm}`;
    }

    const filtersQuery = formatFiltersForQuery(filters);
    const finalQuery = filtersQuery ? `${query}+AND+${filtersQuery}` : query;

    const url = `${baseURL}${finalQuery}&limit=5`;

    axios
      .get(url)
      .then((response) => {
        if (response.data.error) {
          setSearchStatus("error");
          setResults([]);
        } else {
          const formattedResults = response.data.results
            .map((result) => {
              return (result.products || []).map((product) => ({
                drugName: product.brand_name || "Unknown Drug",
                manufacturer: result.sponsor_name || "Unknown Manufacturer",
                description: product.dosage_form || "Unknown Dosage Form",
              }));
            })
            .flat();

          setResults(formattedResults);
          setSearchStatus("success");
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setSearchStatus("error");
      });
  };

  useEffect(() => {
    const searchTypeFromRoute = router.query && router.query.searchType;
    if (searchTypeFromRoute) {
      setSearchType(searchTypeFromRoute);
    }
  }, [router.query]);

  return (
    <InputGroup className={styles.filterSearch}>
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle
          variant="outline-secondary"
          id="dropdown-basic"
          className="ms-4"
        >
          {searchType}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="Medication">Medication</Dropdown.Item>
          <Dropdown.Item eventKey="Manufacturer">Manufacturer</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <FormControl
        placeholder={placeholder}
        className={styles.input}
        aria-label="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button variant="outline-primary d-flex" onClick={handleSubmit}>
        <FaSearch size={20} className="pt-1" />
      </Button>
    </InputGroup>
  );
};

export default FilterSearch;

// https://rxnav.nlm.nih.gov/REST/rxcui.json?name={useInputQuery}&search=1
