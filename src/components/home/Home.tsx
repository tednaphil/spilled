import "./Home.css";
import teas from "../../images/teas.svg";
import { NavLink, useNavigate } from "react-router-dom";


function Home() {

  return (
    <div>
      <div className="intro-wrapper">
        <article className="article-intro">
          <img src={teas} alt='Cupcake baking pan with different tea blends filling each cup' className="home-img"/>
          <div className="info">
            <h2 className="home-h2">Let's 'spill the tea' on tea!</h2>
            <p className="info-desc">
              <b>Did you know that all 'teas' originate from the leaves of the Camellia Sinensis plant?
              <br/><br/>
              Any 'tea' that is not from this plant is actually an herbal blend!</b> 
            </p>
            <p className="creation-p">
              What makes each tea <em>unique</em> is the creation process it goes through, including:
            </p>
            <section className="creation-wrapper">
              <div className="creation-info">
                <h3>1. Withering</h3>
                <p>Letting the teas dry</p>
              </div>
              <div className="creation-info">
                <h3>2. Bruising/Rolling</h3>
                <p>Crushing the leaves to break the cell wall and release enzymes</p>
              </div>
              <div className="creation-info">
                <h3>3. Oxidization / Fermentation</h3>
                <p>Enzymes released in the Rolling phase interact with oxygen in the air, resulting in chemical changes</p>
              </div>
              <div className="creation-info">
                <h3>4. Heating</h3>
                <p>This halts the process of oxidization once the desired levels are achieved</p>
              </div>
            </section>
          </div>
        </article>
      </div>
      <article className="article-tea">
        <img src={teas} alt='' className="home-img tea-image"/>
        <div className="info">
          <h2>Black Tea</h2>
            <NavLink to="/tea/black/education" className='education-link'>Education →</NavLink>
            <NavLink to="/tea/black" className='home-nav-link'>See Black teas →</NavLink>
        </div>
      </article>
      <article className="article-tea">
        <img src={teas} alt='' className="home-img tea-image"/>
        <div className="info">
          <h2>Oolong Tea</h2>
            <NavLink to="/tea/oolong/education" className='education-link'>Education →</NavLink>
            <NavLink to="/tea/oolong" className='home-nav-link'>See Oolong teas →</NavLink>
        </div>
      </article>
      <article className="article-tea">
        <img src={teas} alt='' className="home-img tea-image"/>
        <div className="info">
          <h2>White Tea</h2>
            <NavLink to="/tea/white/education" className='education-link'>Education →</NavLink>
            <NavLink to="/tea/white" className='home-nav-link'>See White teas →</NavLink>
        </div>
      </article>
      <article className="article-tea">
        <img src={teas} alt='' className="home-img tea-image"/>
        <div className="info">
          <h2>Green Tea</h2>
            <NavLink to="/tea/green/education" className='education-link'>Education →</NavLink>
            <NavLink to="/tea/green" className='home-nav-link'>See Green teas →</NavLink>
        </div>
      </article>
      <article className="article-tea">
        <img src={teas} alt='' className="home-img tea-image"/>
        <div className="info">
          <h2>Blends</h2>
          <div className="info-desc">
            <p>Blends can be made up of any tea base! Blends can also comprise of non-tea 'tea'. Such as Rooibos, Pu-Erh, Yerba Mate, and Hemp!</p>
            <p>Our site focuses on just the Camellia Sinensis plant to ease the transition into tea.</p>
          </div>
            <NavLink to="/tea/blend" className='home-nav-link'>See tea blends →</NavLink>
        </div>
      </article>
    </div>
  );
}

export default Home;
