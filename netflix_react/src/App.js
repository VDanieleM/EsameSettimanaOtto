import './App.css';
import Navigazione from './components/Navigazione';
import Section from './components/Section';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mainsection from './components/Mainsection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigazione />
        <Section />
        <Mainsection />
        <Footer />
      </header>
    </div>
  );
}

export default App;