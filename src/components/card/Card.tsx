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

  async function fetchTea(e: React.MouseEvent<HTMLDivElement>): Promise<any> {
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
    <div className="card-cont" onClick={(e) => { fetchTea(e); setIsClicked(!isClicked ? true : false) }} style={isClicked ? css : ncss}>
      <div className="card-inner" style={isClicked ? css : ncss}>
        <div className="card-front" id={slug}>
          <button className="fav-btn" id={slug} onClick={(e) => favTea(e)} style={{ color: color }}>
            ♥
          </button>
          <div className="img-wrapper">
            <img className="tea-img" src={img} alt={`img of ${name}`} />
          </div>
          <div className="text-wrapper">
            <h3>{name}</h3>
            <p className="tasting-notes">{description}</p>
          </div>
        </div>
        <div className="card-back">
          <p className="card-back-text" style={isClicked ? css : ncss}>{ingredients(targetTea)}</p>
          <p className="card-back-text" style={isClicked ? css : ncss}>{targetTea.caffeine}</p>
          <p className="card-back-text" style={isClicked ? css : ncss}>{targetTea.origin}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;