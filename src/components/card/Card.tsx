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
    addFavs(tea);
    if (color !== "#B1AE91") {
      setColor("#B1AE91");
    } else {
      setColor("#895B1E");
    }
  }

  return (   
    <div className="card-cont" >
      <div className="card-inner">
        <div className="card-front" id={slug}>
          <button className="fav-btn" id={slug} onClick={(e) => favTea(e)} style={{ color: color }}>
            ♥
          </button>
          <div className="img-wrapper">
            <img className="tea-img" src={img} alt={`img of ${name}`} />
          </div>
          <h3>{name}</h3>
          <p className="tasting-notes">WOMPWOMPMWOMPWMPMWPD FMSPDF</p>
        </div>
        <div className="card-back">
    
        </div>
      </div>
    </div>
  );
}

export default Card;
/*
{
        "_id": "63092102a643c85c74b00e73",
        "name": "Darjeeling Tea",
        "slug": "darjeeling",
        "altnames": "",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Darjeeling%2C_India%2C_Darjeeling_tea_in_variety%2C_Black_tea.jpg/1920px-Darjeeling%2C_India%2C_Darjeeling_tea_in_variety%2C_Black_tea.jpg?20210606141050",
        "origin": "India",
        "type": "black",
        "caffeine": "50-120mg",
        "caffeineLevel": "very high",
        "decription": "Darjeeling tea is a black tea that is grown and processed in the Darjeeling or Kalimpong Districts in West Bengal, also among the only teas in the world with a Geographical Indication trademark",
        "sources": [
            "https://en.wikipedia.org/wiki/Darjeeling_tea",
            "https://www.thespruceeats.com/tea-flushes-in-darjeeling-765194",
            "https://www.seriouseats.com/why-you-should-drink-more-darjeeling-tea-what-is-first-flush"
        ],
        "colorDescription": "ranging from golden yellow to orange to deep red.",
        "tasteDescription": "musky-sweet tasting notes similar to muscat wine"
    }
 */