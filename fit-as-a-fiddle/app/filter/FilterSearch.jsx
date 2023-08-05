import React, { useState } from 'react';
import { Dropdown, InputGroup, FormControl, Button } from 'react-bootstrap';

const SearchBar = ({ placeholder, ButtonIcon }) => {
  const [searchType, setSearchType] = useState("Brand");

  const handleSelect = (e) => {
    setSearchType(e);
  };

  return (
    <InputGroup className="mb-3 mt-4">
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle
          variant="outline-secondary"
          id="dropdown-basic"
          className="ms-4"
        >
          {searchType}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="Brand">Brand</Dropdown.Item>
          <Dropdown.Item eventKey="Generic">Generic</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <FormControl placeholder={placeholder} aria-label="Search" />
      <Button variant="outline-primary d-flex me-5">
        <ButtonIcon size={20} className="pt-1" />
      </Button>
    </InputGroup>
  );
};

export default SearchBar;
