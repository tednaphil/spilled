import "./Home.css";
import teas from "../../images/teas.svg";
// import spilledTea from "../../Coffee-Burst.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { allHardcodedTeas, TeaHardcoded } from '../../utils/interface';
import TeaEd from '../teaEd/TeaEd'

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

// const teaInfo = allHardcodedTeas.map((tea: TeaHardcoded) => {
//   return (
//     <TeaEd 
//       name={tea.type}
//       slug={tea.type}
//       tea={tea}
//       key={Date.now()}
//     />
//   )
// })

  return (
    <div>
      <div className="intro-wrapper">
        <article className="article-intro">
          <img src={teas} />
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
        <img src={teas} />
        <div className="info">
          <h2>Black Tea</h2>
          <button className="infoButton">
            <NavLink to="/tea/black/education">More info →</NavLink>
          </button>
          <button className="infoButton">
            <NavLink to="/tea/black">See Black teas →</NavLink>
          </button>
        </div>
      </article>
      <article className="article-tea">
        <img src={teas} />
        <div className="info">
          <h2>Oolong Tea</h2>
          <div className="info-desc">
            <dl>
              <div>
                <dt></dt>
                <dd>{}</dd>
              </div>
              <div>
                <dt></dt>
                <dd>{}</dd>
              </div>
              <div>
                <dt></dt>
                <dd>{}</dd>
              </div>
              <div>
                <dt></dt>
                <dd>{}</dd>
              </div>
            </dl>
          </div>
          <button className="infoButton">
            <NavLink to="/tea/oolong">See Oolong teas →</NavLink>
          </button>
        </div>
      </article>
      <article className="article-tea">
        <img src={teas} />
        <div className="info">
          <h2>White Tea</h2>
          <div className="info-desc">
            <dl>
              <div>
                <dt></dt>
                <dd>{}</dd>
              </div>
              <div>
                <dt></dt>
                <dd>{}</dd>
              </div>
              <div>
                <dt></dt>
                <dd>{}</dd>
              </div>
              <div>
                <dt></dt>
                <dd>{}</dd>
              </div>
            </dl>
          </div>
          <button className="infoButton">
            <NavLink to="/tea/white">See White teas →</NavLink>
          </button>
        </div>
      </article>
      <article className="article-tea">
        <img src={teas} />
        <div className="info">
          <h2>Blends</h2>
          <div className="info-desc">
            <dl>
              <div>
                <dt></dt>
                <dd>{}</dd>
              </div>
              <div>
                <dt></dt>
                <dd>{}</dd>
              </div>
              <div>
                <dt></dt>
                <dd>{}</dd>
              </div>
              <div>
                <dt></dt>
                <dd>{}</dd>
              </div>
            </dl>
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
