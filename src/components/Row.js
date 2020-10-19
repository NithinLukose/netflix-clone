import React from 'react'
import {imageBaseURL } from '../utils/fetchMovieDetails'
import '../styles/row.css'

function Row({movies,
    isFetching,
    rowTitle,
    fetchMovies,
    isLarge
}) {


   

    
    //console.log(movies)
    return (
        <div className="row">
            <h2 className="row__title">{rowTitle}</h2>
            <div className="row__movies">
                {movies.map(movie=><img className={`row__moviePoster ${isLarge && "row__moviePosterLarge"} `}
                 key={movie.id} 
                 src={`${imageBaseURL}${movie.poster_path}`}
                alt={movie.name||movie.original_title||movie.title}/>)}
            </div>
        </div>
    )
}

export default Row
