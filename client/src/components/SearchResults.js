import React from 'react';
import { Card } from 'react-bootstrap';
// to access the globalized state in the store, use the built-in useSelector hook
import { useSelector } from 'react-redux';

const SearchResults = () => {
  const results = useSelector((state) => state.searchResults);
  return (
    <Card className="py-auto px-4 text-center">
      <Card.Body>
        <h6 className="my-3">Search Results</h6>
        {/* map through the recent searches; if any exist, display them, else display ""..." */}
        {results.length > 0 ? (
          results.map((result) => (
            <p key={result.title}>
              <a href={result.url}>{result.title}</a>
            </p>
          ))
        ) : (
          <p>...</p>
        )}
      </Card.Body>
    </Card>
  );
};

export default SearchResults;
