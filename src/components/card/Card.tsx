import "./Card.css";
import { Tea } from "../../utils/interface";
import { useState, useEffect } from "react";
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
  favNames: string[]
}


function Card({ img, name, slug, tea, description, addFavs, favNames }: CardProp) {

  let location = useLocation().pathname

  const [targetTea, setTargetTea] = useState<any>({})
  const [cardIsClicked, setCardIsClicked] = useState<boolean>(false)
  const [isFavorited, setisFavorited] = useState<boolean>(false)

  const css = {
    transform: 'rotateY(180deg)',
  }

  const ncss = {
    transform: 'rotateY(0deg)'
  }

  useEffect(() => {
    favNames.forEach((fav) => {
      if (fav === name) {
        setisFavorited(true)
        console.log('fav', fav)
        console.log('name', name)
      }
    })
  }, [])


  function favTea(e: React.MouseEvent<HTMLButtonElement>) {
    addFavs(tea);
    setisFavorited(!isFavorited ? true : false)
  }

  async function fetchTea(e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement> | any): Promise<any> {
    console.log(e.key)
    if (e.type === 'click' || e.key === 'Enter' || e.key === ' ') {
      let tea = await fetchSingleTea(slug)
      let target = tea[0]
      setTargetTea(target)
      setCardIsClicked(!cardIsClicked ? true : false)
    } else {
      setCardIsClicked(false)
    }
  }

  function ingredients(tea: any): string {
    let teaReturn: string;
    tea.mainIngredients ? teaReturn = tea.mainIngredients : teaReturn = ' ';
    return teaReturn
  }

  return (
    <div className="card-wrapper">
      {location !== '/tea/favorites' ?
        <button className="fav-btn" id={`${slug}-favorite`} onClick={(e) => favTea(e)}>
          <img src={isFavorited ? favActive : favInactive} alt={isFavorited ? 'favorite active' : 'favorite inactive'} className="unfav-btn" aria-label='favorite' role="button" />
        </button> :
        <button className="fav-btn" id={`${slug}-unfavorite`} onClick={(e) => favTea(e)}>
          <img src={unFav} alt='unfavorite' className="unfav-btn" aria-label='unfavorite' />
        </button>
      }
      <div className="card-cont" role='button' aria-label={`${slug} tea Details`} onClick={(e) => { fetchTea(e) }} style={cardIsClicked ? css : ncss} onKeyDownCapture={(e) => { fetchTea(e) }} tabIndex={0}>
        <div className="card-inner" style={cardIsClicked ? css : ncss}>
          <div className="card-front" id={`${slug}-tea`}>
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
