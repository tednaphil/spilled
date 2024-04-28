import './Teas.css';
import Card from '../card/Card';
import spilledTea from "../../images/Coffee-Burst.svg";
import { useParams, useNavigate, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchTea } from '../../apiCalls';
import { Tea } from '../../utils/interface';
import multiTeas from '../../images/multi-teas.jpg';

function Teas() {

    const navigate = useNavigate()

    const initialFavs: Tea[] = JSON.parse(sessionStorage.getItem("favs") || '[]');
    const category = useParams<string>().category
    const location = useLocation();

    const [teas, setTeas] = useState<Tea[] | null>(null);
    const [favs, setFavs] = useState<Tea[]>(initialFavs);
    const [error, setError] = useState<string>('');
    const [favNames, setFavNames] = useState<Array<string>>([]);
    const [searchInput, setSearchInput] = useState<string>('');
    const [noTea, setNoTea] = useState<string>('');
    const [allTea, setAllTea] = useState<Tea[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setError('');
        setNoTea('');
        setSearchInput('');
        fetchData();
        setTimeout(() => {
            setLoading(false)
         }, 3500)
    }, [category])

    async function fetchData() {
        if (category === 'favorites') {
            return setTeas(favs)
        } else {
            try {
                const fetchedTeaData = await fetchTea();

                if(category === 'all') {
                    organizeTeas(fetchedTeaData)
                } else {
                    filterTeas(fetchedTeaData)
                }
            } catch(error: any) {
                setError(`There was a problem - ${error.message}`)
                setLoading(false)
            }
        }
    }

    function filterTeas(fetchedTeaData: any) {
        const filteredTeaData = fetchedTeaData?.filter((tea: Tea) => tea.type === category)
        !filteredTeaData.length ? navigate('*', { replace: true }) : organizeTeas(filteredTeaData);
    }

    function organizeTeas(data: Tea[]) {
        const teasToExclude = ['Black Tea', 'Green Tea', 'Wulong (oolong) Tea', 'White Tea'];
        const newData = data.filter((d) => !teasToExclude.includes(d.name))

        newData.forEach((d) => {
            if(d.image.includes('herokuapp')) {
                d.image = multiTeas
            }
        })
        newData.sort((a, b) => a.name.localeCompare(b.name))
        setTeas(newData);
        if(category === 'all') {
            setAllTea(newData)
        }
    }

    function addFavs(newFav: Tea) {
        if (favs.some(fav => fav.slug === newFav.slug)) {
            setFavs(favs.filter(fav => {
                return fav.slug !== newFav.slug
            })
        )
        } else {
            setFavs([...favs, newFav])
        }
    }
    
    useEffect(() => {
        setNoTea('');
        sessionStorage.clear()
        sessionStorage.setItem("favs", JSON.stringify(favs));
        const allFavs: string | null | Tea[] = sessionStorage.getItem("favs") || '{}'
        const parsedFavs = JSON.parse(allFavs)
        const favNames1 = parsedFavs.map((f: Tea) => {
            return f.name
        })
        setFavNames(favNames1)
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
                favNames={favNames}
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

    useEffect(() => {
        setNoTea('');

        if(searchInput.trim().length > 0) {
            const searchTeas: Tea[] | undefined = allTea?.filter((t) => t.name.toLowerCase().includes(searchInput))
            if(searchTeas && searchTeas.length > 0) {
                setTeas(searchTeas)
            } else {
                setNoTea('There are no teas to display...')
                setTeas(null)
            }
        } else if(location.pathname === '/tea/all'){
            setTeas(allTea)
        }
    }, [searchInput])

    return (
        <>
        {loading && <article className='loading-screen'>
                <h2 className='loading-message'>Loading...</h2>
                {/* <img src='https://media1.giphy.com/media/L3KJjjqtoyzCuIVF7e/giphy.gif?cid=6c09b952sgbkkl6c3urr75ui5yb137czyu89lvrtko24wpdw&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s' alt='steaming teacup'/> */}
                <img className='loading-image'src='https://media4.giphy.com/media/kDlE0Am9MIOh1aNsjZ/source.gif' alt='boiling teapot'/>
            </article>}
        <h2 className='cat-header'>{catHeader}</h2>
        { category === 'all' &&
            <form className='form-search'>
                <label htmlFor='search'>Search</label>
                <input 
                    type='text'
                    id='search'
                    name='search'
                    value={searchInput}
                    placeholder='Type to search...'
                    onChange={e => setSearchInput(e.target.value)}
                />
            </form>
        }
        { noTea && <h3 className='no-favs'>{noTea}</h3>}
        { error && 
            <section className="api-error">
                <img id='error-image' src={spilledTea} alt='Tea cup tipped over with liquid spilling out' />
                <h3 className='error-message'>Uh oh!</h3>
                <p className='error-message'>{error}</p>
            </section>
        }
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
