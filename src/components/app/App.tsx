import './App.css';
import Nav from '../nav/Nav';
import Home from '../home/Home';
import Teas from '../teas/Teas';
import Error from '../error/Error'
import TeaEd from '../teaEd/TeaEd'
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [isRedirected, setIsRedirected] = useState<boolean>()
  console.log('app state isRedirected', isRedirected)

  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path='/' element={<Home isRedirected={isRedirected} setIsRedirected={setIsRedirected} />} />
          <Route path='/tea/:category/education' element={<TeaEd />} />
          <Route path='/tea/:category' element={<Teas setIsRedirected={setIsRedirected} />} />
          <Route path='*' element={<Error isRedirected={isRedirected} setIsRedirected={setIsRedirected} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
