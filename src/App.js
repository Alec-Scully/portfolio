import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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
