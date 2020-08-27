import React from 'react';
import './App.css';
import Home from './Home'
import NavbarMenu from './Nav';
import Map from './Map';

function App() {
  return (
    <div className="App">
      <NavbarMenu />
      <Home />
      <Map id="mapComponent" />
    </div>
  );
}

export default App;
