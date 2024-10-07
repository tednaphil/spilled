import { NavLink, Link } from "react-router-dom";
import "./Nav.css";
import favorite from "../../images/favorite-save.png";
import { Profile } from "../../utils/interface";

interface Props {
  user: Profile | null
}

function Nav({user}: Props) {
  console.log(user)
  return (
    <header className="header">
      <nav className="nav-bar">
        <div className="div-nav-left">
          <Link to="/" className="h1">
            <h1 className="h1">Spilled</h1>
          </Link>
        </div>
        <div className="div-nav-center">
          <NavLink to="/tea/all" className="navlink">
            All Teas
          </NavLink>
          <NavLink to="/tea/herbal" className="navlink">
            Herbal
          </NavLink>
          <NavLink to="/tea/black" className="navlink">
            Black
          </NavLink>
          <NavLink to="/tea/green" className="navlink">
            Green
          </NavLink>
          <NavLink to="/tea/oolong" className="navlink">
            Oolong
          </NavLink>
          <NavLink to="/tea/white" className="navlink">
            White
          </NavLink>
        </div>
        <div className="div-nav-right">

          {user ?
          <NavLink className="nav-favorites" to="/tea/favorites">
            <img
              className="favorite-img"
              src={favorite}
              alt="bookmark with heart shape"
            />
          </NavLink> :
          <button>
            Login
          </button>
          }
        </div>
      </nav>
    </header>
  );
}

export default Nav;
