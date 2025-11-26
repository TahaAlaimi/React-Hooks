import MovieCard from "./MovieCard";

function MovieList({filtredMovies}) {
    return (
        <div className="row">
            {filtredMovies.map((card, index) => (
                <MovieCard key={index} card={card} />
            ))}
        </div>
    );
}

export default MovieList;