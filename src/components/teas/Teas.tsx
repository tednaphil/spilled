import './Teas.css';
import Card from '../card/Card';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchTea } from '../../apiCalls';

function Teas() {
    const category: string = useParams().category
    const [teaData , setTeaData] = useState()

    const teaCategory = teaData.filter((tea: Tea) => {
        //Tea category
        return (
            <Card img = {tea.img} name = {tea.name}/>
        )
    })
    interface Tea {name : string, img :string}
    interface Categories { categories: object[]}
    // let categoryTeas: Categories[] = teaData.filter(() => {

    // })
    
    
    function displayTeas() {
            
        
    }

    return (
        <>
        {displayTeas()}
        {teaCategory}
        </>
    )
}

export default Teas;