import React from 'react';

export default function MainContent() {
  return (
    <main style={{
      backgroundColor: '#e6f7ff',
      padding: '24px',
      minHeight: '220px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h2 style={{ color: '#004d99', margin: 0 }}>Explore Amazing Cities</h2>
      <p style={{ maxWidth: '800px', marginTop: '12px' }}>
        Discover fun facts, the best places to eat, and hidden gems in each city. Use the list below to start exploring.
      </p>
    </main>
  );
}
