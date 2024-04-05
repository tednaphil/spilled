import './Card.css';
import { Tea } from '../../interface';


interface CardProp {
    img:string,
    name:string,
    slug:string,
    tea:Tea,
    addFavs: (newFav: Tea) => void
}

function Card({img, name, slug, tea, addFavs}: CardProp) {
    function favTea(e: React.MouseEvent<HTMLButtonElement>) {
        // console.log((e.target as HTMLButtonElement).getAttribute('id'))
        // console.log(tea)
        addFavs(tea);
    }


    return (
        <>
        <div className='card' id={slug}>
            <div className='name-wrapper'>
                <h3>{name}</h3>
                <button className='fav-btn' id={slug}
                onClick={(e) => favTea(e)}>Fav</button>
            </div>
            <div className='img-wrapper'>
                <img className='tea-img' src = {img} alt = {`img of ${name}`}/>
            </div>
        </div>
        </>
    )
}

export default Card;