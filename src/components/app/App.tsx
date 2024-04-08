import './App.css';
import Nav from '../nav/Nav';
import Home from '../home/Home';
import Teas from '../teas/Teas';
import Error from '../error/Error'
import TeaEd from '../teaEd/TeaEd'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [isRedirected, setIsRedirected] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setIsRedirected(true);
    }
  }, [location]);

  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          {/* Use Navigate component to redirect to Home */}
          {isRedirected && <Navigate to="/" replace />}
          <Route path='/' element={<Home />} />
          <Route path='/tea/:category/education' element={<TeaEd />} />
          <Route path='/tea/:category' element={<Teas />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
