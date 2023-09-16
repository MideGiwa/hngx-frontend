import React, { Component } from 'react';
import './App.css';
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
    axios
      .get('https://api.example.com/data')
      .then((response) => {
        this.setState({
          data: response.data,
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

    const { data, loading, error } = this.state;
    return (
      <div className="App">
        <MainPoster />

        <div>
          {loading ? (
            <p>Loading data...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <ul>
              {data.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

function MainPoster() {
  return (
    <div>
      <div class="bg-poster-image bg-center h-[600px] w-full flex flex-col lg:flex-row md:pl-10 lg:pl-20 place-items-center place-content-center lg:justify-between lg:pr-10">
        <div class="flex flex-col gap-3 text-white w-[310px]"><h2 class="text-3xl font-semibold">John Wick 3 :<br /> Parabellum</h2>
          <div class="flex space-between items-center gap-4">
            <div class="flex gap-3 items-center">
              <img alt="imdb" src="/images/imdb.svg" />
              <p class="text-[10px]">86.0 / 100</p>
            </div>
            <div class="flex gap-3 items-center"><img alt="imdb" src="/images/rotten-tomatoes.svg" />
              <p class="text-[10px]">97%</p>
            </div>
          </div>
          <p class="text-[14px] text-justify">John Wick is on the run after killing a member of the international assassins guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p><button type="button" class="bg-[#BE123C] py-2 max-w-[50%] rounded-sm flex justify-center items-center gap-3 hover:bg-[#BE564F] transition-all">
            <img alt="play" src="/images/Play.svg" />Watch Trailer</button>
        </div>
        <div class="hidden lg:flex lg:flex-col text-slate-200 cursor-pointer">
          <p class="hover:text-xl transition-all">1</p>
          <p class="hover:text-xl transition-all">2</p>
          <p class="hover:text-xl transition-all">3</p>
          <p class="hover:text-xl transition-all">4</p>
          <p class="hover:text-xl transition-all">5</p>
        </div>
      </div>
    </div>
  )
}

export default App;

