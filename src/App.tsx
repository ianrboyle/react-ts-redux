import React from 'react';

import './App.css';
import { CarForm } from './components/CarForm';
import { CarList } from './components/CarList';

function App() {
  return (
    <div className="App">
      <CarForm />
      <CarList />
    </div>
  );
}

export default App;
