import "./Card.css";
import { Tea } from "../../utils/interface";
import { useState } from "react";
interface CardProp {
  img: string;
  name: string;
  slug: string;
  tea: Tea;
  description: string;
  addFavs: (newFav: Tea) => void;
  favs: Tea[];
}

function Card({ img, name, slug, tea, description, addFavs, favs }: CardProp) {
  const [color, setColor] = useState(
    favs.some((fav) => fav.slug === slug) ? "#895B1E" : "#B1AE91"
  );

  function favTea(e: React.MouseEvent<HTMLButtonElement>) {
    addFavs(tea);
    setColor(color === "#B1AE91" ? "#895B1E" : "#B1AE91");
  }

  return (
    <div className="card-cont">
      <div className="card-inner">
        <div className="card-front" id={slug}>
          <button
            className="fav-btn"
            id={slug}
            onClick={(e) => favTea(e)}
            style={{ color: color }}
          >
            ♥
          </button>
          <div className="img-wrapper">
            <img className="tea-img" src={img} alt={`img of ${name}`} />
          </div>
          <h3>{name}</h3>
          <p className="tasting-notes">{description}</p>
        </div>
        <div className="card-back"></div>
      </div>
    </div>
  );
}

export default Card;
