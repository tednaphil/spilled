import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import Nav from '../nav/Nav';
import Home from '../home/Home';
import Teas from '../teas/Teas';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/tea/:type' element={<Teas />}/>
          {/* <Route path='/tea/favorites' element={<Favorites />}/> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
