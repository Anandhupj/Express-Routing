import React from 'react';  // Ensure React is imported
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Formget from './components/Formget';
import Formupdate from './components/Formupdate';
import Form1 from './components/Form';
 // Ensure Form is imported correctly

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form1 />} />
          <Route path="/get" element={<Formget />} />
          <Route path="/updateget/:id" element={<Formupdate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
