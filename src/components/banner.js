import React from 'react';


const Banner=(props)=>{
    return(
        <div className='container-fluid bg-dark text-white p-5 banner'> 
            <h1 className='text-center m-2'>{props.heading}</h1>
            <p className='text-center m-2'>{props.note}</p>
        </div>
    )
};


export default Banner