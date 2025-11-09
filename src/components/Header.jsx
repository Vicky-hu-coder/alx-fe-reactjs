import React from 'react';

export default function Header() {
  return (
    <header style={{
      backgroundColor: 'navy',
      color: 'white',
      textAlign: 'center',
      padding: '20px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
    }}>
      <h1 style={{ margin: 0, fontSize: '1.8rem' }}>My Favorite Cities</h1>
      <p style={{ margin: '6px 0 0 0', fontSize: '0.9rem', opacity: 0.9 }}>
        Find fun facts and hidden gems
      </p>
    </header>
  );
}
