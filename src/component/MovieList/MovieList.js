import React from 'react'
import MovieCard from '../MovieCard/MovieCard.js'
import './MovieList.css'

const MovieList = ({movieList}) => {
    if (Array.isArray(movieList) && movieList.length) {
        return (
          <div className="movie-list">
            {movieList.map((movie) => (
              <MovieCard film={movie} key={movie.id} />
            ))}
          </div>
        );
      } else {
        return (
          <div className="movie-list">
            <h1>Oups , there is no result mohamed:please try again</h1>
          </div>
        );
      }
    };

export default MovieList
