import './Error.css'
import React from 'react'
import spilledTea from "../../images/Coffee-Burst.svg";

const Error: React.FC = () => {
    return (
        <div className='error_wrapper'>
            <img src={spilledTea} alt='Cofee cup tipped over with liquid spilling out'/>
        </div>
    )
}

export default Error