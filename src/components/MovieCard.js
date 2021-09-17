import React from 'react'
import './Header.css'

function MovieCard({title,image,rating,describation}) {
    return (
        <div className='movie'> 
           <img src={image} alt=''/> 
            <div className='movie-info'>
               <h3>{title} </h3>
                <span>{rating}</span>
            </div>

            <div className='movie-details'>
                <h3>Describation</h3>
                <p>{describation}</p>
            </div>
        </div>
    )
}

export default MovieCard
