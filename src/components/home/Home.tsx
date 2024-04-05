import "./Home.css";
import teas from "../../images/teas.svg";
// import spilledTea from "../../Coffee-Burst.svg";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="intro-wrapper">
        <article className="article-intro">
          <img src={teas} />
          <div className="info">
            <h2 className="home-h2">Home</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <button className="infoButton">
              <NavLink to="/tea/black">See Black tea's →</NavLink>
            </button>
          </div>
        </article>
      </div>
      <article className="article-tea">
        <img src={teas} />
        <div className="info">
          <h2>Black Tea</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="infoButton">
            <NavLink to="/tea/black">See Black tea's →</NavLink>
          </button>
        </div>
      </article>
      <article className="article-tea">
        <img src={teas} />
        <div className="info">
          <h2>Oolong Tea</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="infoButton">
            <NavLink to="/tea/oolong">See Oolong tea's →</NavLink>
          </button>
        </div>
      </article>
      <article className="article-tea">
        <img src={teas} />
        <div className="info">
          <h2>White Tea</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="infoButton">
            <NavLink to="/tea/white">See White tea's →</NavLink>
          </button>
        </div>
      </article>
      <article className="article-tea">
        <img src={teas} />
        <div className="info">
          <h2>Blends</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="infoButton">
            <NavLink to="/tea/blend">See tea blends →</NavLink>
          </button>
        </div>
      </article>
    </div>
  );
}

export default Home;
