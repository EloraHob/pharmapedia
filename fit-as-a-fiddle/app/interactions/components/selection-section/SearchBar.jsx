import React, { useState, useEffect } from "react";
import {
  Form,
  FormControl,
  Button,
  InputGroup,
  Container,
  Row,
  Col,
  Dropdown,
  Card,
} from "react-bootstrap";
import axios from "axios";

const SearchBar = ({ placeholder, ButtonIcon, onDrugSelect }) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedDrug, setSelectedDrug] = useState(null);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (query) {
        try {
          const response = await axios.get(
            `https://rxnav.nlm.nih.gov/REST/Prescribe/approximateTerm.json?term=${encodeURIComponent(
              query
            )}&maxEntries=4`
          );
          setSearchResults(response.data?.approximateGroup?.candidate || []);
        } catch (error) {
          console.error("API request failed:", error);
        }
      }
    }, 100);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  // Autofill input field with selected result from searchbar dropdown
  const handleDrugOptionSelect = (drugName, rxcui) => {
    setQuery(drugName); 
    setSearchResults([]);
    setSelectedDrug({ drugName, rxcui });
  };

  // Logic for + button of searchBar
  const handleAddButtonClick = (e) => {
    e.preventDefault();
    if (selectedDrug) {
      if (onDrugSelect) {
        onDrugSelect(selectedDrug);
      }
      setQuery("");
      setSelectedDrug(null);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={6} md={4}>
          <Form inline="true" onSubmit={handleAddButtonClick}>
            <InputGroup className="bg-white">
              <FormControl
                type="text"
                placeholder={placeholder}
                className="mr-sm-2"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button type="submit" disabled={searchResults.length === 0}>
                <ButtonIcon size={20} />
              </Button>
            </InputGroup>
          </Form>
          {searchResults.length > 0 && (
            <Dropdown>
              <Dropdown.Menu show>
                {searchResults.map((item) => (
                  <Dropdown.Item
                    key={item.rxcui}
                    onClick={() =>
                      handleDrugOptionSelect(item.name, item.rxcui)
                    }
                  >
                    {item.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;
