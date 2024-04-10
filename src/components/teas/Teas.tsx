import './Teas.css';
import Card from '../card/Card';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchTea } from '../../apiCalls';
import { Tea } from '../../utils/interface';
import multiTeas from '../../images/multi-teas.jpg'



function Teas() {

    const navigate = useNavigate()

    const initialFavs: Tea[] = JSON.parse(sessionStorage.getItem("favs") || '[]');
    const category = useParams<string>().category

    const [teas, setTeas] = useState<Tea[] | null>(null)
    const [favs, setFavs] = useState<Tea[]>(initialFavs);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        fetchData();
    }, [category])

    async function fetchData() {
        if (category === 'favorites') {
            return setTeas(favs)
        } else {
            try {
                const fetchedTeaData = await fetchTea()
                filterTeas(fetchedTeaData)
            } catch(error: any) {
                setError(`There was a problem - ${error.message}`)
            }
        }
    }

    function filterTeas(fetchedTeaData: any) {
        const filteredTeaData = fetchedTeaData?.filter((tea: Tea) => tea.type === category)
        !filteredTeaData.length ? navigate('*', { replace: true }) : organizeTeas(filteredTeaData);
    }

    function organizeTeas(data: Tea[]) {
        const index = data.findIndex(d => d.name === 'Black Tea' || d.name === 'Green Tea'
            || d.name === 'Wulong (oolong) Tea' || d.name === 'White Tea'
        )
        if(index !== -1) {
            data.splice(index, 1)
        }
        data.forEach((d) => {
            if(d.image.includes('herokuapp')) {
                d.image = multiTeas
            }
        })

        setTeas(data);
    }

    function addFavs(newFav: Tea) {
        console.log(newFav)
        if (favs.some(fav => fav.slug === newFav.slug)) {
            setFavs(favs.filter(fav => {
                return fav.slug !== newFav.slug
            }))
        } else {
            setFavs([...favs, newFav])
        }
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
                description={tea.tasteDescription}
                addFavs={addFavs}
                favs={favs}
            />
        )
    })

    const catHeader = `${category?.split('')[0].toUpperCase()}${category?.slice(1)}`

    const noFaves = (): boolean => {
        if (category === 'favorites' && !favs.length) {
            return true
        } else {
            return false
        }
    }

    return (
        <>
        <h2 className='cat-header'>{catHeader}</h2>
        { error && <>
            <h3 className='error-message'>Uh oh!</h3>
            <p className='error-message'>{error}</p>
        </>}
        { noFaves() && <>
            <p className="no-favs">You don't have any favorites - go find some!</p>
            <Link className="home-link" id="no-favs-link" to="/">Go Home</Link>
        </>}
        <section className='cards-section'>
            {teaCards}
        </section>
        </>
    )
}

export default Teas;
