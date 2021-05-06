import React from 'react';
import Picture from './Picture';
import './Pictures.css';

const baseImgUrl = "https://image.tmdb.org/t/p/original";


function Pictures({movies,refmovies,setRefMovies,disable,setDisable}) {
    
    return (
        <div className="boxx">
            {movies.map((movie)=>(
                <Picture 
                key={movie.id}
                src={`${baseImgUrl}${movie.poster_path}`} 
                alt={movie.name} 
                movie={movie}
                refmovies={refmovies}
                setRefMovies={setRefMovies}
                disable={disable}
                setDisable={setDisable}
                />
            ))}
        </div>
    )
}

export default Pictures
