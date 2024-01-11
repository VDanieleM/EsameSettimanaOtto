import React, { useState, useEffect } from 'react';
import './App.css';
import Navigazione from './components/Navigazione';
import Section from './components/Section';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mainsection from './components/Mainsection';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup function to clear the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {loading ? (
          <h1 className="text-danger text-center loader pulse">Loading...</h1> // Puoi sostituire questo con un componente loader più avanzato
        ) : (
          <>
            <Navigazione />
            <Section />
            <Mainsection />
            <Footer />
          </>
        )}
      </header>
    </div>
  );
}

export default App;
