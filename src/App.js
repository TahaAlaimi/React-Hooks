import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';

function App() {
  const cards = [
    { title: 'I Am Legend', rate: 5, text: 'I Am Legend is a 1954 science-fiction novel by Richard Matheson and a 2007 film adaptation starring Will Smith. Both tell the story of Robert Neville, who appears to be the last human survivor after a plague transforms most of humanity into nocturnal, vampiric mutants. The plots revolve around his struggle for survival in a desolate world and his desperate attempts to find a cure while fending off the infected.', imageUrl: './iamlegend.jpg' },
    { title: '28 Days Later', rate: 3, text: '28 Days Later is a 2002 British post-apocalyptic horror film about a man who wakes from a coma to find London deserted after a contagious "Rage Virus" has wiped out most of the population.', imageUrl: './28dayslater.jpg' },
    { title: 'Resident Evil', rate: 4.5, text: 'Resident Evil (2002) is an action-horror film about an elite military team that enters a secret underground facility called "The Hive," which is owned by the Umbrella Corporation, after the T-virus is released and turns the staff into zombies.', imageUrl: './Residentevil.jpg' },
    { title: 'Requiem For a Dream', rate: 4, text: 'Requiem For a Dream is a 2000 psychological drama film about four interconnected people whose drug-fueled dreams of happiness and success descend into a desperate, destructive reality.', imageUrl: './foradream.jpg' },
    { title: 'Leaving Las Vegas', rate: 3.5, text: 'Leaving Las Vegas is a 1995 romantic drama film about a self-destructive alcoholic screenwriter, Ben Sanderson (Nicolas Cage), who moves to Las Vegas to drink himself to death.', imageUrl: './vegas.jpg' },
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
    <div className="card-container">
      <h1>Watch Now!</h1>

      {/* Filter */}
      <Filter searchTitle={searchTitle} setSearchTitle={setSearchTitle} minRate={minRate} setMinRate={setMinRate} />

      {/* Add Movie */}
      <AddMovie addMovie={addMovie} />

      {/* MovieList */}
      <MovieList filtredMovies={filtredMovies} />
    </div>
  );
}

export default App;
