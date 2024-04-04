import './Card.css';

function Card(img: string, name: string) {

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