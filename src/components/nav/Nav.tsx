import { NavLink,Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <header>
      <nav>
        <Link to="/" className = "title"><h1>Spilled ☕</h1></Link>
        <NavLink to="/tea/blend">Blend</NavLink>
        <NavLink to="/tea/black">Black</NavLink>
        <NavLink to="/tea/green">Green</NavLink>
        <NavLink to="/tea/oolong">Oolong</NavLink>
        <NavLink to="/tea/white">White</NavLink>
        <NavLink to="/tea/favorites">Favorites</NavLink>
      </nav>
    </header>
  );
}

export default Nav;
