// src/App.js
import React from 'react';
import Navbar from './Component/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="home" style={{ padding: '20px' }}>
        {/* <h1>Home Section</h1> */}
      </div>
      <div id="about" style={{ padding: '20px' }}>
        <h1>About Section</h1>
      </div>
      <div id="services" style={{ padding: '20px' }}>
        <h1>Services Section</h1>
      </div>
      <div id="contact" style={{ padding: '20px' }}>
        <h1>Contact Section</h1>
      </div>
    </div>
  );
};

export default App;