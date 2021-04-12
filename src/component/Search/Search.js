import React from 'react';
import StarRating from '../StarRating/StarRating';
import './Search.css';

const search = ({handleSearch,searchValue,handleSearchRate,searchRate}) => {
    return (
        <div className="header-container">
            <h1>MovieApp</h1>
            <div className="search-container">
                <input type="text" value={searchValue} onChange={handleSearch}></input>
                <StarRating rate={searchRate} handleRate={handleSearchRate} />
            </div>
        </div>
    )
}

export default search
