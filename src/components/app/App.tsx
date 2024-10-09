import "./App.css";
import Nav from "../nav/Nav";
import Home from "../home/Home";
import Teas from "../teas/Teas";
import Error from "../error/Error";
import TeaEd from "../teaEd/TeaEd";
import { Routes, Route } from "react-router-dom";
import { postUser } from "../../apiCalls";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Nav user={user, setUser}/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tea/:category/education" element={<TeaEd />} />
          <Route path="/tea/:category" element={<Teas />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
