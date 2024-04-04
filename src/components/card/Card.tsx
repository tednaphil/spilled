import './Card.css';


interface CardProp {
    img:string,
    name:string
}

function Card({img,name}: CardProp) {

    return (
        <>
        <div className='card'>
            <img src = {img} alt = {`img of ${name}`}/>
            <h3>{name}</h3>
        </div>
        </>
    )
}

export default Card;