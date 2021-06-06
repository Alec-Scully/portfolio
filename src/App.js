
// To push to the live site run:
// npm run deploy

import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/projects">
          <Projects />
        </Route>

        <Route exact path="/blog">
          <Blog />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>

      </Router>
    </div>
  );
}

export default App;
