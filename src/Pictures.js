import React from 'react';
import Picture from './Picture';
import './Pictures.css';

const baseImgUrl = "https://image.tmdb.org/t/p/original";

function Pictures({movies}) {
    return (
        <div className="boxx">
            {movies.map((movie)=>(
                <Picture 
                key={movie.id}
                src={`${baseImgUrl}${movie.poster_path}`} 
                alt={movie.name} 
                />
            ))}
        </div>
    )
}

export default Pictures
