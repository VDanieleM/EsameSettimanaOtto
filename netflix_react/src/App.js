import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigazione from './components/Navigazione';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Profile from './components/Profile';
import Settings from './components/Settings';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);


    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {loading ? (
          <h1 className="text-danger text-center loader pulse">Loading...</h1>
        ) : (
          <>
          <Router>
            <Navigazione />
            <Routes>
              <Route path="/"  element={<Homepage />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Settings" element={<Settings />} />
            </Routes>
            <Footer />
            </Router>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
