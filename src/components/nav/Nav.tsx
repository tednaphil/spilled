import { NavLink,Link } from "react-router-dom";
import "./Nav.css";
import favorite from '../../favorite-save.png'

function Nav() {
  return (
    <header className="header">
      <nav className="nav-bar">
        <div className="div-nav-left">
          <Link to="/" className = "h1"><h1>Spilled</h1></Link>
        </div>
        <div className="div-nav-center">
          <NavLink to="/tea/blend" className='navlink'>Blends</NavLink>
          <NavLink to="/tea/black" className='navlink'>Black</NavLink>
          <NavLink to="/tea/green" className='navlink'>Green</NavLink>
          <NavLink to="/tea/oolong" className='navlink'>Oolong</NavLink>
          <NavLink to="/tea/white" className='navlink'>White</NavLink>
        </div>
        <div className="div-nav-right">
          <NavLink className='nav-favorites' to="/tea/favorites">
            <img className='favorite-img' src={favorite} alt="bookmark with heart shape"/>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
