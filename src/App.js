import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieDescription from './components/MovieDescription';


function App() {
  const cards = [
    { title: 'I Am Legend', rate: 5, text: 'I Am Legend...', imageUrl: './iamlegend.jpg', trailer: "https://www.youtube.com/embed/dtKMEAXyPkg?si=_JNJZygnBKcoEP0o"},
    { title: '28 Days Later', rate: 3, text: '28 Days Later...', imageUrl: './28dayslater.jpg', trailer: "https://www.youtube.com/embed/mWEhfF27O0c?si=IFd8fRwBKx62RWFO"},
    { title: 'Resident Evil', rate: 4.5, text: 'Resident Evil...', imageUrl: './Residentevil.jpg', trailer: "https://www.youtube.com/embed/HhBAIDHvRTc?si=cQHRKmXLxW0z61Js"},
    { title: 'Requiem For a Dream', rate: 4, text: 'Requiem For a Dream...', imageUrl: './foradream.jpg', trailer: "https://www.youtube.com/embed/QBwzN4v1vA0?si=l6mH045VF3UX9uFl"},
    { title: 'Leaving Las Vegas', rate: 3.5, text: 'Leaving Las Vegas...', imageUrl: './vegas.jpg', trailer: "https://www.youtube.com/embed/O4HrGa2-RLc?si=4ig6fhS_Fm7ZUuHj"},
  ];

  const [searchTitle, setSearchTitle] = useState('');
  const [minRate, setMinRate] = useState(0);
  const [movies, setMovies] = useState(cards);

  const addMovie = (newMovie) => {
    if (newMovie.title.trim() !== "" && newMovie.text.trim() !== "" && newMovie.imageUrl.trim() !== "" && newMovie.rate > 0) {
      setMovies([...movies, newMovie]);
    }
  };

  const filtredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
    movie.rate >= minRate
  );

  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={
          <div className="card-container">
            <h1>Watch Now!</h1>
            <Filter searchTitle={searchTitle} setSearchTitle={setSearchTitle} minRate={minRate} setMinRate={setMinRate} />
            <AddMovie addMovie={addMovie} />
            <MovieList filtredMovies={filtredMovies} />
          </div>
        } />

        {/* Movie Description Page */}
        <Route path="/movie/:title" element={<MovieDescription movies={movies} />} />
      </Routes>
    </Router>
  );
}
export default App;