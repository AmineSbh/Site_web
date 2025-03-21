import React from 'react';
import ScenarioSelector from './components/ScenarioSelector/ScenarioSelector';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ScenarioSelector />
    </div>
  );
}

export default App;