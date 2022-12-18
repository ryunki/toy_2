import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home'
import Menu from './pages/Menu';
import About from './pages/About';

import './App.css';
import { Container } from 'react-bootstrap';

function App() {
  return <>
    <Navbar/>
  <Container className="mb-4">
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/*" element={<Navigate to="/"/>}/>
      </Routes>
    </Router>
  </Container>
  </>
}

export default App;
