import React from 'react';
import { Card } from 'react-bootstrap';
// to access the globalized state in the store, use the built-in useSelector hook
import { useSelector } from 'react-redux';

const RecentSearches = () => {
  const recentSearches = useSelector((state) => state.recentSearches);
  return (
    <Card className="py-auto px-4 text-center">
      <Card.Body>
        <h6 className="my-3">Recent Searches</h6>
        {/* map through the recent searches; if any exist, display them, else display ""..." */}
        {recentSearches.length > 0 ? (
          recentSearches.map((search) => (
            <p className="d-inline mx-3" key={search.id}>
              {search.query}
            </p>
          ))
        ) : (
          <p>...</p>
        )}
      </Card.Body>
    </Card>
  );
};

export default RecentSearches;
