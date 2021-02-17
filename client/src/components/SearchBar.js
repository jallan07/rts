import React, { useState } from 'react';
// utilities
import { Card, Button, Form } from 'react-bootstrap';
import API from '../utils/API';
import { v4 as uuidv4 } from 'uuid';
//components
import RecentSearches from './RecentSearches';
import SearchResults from './SearchResults';
// bring in the globalized store so we can dispatch actions to it
import store from '../store';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const onChange = (e) => {
    setQuery(e.target.value);
  };
  // handle form submissions for the search bar
  const onSubmit = (e) => {
    e.preventDefault();

    // dispatch the action
    store.dispatch({
      type: 'ADD_SEARCH',
      id: uuidv4(),
      query: query
    });

    // make the API call using the user's query
    API.getSearchResults(query).then((data) => {
      store.dispatch({
        type: 'SEARCH_RESULTS',
        results: data.data.hits
      });
    });
  };

  return (
    <div>
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
      <RecentSearches />
      <SearchResults />
    </div>
  );
};

export default SearchBar;
