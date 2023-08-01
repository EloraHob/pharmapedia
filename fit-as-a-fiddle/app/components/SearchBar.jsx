import React from "react";
import {
  Form,
  FormControl,
  Button,
  InputGroup,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const SearchBar = ({ placeholder, ButtonIcon }) => (
  <Container>
    <Row className="justify-content-center">
      <Col xs={6} md={4}>
        <Form inline="true">
          <InputGroup>
            <FormControl
              type="text"
              placeholder={placeholder}
              className="mr-sm-2"
            />
            <Button type="submit">
              <ButtonIcon size={20} />
            </Button>
          </InputGroup>
        </Form>
      </Col>
    </Row>
  </Container>
);

export default SearchBar;
