import "./Card.css";
import { Tea } from "../../utils/interface";
import { useState } from "react";
import { fetchSingleTea } from "../../apiCalls";
import unFav from '../../images/remove-icon.svg'
import favInactive from '../../images/heart-inactive.svg'
import favActive from '../../images/heart-active.svg'
import { useLocation } from "react-router-dom";
interface CardProp {
  img: string;
  name: string;
  slug: string;
  tea: Tea;
  description: string;
  addFavs: (newFav: Tea) => void;
  favs: Tea[];
}

function Card({ img, name, slug, tea, description, addFavs }: CardProp) {
  
  let location = useLocation().pathname
  const [targetTea, setTargetTea] = useState<any>({})
  const [cardIsClicked, setCardIsClicked] = useState<boolean>(false)
  const [heartIsClicked, setHeartIsClicked] = useState<boolean>(false)

  const css = {
    transform: 'rotateY(180deg)',
  }

  const ncss = {
    transform: 'rotateY(0deg)'
  }


  function favTea(e: React.MouseEvent<HTMLButtonElement>) {
    addFavs(tea);
    setHeartIsClicked(!heartIsClicked ? true : false)
  }

  async function fetchTea(e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement> | any): Promise<any> {
    if( e.type === 'click' || e.key === 'Enter' || e.key === ' ') {
      let tea = await fetchSingleTea(slug)
      let target = tea[0]
      setTargetTea(target) 
      setCardIsClicked(!cardIsClicked ? true : false)
    } else {
      setCardIsClicked(false)
    }
  }
  console.log(targetTea)

  function ingredients(tea: any): string {
    let teaReturn: string;
    tea.mainIngredients ? teaReturn = tea.mainIngredients : teaReturn = ' ';
    return teaReturn
  }

  return (
    <div className="card-wrapper">
  {location !== '/tea/favorites' ? 
      <button className="fav-btn" id={`${slug}-favorite`} onClick={(e) => favTea(e)}>
        <img src={heartIsClicked ? favActive : favInactive} alt={heartIsClicked ? 'favorite active' : 'favorite inactive'} className="unfav-btn" aria-label='favorite' role="button"/>
      </button> :
      <button className="fav-btn" id={`${slug}-unfavorite`} onClick={(e) => favTea(e)}>
        <img src={unFav} alt='unfavorite' className="unfav-btn" aria-label='unfavorite'/>
      </button>
}
      <div className="card-cont" id={`${slug}-tea`} role='button' aria-label={`${slug} tea Details`} onClick={(e) => { fetchTea(e)}} style={cardIsClicked ? css : ncss} onKeyDownCapture={(e) => { fetchTea(e) }} tabIndex={0}>
        <div className="card-inner" style={cardIsClicked ? css : ncss}>
          <div className="card-front" >
            <div className="img-wrapper">
              <img className="tea-img" src={img} alt={`img of ${name}`} />
            </div>
            <div className="text-wrapper">
              <h3>{name}</h3>
              <p className="tasting-notes">{description}</p>
            </div>
          </div>
          <div className="card-back">
            <dl className='card-back-dl' style={cardIsClicked ? css : ncss}>
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
