import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
    const { id, title, release_date, genre, poster_path, vote_average } = movie;
    const posterURL = 'https://image.tmdb.org/t/p/w500' + poster_path;
    return (

        <Link to={`/movies/${id}`}>
            <div className="movie-card" >
                <img src={posterURL} alt={title} className="movie-poster" data-testid="movie-poster" />
                <div className="movie-details">
                    <p className='movie-release-date' data-testid="movie-release-date">{release_date.split("-")[0]}</p>
                    <h2 className="movie-title" data-testid="movie-title" >{title}</h2>
                    <div className='rating'><img src='imdb.svg' /><p>{vote_average} / 10</p></div>

                    {/* <p><strong>Genre:</strong> {genre}</p> */}
                </div>
            </div>
        </Link>
    );
}

export default MovieCard;

