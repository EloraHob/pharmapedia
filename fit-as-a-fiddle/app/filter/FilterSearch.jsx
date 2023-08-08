import React, { useState, useEffect } from "react";
import { InputGroup, Dropdown, FormControl, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import styles from './FilterSection.module.css';
import { useRouter } from "next/navigation";
import axios from "axios";

const SearchBar = ({ placeholder, fetchResults }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("Medication");
  const router = useRouter();

  const handleSelect = (e) => {
    setSearchType(e);
  };

  const handleSubmit = () => {
    fetchResults(searchType, searchTerm);
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

export default SearchBar;