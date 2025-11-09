import React from 'react';

export default function UserProfile(props) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '16px',
      margin: '16px',
      borderRadius: '10px',
      backgroundColor: '#f9f9f9',
      maxWidth: '720px',
      boxShadow: '0 1px 4px rgba(0,0,0,0.08)'
    }}>
      <h2 style={{ color: '#1a73e8', fontSize: '1.4rem', marginBottom: '8px' }}>
        {props.name}
      </h2>
      <p style={{ margin: '6px 0' }}>
        Age: <span style={{ fontWeight: '700', color: '#0b6623' }}>{props.age}</span>
      </p>
      <p style={{ margin: '6px 0' }}>
        Bio: <span style={{ fontStyle: 'italic' }}>{props.bio}</span>
      </p>
    </div>
  );
}
