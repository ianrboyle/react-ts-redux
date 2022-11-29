import React from 'react';

import './App.css';
import { CarForm } from './components/CarForm';
import { CarList } from './components/CarList';
import { CarSearch } from './components/CarSearch';

function App() {
  return (
    <div className="App">
      <CarForm />
      <CarSearch />
      <CarList />
    </div>
  );
}

export default App;
