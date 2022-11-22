import './styles/App.css';
import './styles/header.css';
import './styles/missionslist.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Missions from './components/Missions';

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route exact path="/missions" element={<Missions />} />
          <Route exact path="/rockets" element={<></>} />
          <Route exact path="/" element={<></>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
