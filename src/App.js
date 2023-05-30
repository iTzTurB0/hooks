import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [titleFilter, setTitleFilter] = useState('');
  const [rateFilter, setRateFilter] = useState('');

  const handleTitleChange = (e) => {
    setTitleFilter(e.target.value);
  };

  const handleRateChange = (e) => {
    setRateFilter(e.target.value);
  };

  const handleAddMovie = () => {
    // Prompt the user to enter the movie details or implement your own form
    const title = prompt('Enter the movie title:');
    const description = prompt('Enter the movie description:');
    const posterURL = prompt('Enter the movie poster URL:');
    const rating = parseFloat(prompt('Enter the movie rating (1-10):'));

    // Create a new movie object
    const movie = { title, description, posterURL, rating };

    // Add the movie to the list
    setMovies([...movies, movie]);
  };

  const filteredMovies = movies.filter((movie) => {
    // Filter by title if titleFilter is not empty
    if (titleFilter && !movie.title.toLowerCase().includes(titleFilter.toLowerCase())) {
      return false;
    }

    // Filter by rating if rateFilter is not empty
    if (rateFilter && movie.rating < parseFloat(rateFilter)) {
      return false;
    }

    return true;
  });

  return (
    <div className="App">
      <h1>Movie App</h1>
      <Filter
        title={titleFilter}
        rate={rateFilter}
        onTitleChange={handleTitleChange}
        onRateChange={handleRateChange}
      />
      <button onClick={handleAddMovie}>Add Movie</button>
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;