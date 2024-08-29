import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Login from './components/Login/Login';
import Head from './fix/Head';
import Menu from './fix/Menu';
import Main from './components/Main/Main';
import Game1 from './components/Game/Game1';
import Game2 from './components/Game/Game2';
import Game3 from './components/Game/Game3';
import Game4 from './components/Game/Game4';
import Game5 from './components/Game/Game5';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);
  };

  const updateUserData = (updatedData) => {
    setUserData(updatedData);  
  };

  return (
    <Router>
      <div className="App">
        <Head />
        {isLoggedIn ? <Menu handleLogout={handleLogout}/> : null}
        <Routes>
          <Route 
            path="/" 
            element={<Login setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} />} 
          />
          <Route 
            path="/main" 
            element={isLoggedIn ? <Main userData={userData} updateUserData={updateUserData} handleLogout={handleLogout}/> : <Login setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} />} 
          />
          <Route 
            path="/1" 
            element={isLoggedIn ? <Game1 userData={userData} updateUserData={updateUserData} handleLogout={handleLogout}/> : <Login setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} />} 
          />
          <Route 
            path="/2" 
            element={isLoggedIn ? <Game2 userData={userData} updateUserData={updateUserData} handleLogout={handleLogout}/> : <Login setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} />} 
          />
          <Route 
            path="/3" 
            element={isLoggedIn ? <Game3 userData={userData} updateUserData={updateUserData} handleLogout={handleLogout}/> : <Login setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} />} 
          />
          <Route 
            path="/4" 
            element={isLoggedIn ? <Game4 userData={userData} updateUserData={updateUserData} handleLogout={handleLogout}/> : <Login setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} />} 
          />
          <Route 
            path="/5" 
            element={isLoggedIn ? <Game5 userData={userData} updateUserData={updateUserData} handleLogout={handleLogout}/> : <Login setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
