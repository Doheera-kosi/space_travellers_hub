import './styles/App.css';
import './styles/header.css';
import './styles/Rockets.css';
import './styles/profile.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Rockets from './components/Rockets';
import Profiles from './components/Profile';
import Missions from './components/missionspage/Missions';

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route exact path="/" element={(<Rockets />)} />
          <Route exact path="/Missions" element={(<Missions />)} />
          <Route exact path="/Profile" element={(<Profiles />)} />
        </Routes>
      </div>
    </>
  );
}

export default App;
