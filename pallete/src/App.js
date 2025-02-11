import React from 'react';
import './App.css';
import Header from './Components/Header';
import PaletteTable from './Components/Table';
import StarryBackground from './Components/StarryBackground';

function App() {
  return (
    <>
      <StarryBackground />
      <div className="content">
        <Header />
        <PaletteTable />
      </div>
    </>
  );
}

export default App;
