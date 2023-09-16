import React, { Component } from 'react';
import './App.css';
import { Header } from '../components/header'
import MovieCard from '../components/movieCard';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData: [],
      loading: true,
      error: null,
    };
  }
  componentDidMount() {
    const apiKey = 'd047c3e43d0f41c87d146c12d0c3792d';
    axios
      .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
      .then((response) => {
        this.setState({
          movieData: response.data.results,
          loading: false,
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        this.setState({
          error: 'Error fetching data',
          loading: false,
        });
      });
  }

  render() {

    const { movieData, loading, error } = this.state;
    const moviesList = movieData.map((movie) => {
      <MovieCard movie={movie} />
    });
    return (
      <div className="App">
        <Header movies={movies} setMovies={setMovies} isSearched={isSearched} setIsSearched={setIsSearched} input={input} setInput={setInput} />

        <div id='movies'>
          <div><h1 id='text1' >Top Rated Movies</h1
          ></div>
          {loading ? (
            <p>Loading data...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : movieData.length === 0 ? (
            <p>No movies found.</p>
          ) : (
            <ul className='movies-list'>
              {movieData.slice(0, 10).map((movie) => {
                return <div className='movie-list-items'><MovieCard movie={movie} /></div>
              })}
            </ul>
          )}
        </div>

        <Footer />
      </div >
    );
  }
}



function MainPoster() {
  return (
    <div className='=section'>
      <div></div>
    </div>
  )
}

function Footer() {
  return (
    <div id="footer">
      <div className='socials'>
        <img src='facebook.svg' />
        <img src='instagram.svg' />
        <img src='twitter.svg' />
        <img src='youtube.svg' />
      </div>

      <div className="legal">
        <p>Conditions of Use</p>
        <p>Privacy Policy</p>
        <p>Press Room</p>
      </div>

      <div className='year'><p>2023 MovieBox by Mide Giwa</p></div>
    </div>
  )
}
export default App;