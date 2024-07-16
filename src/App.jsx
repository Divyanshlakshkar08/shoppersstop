import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Men from './pages/Men';
import Navbar from './components/Navbar';
import TopStrip from './components/TopStrip';
import EmailSubscription from './components/EmailSubscription';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import Kids from './pages/Kids';
import Women from './pages/Women';

function App() {
  return (
    <div>
      <TopStrip />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/men" element={<Men />}></Route>
        <Route path='/kids' element={<Kids/>}/>
        <Route path='/women' element={<Women/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <EmailSubscription />
      <Footer />
    </div>
  );
}

export default App;
