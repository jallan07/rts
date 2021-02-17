import React from 'react';
import { Container } from 'react-bootstrap';
// components
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh' }}
    >
      <div className="w-100" style={{ maxWidth: '800px' }}>
        <SearchBar />
      </div>
    </Container>
  );
}

export default App;
