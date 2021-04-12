import React from 'react'
import StarRating from '../StarRating/StarRating'
import './MovieCard.css'

const MovieCard = ({film}) => {
    return (
        <div className="movie-card">
            <StarRating rate={film.rating} />
           <img src={film.image} alt="starwars" />
           <h3>{film.name}</h3>
           <p>{film.date}</p>
           <p>This is a good film</p>
        </div>
    )
}

export default MovieCard
