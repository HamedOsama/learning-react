import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [err, setError] = useState(null)

  async function fetchMovies() {
    if (movies.length > 0)
      return;
    setIsLoading(true)
    try {
      const request = await fetch('https://first-hearth-357105-default-rtdb.firebaseio.com/movies.json')
      if (!request.ok)
        throw new Error('Something went wrong')
      const data = await request.json();
      const loadedMovies = [];
      console.log(data)
      for (const key in data)
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        })
      console.log(loadedMovies)
      // const transformedMovies = [].map(el => {
      //   return {
      //     id: el.episode_id,
      //     title: el.title,
      //     openingText: el.opening_crawl,
      //     releaseDate: el.release_date
      //   }
      // }) 
      setMovies(loadedMovies);
    } catch (e) {
      console.log(e)
      setError(e)
    }
    setIsLoading(false)
  }
  const AddMovieHandler = async (movie) => {
    const response = await fetch('https://first-hearth-357105-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json();
    console.log(data)
  }
  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={AddMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>No Movies Yet.</p>}
        {isLoading && <p>Loading....</p>}
        {err && <p>{err}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
