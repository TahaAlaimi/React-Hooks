import { useParams, Link } from 'react-router-dom';

function MovieDescription({ movies }) {
  const { title } = useParams();
  const movie = movies.find(m => m.title === decodeURIComponent(title));

  if (!movie) return <p>Movie not found!</p>;

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', textAlign: 'center', color: 'white' }}>
      <h2>{movie.title}</h2>
      <p style={{ margin: '20px 0' }}>{movie.text}</p>
      <p>Rating: ⭐ {movie.rate}</p>
      <div style={{ margin: '30px 0' }}>
        <iframe
          width="100%"
          height="400"
          src={movie.trailer}
          title={movie.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Link to="/">
        <button className="btn btn-primary">Back to Home</button>
      </Link>
    </div>
  );
}

export default MovieDescription;
