import React from 'react'

function MovieCard({ movie }) {

    return (
        <div className='card'>
            <img className='card--image'
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + ' poster'}
            />
            <div className='card--content'>
                <h3 className='card--title'>{movie.title}</h3>
                <p><small>Realease Date: {movie.release_date}</small></p>
                <p><small>Rating: {Math.floor(movie.vote_average)} / 10</small></p>
                <p className='card--desc'>{movie.overview}</p>
            </div>
        </div>
    )
}

export default MovieCard
