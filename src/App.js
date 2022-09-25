import React from 'react';
// import './App.css';
import './MyApp.css';
import Navbar from './myNavbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';



import Home from './pages/Home';
import About from './pages/About';  
import Contact from './pages/Contact';
import InfoTable from './pages/InfoTable';
import Another from './pages/another';
import MyApp from './pages/MyApp';
import Checkout from './pages/checkout';

function App() {
return (
    <Router>
     <Navbar />
    <Routes>
        <Route path='/' element={<MyApp/>} />  
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/info' element={<InfoTable/>} />
        <Route path='/another' element={<Another/>} />
        <Route path='/cart' element={<Checkout/>} />

    </Routes>
    </Router>
);
}
  
export default App;