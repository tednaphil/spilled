import './Error.css'
import React from 'react'
import spilledTea from "../../images/Coffee-Burst.svg";
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

interface Props {
    isRedirected: boolean | any;
    setIsRedirected: React.Dispatch<React.SetStateAction<boolean | undefined>>;
    // error: string;
}

const Error: React.FC<Props> = ({ isRedirected, setIsRedirected }) => {

const navigate = useNavigate()

  useEffect(() => {
    setIsRedirected(true)
  }, [setIsRedirected])

  useEffect(() => {
    window.onbeforeunload = () => {
        //    setIsRedirected(false)
        if (isRedirected === true) {
        navigate('../', { replace: true })
        }
    }
  }, [isRedirected, navigate, setIsRedirected])

  return (
    <div className='error_wrapper'>
      <img id='error-image' src={spilledTea} alt='Tea cup tipped over with liquid spilling out' />
      <h1>Uh oh!</h1>
      <p className='error-message'>We couldn't find that page</p>
      <Link className='home-link'to='/'>Go back home</Link>
    </div>
  )
}

export default Error