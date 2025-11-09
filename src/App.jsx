import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', paddingBottom: '40px' }}>
      <Header />
      <MainContent />

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <UserProfile
          name="Isingizwe Victorine"
          age="22"
          bio="Loves exploring new cities and learning about cultures."
        />
      </div>

      <Footer />
    </div>
  );
}
