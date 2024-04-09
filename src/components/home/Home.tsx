import "./Home.css";
import teas from "../../images/teas.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { allHardcodedTeas } from '../../utils/interface';

interface Props {
  isRedirected: boolean | any;
  setIsRedirected: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

function Home({ isRedirected, setIsRedirected }: Props) {
  const navigate = useNavigate();
  useEffect(() => {
    // window.onload = () => {
    //    setIsRedirected(false)
    //      navigate('/', {replace: true})
    //  }
    setIsRedirected(false);
  }, [navigate, setIsRedirected]);

  return (
    <div>
      <div className="intro-wrapper">
        <article className="article-intro">
          <img src={teas} alt='Cupcake baking pan with different tea blends filling each cup' className="home-img"/>
          <div className="info">
            <h2 className="home-h2">Let's 'spill the tea' on tea!</h2>
            <p className="info-desc">
              Did you know that all 'teas' originate from the leaves of the Camellia
              Sinensis plant?(break this up) Any 'tea' that is not from this plant is actually an herbal blend! (break here) What makes each tea unique is
              the creation process is goes through, including:
            </p>
            <ol>
              <li><strong>Withering</strong> - Letting the teas dry</li>
              <li><strong>Bruising/Rolling</strong> - Crushing the leaves to break the cell wall and release enzymes</li>
              <li><strong>Oxidization/Fermentation</strong> - Enzymes released in the Rolling phase interact with oxygen in the air, resulting in chemical changes</li>
              <li><strong>Heating</strong> - This halts the process of oxidization once the desired levels are achieved</li>
            </ol>
          </div>
        </article>
      </div>
      <article className="article-tea">
        <img src={teas} alt='' className="home-img"/>
        <div className="info">
          <h2>Black Tea</h2>
          <p>{allHardcodedTeas[3].summary}</p>
          <button className="infoButton">
            <NavLink to="/tea/black/education">More info →</NavLink>
          </button>
          <button className="infoButton">
            <NavLink to="/tea/black">See Black teas →</NavLink>
          </button>
        </div>
      </article>
      <article className="article-tea">
        <img src={teas} alt='' className="home-img"/>
        <div className="info">
          <h2>Oolong Tea</h2>
          <div className="info-desc">
            <p>{allHardcodedTeas[2].summary}</p>
          </div>
          <button className="infoButton">
            <NavLink to="/tea/oolong/education">More info →</NavLink>
          </button>
          <button className="infoButton">
            <NavLink to="/tea/oolong">See Oolong teas →</NavLink>
          </button>
        </div>
      </article>
      <article className="article-tea">
        <img src={teas} alt='' className="home-img"/>
        <div className="info">
          <h2>White Tea</h2>
          <div className="info-desc">
            <p>{allHardcodedTeas[1].summary}</p>
          </div>
          <button className="infoButton">
            <NavLink to="/tea/white/education">More info →</NavLink>
          </button>
          <button className="infoButton">
            <NavLink to="/tea/white">See White teas →</NavLink>
          </button>
        </div>
      </article>
      <article className="article-tea">
        <img src={teas} alt='' className="home-img"/>
        <div className="info">
          <h2>Green Tea</h2>
          <div className="info-desc">
            <p>{allHardcodedTeas[0].summary}</p>
          </div>
          <button className="infoButton">
            <NavLink to="/tea/green/education">More info →</NavLink>
          </button>
          <button className="infoButton">
            <NavLink to="/tea/green">See Green teas →</NavLink>
          </button>
        </div>
      </article>
      <article className="article-tea">
        <img src={teas} alt='' className="home-img"/>
        <div className="info">
          <h2>Blends</h2>
          <div className="info-desc">
            <p>Blends can be made up of any tea base! Blends can also comprise of non-tea 'tea'. Such as Rooibos, Pu-Erh, Yerba Mate, and Hemp!</p>
            <p>Our site focuses on just the Camellia Sinensis plant to ease the transition into tea.</p>
          </div>
          <button className="infoButton">
            <NavLink to="/tea/blend">See tea blends →</NavLink>
          </button>
        </div>
      </article>
    </div>
  );
}

export default Home;
