import './Error.css'
import React from 'react'
import spilledTea from "../../images/Coffee-Burst.svg";
import { useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
    isRedirected: boolean | any;
    setIsRedirected: React.Dispatch<React.SetStateAction<boolean | undefined>>
}

const Error: React.FC<Props> = ({ isRedirected, setIsRedirected }) => {
    // let location = useLocation().state
    // console.log(location)
    const navigate = useNavigate()

    useEffect(() => {
        setIsRedirected(true)
    }, [setIsRedirected])

    useEffect(() => {
       window.onload = () => {
        //    setIsRedirected(false)
           navigate('../home', {replace: true})
       }
    }, [navigate, setIsRedirected])

    console.log('error', isRedirected)

    return (
        <div className='error_wrapper'>
            <h1>Hey there</h1>
            <img src={spilledTea} alt='Cofee cup tipped over with liquid spilling out'/>
        </div>
    )
}

export default Error