import './Teas.css';
import Card from '../card/Card';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchTea } from '../../apiCalls';
import { Tea } from '../../utils/interface';
import React from 'react';

interface Props {
    setIsRedirected: React.Dispatch<React.SetStateAction<boolean | undefined>>
}

function Teas({ setIsRedirected }: Props) {
    const category = useParams<string>().category
    const navigate = useNavigate()

    const [teas , setTeas] = useState<Tea[] | null>(null)
    const initialFavs: Tea[] = JSON.parse(sessionStorage.getItem("favs") || '[]');
    const [favs, setFavs] = useState<Tea[]>(initialFavs);

    useEffect(() => { 
        fetchData();
    }, [category])

    async function fetchData() {
        if(category === 'favorites') {
            return setTeas(favs)
        } else {
            const fetchedTeaData = await fetchTea();
            if(!fetchedTeaData) {
                navigate('..*', {replace: true})
            } else {
                setIsRedirected(false)
                const filteredTeaData = fetchedTeaData?.filter((tea: Tea) => tea.type === category);
                setTeas(filteredTeaData);
            }
        }
    }

    function addFavs(newFav: Tea ) {
        console.log(newFav)
        if(favs.includes(newFav)){
           setFavs(favs.filter(fav => {
                return fav.slug !== newFav.slug
            }))
        }else{
         setFavs([...favs, newFav])
        }
        console.log(favs)
    }

    useEffect(() => {
        sessionStorage.clear()
        sessionStorage.setItem("favs", JSON.stringify(favs));
        fetchData()
    }, [favs])

    const teaCards = teas?.map((tea: Tea) => {
        return (
            <Card
                tea={tea}
                img={tea.image}
                name={tea.name}
                slug={tea.slug}
                key={tea.slug}
                addFavs={addFavs}
            />
        )
    })

    return (
        <section className='cards-section'>
            {teaCards}
        </section>
    ) 
}

export default Teas;

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