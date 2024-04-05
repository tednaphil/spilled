import React from 'react';
import './App.css';
import Nav from '../nav/Nav';
import Home from '../home/Home';
import Teas from '../teas/Teas';
import Error from '../error/Error'
import { Routes, Route } from 'react-router-dom';
// import { useState, useEffect } from 'react';

function App() {

  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/tea/:category' element={<Teas />}/>
          {/* <Route path='/tea/favorites' element={<Favorites />}/> */}
          <Route path='*' element={<Error />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
