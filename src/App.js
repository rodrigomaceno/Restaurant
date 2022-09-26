import React from 'react';
// import './App.css';
import './MyApp.css';
import Navbar from './myNavbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';



import Home from './pages/Home';
import Pasta from './pages/pasta';  
import Burger from './pages/burger';
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
        <Route path='/pasta' element={<Pasta/>} />
        <Route path='/burger' element={<Burger/>} />
        <Route path='/info' element={<InfoTable/>} />
        <Route path='/another' element={<Another/>} />
        <Route path='/cart' element={<Checkout/>} />

    </Routes>
    </Router>
);
}
  
export default App;