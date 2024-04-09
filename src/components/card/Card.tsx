import "./Card.css";
import { Tea } from "../../utils/interface";
import { useState } from "react";
import { fetchSingleTea } from "../../apiCalls";
interface CardProp {
  img: string;
  name: string;
  slug: string;
  tea: Tea;
  description: string;
  addFavs: (newFav: Tea) => void;
}

function Card({ img, name, slug, tea, description, addFavs }: CardProp) {

  const [targetTea, setTargetTea] = useState<any>({})
  const [isClicked, setIsClicked] = useState<boolean>(false)
  const [color, setColor] = useState("#B1AE91");

  const css = {
    transform: 'rotateY(180deg)',
  }

  const ncss = {
    transform: 'rotateY(0deg)'
  }

  function favTea(e: React.MouseEvent<HTMLButtonElement>) {
    addFavs(tea);
    if (color !== "#B1AE91") {
      setColor("#B1AE91");
    } else {
      setColor("#895B1E");
    }
  }

  async function fetchTea(e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>): Promise<any> {
    let tea = await fetchSingleTea(slug)
    let target = tea[0]
    setTargetTea(target)
  }

  function ingredients(tea: any): string {
    let teaReturn: string;
    tea.mainIngredients ? teaReturn = tea.mainIngredients : teaReturn = ' ';
    return teaReturn
  }

  return (
    <div className="card-wrapper">
      <button className="fav-btn" id={slug} onClick={(e) => favTea(e)} style={{ color: color }}>
        ♥
      </button>
      <div className="card-cont" onClick={(e) => { fetchTea(e); setIsClicked(!isClicked ? true : false) }} style={isClicked ? css : ncss} onKeyDownCapture={(e) => { fetchTea(e); setIsClicked(!isClicked ? true : false) }} tabIndex={0}>
        <div className="card-inner" style={isClicked ? css : ncss}>
          <div className="card-front" id={slug}>
            <div className="img-wrapper">
              <img className="tea-img" src={img} alt={`img of ${name}`} />
            </div>
            <div className="text-wrapper">
              <h3>{name}</h3>
              <p className="tasting-notes">{description}</p>
            </div>
          </div>
          <div className="card-back">
            <dl className='card-back-dl' style={isClicked ? css : ncss}>
              <dt><strong>Caffeine content:</strong></dt>
              <dd className="card-back-text">{targetTea.caffeine}</dd>
              <dt><strong>Main Ingredients:</strong></dt>
              <dd className="card-back-text" >{ingredients(targetTea)}</dd>
              <dt><strong>Origin:</strong></dt>
              <dd className="card-back-text">{targetTea.origin}</dd>
              <dt><strong>Tasting notes:</strong></dt>
              <dd className="card-back-text">{targetTea.tasteDescription}</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;