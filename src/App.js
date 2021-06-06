// home - about -projects - blog - contact

// To push to the live site run:
// npm run deploy


import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
      </Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Portfolio under construction! More coming soon!
        </p>
        <a
          className="App-link"
          href="https://github.com/Alec-Scully"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/alec-scully/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="App-link"
          href="https://scully-alec.medium.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>
      </header>
    </div>
  );
}

export default App;
