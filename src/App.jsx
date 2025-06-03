import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Skills from './components/Skills/Skill';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div className='App'>
      <Navbar />
      <Intro />
      <Skills />
      <Project />
      <Contact />
    </div>
    </Router>
  );
}

export default App;
