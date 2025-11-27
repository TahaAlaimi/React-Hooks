import React from 'react';
import { Link } from 'react-router-dom';

function MovieList({ filtredMovies }) {
  return (
    <div className="movie-grid">
      {filtredMovies.map((movie, index) => (
        <Link 
          to={`/movie/${encodeURIComponent(movie.title)}`} 
          key={index} 
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div className="card">
            <img src={movie.imageUrl} alt={movie.title} className="card-img-top" />
            <div className="card-body">
              <h5>{movie.title}</h5>
              <p className="card-rate">⭐ {movie.rate}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default MovieList;
