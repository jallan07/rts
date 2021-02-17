import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import API from '../utils/API';
import { v4 as uuidv4 } from 'uuid';

import store from '../store';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const onChange = (e) => {
    setQuery(e.target.value);
  };
  // handle form submissions for the search bar
  const onSubmit = (e) => {
    e.preventDefault();

    store.dispatch({
      type: 'ADD_SEARCH',
      id: uuidv4(),
      query: query
    });

    // make the API call using the user's query
    API.getSearchResults(query).then((data) => {
      console.log(data.data.hits);
    });
  };

  return (
    <Card className="py-auto px-4">
      <Card.Body>
        <h4 className="text-center mb-4">Hacker News Search</h4>
        <Form>
          <Form.Group id="search">
            <Form.Control
              type="text"
              className="text-center"
              placeholder="Enter a search phrase..."
              onChange={onChange}
              required
            ></Form.Control>
          </Form.Group>
          <Button
            className="w-100"
            type="submit"
            onClick={onSubmit}
            variant="outline-success"
          >
            Search The Database
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SearchBar;
