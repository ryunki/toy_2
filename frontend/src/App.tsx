import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home'
import Menu from './pages/Menu';
import About from './pages/About';

import './App.css';

function App() {
  return (<>
  <h1>Hi</h1>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/*' element={<Navigate to='/'/>}/>
      </Routes>
    </Router>
  </>);
}

export default App;
