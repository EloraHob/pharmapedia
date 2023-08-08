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
import { useRouter } from "next/navigation";
import axios from "axios";

const SearchBar = ({ placeholder, ButtonIcon }) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedDrug, setSelectedDrug] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (query) {
        try {
          const response = await axios.get(`https://rxnav.nlm.nih.gov/REST/Prescribe/approximateTerm.json?term=${encodeURIComponent(query)}&maxEntries=4`);
          setSearchResults(response.data?.approximateGroup?.candidate || []);
        } catch (error) {
          console.error("API request failed:", error);
        }
      }
    }, 500);  // waiting for 500ms after user stops typing

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const handleDrugSelect = (drugName, rxcui) => {
    setQuery("");
    setSearchResults([]);
    setSelectedDrug({ drugName, rxcui });
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={6} md={4}>
          <Form inline="true">
            <InputGroup>
              <FormControl
                type="text"
                placeholder={placeholder}
                className="mr-sm-2"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button type="submit">
                <ButtonIcon size={20} />
              </Button>
            </InputGroup>
          </Form>
          {searchResults.length > 0 && (
            <Dropdown>
              <Dropdown.Menu show>
                {searchResults.map((item) => (
                  <Dropdown.Item key={item.rxcui} onClick={() => handleDrugSelect(item.name, item.rxcui)}>
                    {item.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          )}
        </Col>
      </Row>

      {selectedDrug && (
        <Row className="justify-content-center mt-3">
          <Col xs={6} md={4}>
            <Card>
              <Card.Body>
                <Card.Title>{selectedDrug.drugName}</Card.Title>
                <Card.Text>RXCUI: {selectedDrug.rxcui}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default SearchBar;
