import './styles/App.css';
import './styles/header.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route exact path="/" element={<></>} />
          <Route exact path="/" element={<></>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
