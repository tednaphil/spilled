import "./App.css";
import Nav from "../nav/Nav";
import Home from "../home/Home";
import Teas from "../teas/Teas";
import Error from "../error/Error";
import TeaEd from "../teaEd/TeaEd";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Nav />
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
