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

  const [color, setColor] = useState("#B1AE91");

  function favTea(e: React.MouseEvent<HTMLButtonElement>) {
    addFavs(tea);
    if (color !== "#B1AE91") {
      setColor("#B1AE91");
    } else {
      setColor("#895B1E");
    }
  }

  async function fetchTea(e: React.MouseEvent<HTMLImageElement>): Promise<any> {
    let tea = await fetchSingleTea(slug)
    console.log(tea[0].mainIngredients)
  }

  return (   
    <div className="card-cont" >
      <div className="card-inner">
        <div className="card-front" id={slug}>
          <button className="fav-btn" id={slug} onClick={(e) => favTea(e)} style={{ color: color }}>
            ♥
          </button>
          <div className="img-wrapper">
            <img className="tea-img" src={img} alt={`img of ${name}`} onClick={(e) => fetchTea(e)}/>
          </div>
          <h3>{name}</h3>
          <p className="tasting-notes">{description}</p>
        </div>
        <div className="card-back">
    
        </div>
      </div>
    </div>
  );
}

export default Card;