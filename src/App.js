import React, { useState } from 'react';
import Search from "./component/Search/Search.js";
import MovieList from "./component/MovieList/MovieList";
import { moviesData } from "./Data.js"
import './App.css';
import AddMovie from './component/AddMovie/AddMovie.js';

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchRate, setSearchRate] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event)=>setSearchValue(event.target.value);
  const handleSearchRate = (newRate)=>setSearchRate(newRate);

  const addMovie= (newMovie) => setMovies([...movies, newMovie]);

  return (
    <div className="App">
      <Search 
      searchValue={searchValue} 
      handleSearch={handleSearch} 
      searchRate={searchRate}
      handleSearchRate={handleSearchRate}
      />

      <MovieList movieList={movies.filter(
          (movie) =>movie.name.toLowerCase().includes(searchValue.toLowerCase().trim()) 
          && movie.rating >= searchRate
        )}/>
      <AddMovie handleAdd={addMovie} />
    </div>
  );
}

export default App;
