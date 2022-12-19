import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import About from './pages/About';

import './App.css';

import { Container } from 'react-bootstrap';
import CarouselFade from './components/CarouselFade';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Container className="mb-4" >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
      <Footer/>
    </>
  
  );
}

export default App;
