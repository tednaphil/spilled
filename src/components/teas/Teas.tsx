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

    const navigate = useNavigate()

    const initialFavs: Tea[] = JSON.parse(sessionStorage.getItem("favs") || '[]');
    const category = useParams<string>().category

    const [teas, setTeas] = useState<Tea[] | null>(null)
    const [favs, setFavs] = useState<Tea[]>(initialFavs);

    useEffect(() => {
        fetchData();
    }, [category])

    async function fetchData() {
        if (category === 'favorites') {
            return setTeas(favs)
        } else {
            const fetchedTeaData = await fetchTea();
            if (!fetchedTeaData) {
                navigate('*', { replace: true })
            } else {
                setIsRedirected(false)
                filterTeas(fetchedTeaData)
            }
        }
    }

    function filterTeas(fetchedTeaData: any) {
        const filteredTeaData = fetchedTeaData?.filter((tea: Tea) => tea.type === category)
        !filteredTeaData.length ? navigate('*', { replace: true }) : setTeas(filteredTeaData);
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
                addFavs={addFavs}
            />
        )
    })

    return (
        <>
            <h2>{category}</h2>
            <section className='cards-section'>
                {teaCards}
            </section>
        </>
    )
}

export default Teas;
