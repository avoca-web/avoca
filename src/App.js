// src/App.js
import React from 'react';
import './App.css';
import Header from './screens/Header';
import Hero from './screens/Hero';
import Feature from './screens/Feature';
import SecondFeature from './screens/SecondFeature';
import ThirdFeature from './screens/ThirdFeature';
import Library from './screens/Librar';
import Emoticon from './screens/Emoticon';
import Footer from './screens/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <Feature />
      <SecondFeature />
      <ThirdFeature />
      <Library />
      <Emoticon />
      <Footer />
      </div>
  );
}

export default App;