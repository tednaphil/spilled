import "./Card.css";
import { Tea } from "../../utils/interface";
import { useState } from "react";

interface CardProp {
  img: string;
  name: string;
  slug: string;
  tea: Tea;
  addFavs: (newFav: Tea) => void;
}

function Card({ img, name, slug, tea, addFavs }: CardProp) {
  const [color, setColor] = useState("#B1AE91");
  function favTea(e: React.MouseEvent<HTMLButtonElement>) {
    // console.log((e.target as HTMLButtonElement).getAttribute('id'))
    // console.log(tea)
    addFavs(tea);
    if (color !== "#B1AE91") {
      setColor("#B1AE91");
    } else {
      setColor("#895B1E");
    }
  }
  //

  return (
    <>
      <div className="card" id={slug}>
        <button className="fav-btn" id={slug} onClick={(e) => favTea(e)} style={{color:color}}>
          ♥
        </button>
        <div className="img-wrapper">
          <img className="tea-img" src={img} alt={`img of ${name}`} />
        </div>
        <h3>{name}</h3>
        <p className="tasting-notes">WOMPWOMPMWOMPWMPMWPD FMSPDF</p>
      </div>
    </>
  );
}

export default Card;
