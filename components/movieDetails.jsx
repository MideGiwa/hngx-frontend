import React, { Component } from "react";
import axios from "axios";
import { Sidebar } from "./Sidebar";

const movie = {
    "adult": false,
    "backdrop_path": "/qqHQsStV6exghCM7zbObuYBiYxw.jpg",
    "belongs_to_collection": null,
    "budget": 350000,
    "genres": [
        {
            "id": 18,
            "name": "Drama"
        }
    ],
    "homepage": "",
    "id": 389,
    "imdb_id": "tt0050083",
    "original_language": "en",
    "original_title": "12 Angry Men",
    "overview": "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
    "popularity": 48.371,
    "poster_path": "/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg",
    "production_companies": [
        {
            "id": 60,
            "logo_path": "/1SEj4nyG3JPBSKBbFhtdcHRaIF9.png",
            "name": "United Artists",
            "origin_country": "US"
        },
        {
            "id": 10212,
            "logo_path": null,
            "name": "Orion-Nova Productions",
            "origin_country": ""
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "US",
            "name": "United States of America"
        }
    ],
    "release_date": "1957-04-10",
    "revenue": 1000000,
    "runtime": 97,
    "spoken_languages": [
        {
            "english_name": "English",
            "iso_639_1": "en",
            "name": "English"
        }
    ],
    "status": "Released",
    "tagline": "Life is in their hands. Death is on their minds.",
    "title": "12 Angry Men",
    "video": false,
    "vote_average": 8.54,
    "vote_count": 7620,
    "videos": {
        "results": [
            {
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "Knife Scene",
                "key": "4_q_IA6LeUw",
                "site": "YouTube",
                "size": 1080,
                "type": "Clip",
                "official": true,
                "published_at": "2023-04-21T20:00:01.000Z",
                "id": "64433c39ad87f70497cca2ae"
            },
            {
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "Official Trailer",
                "key": "TEN-2uTi2c0",
                "site": "YouTube",
                "size": 1080,
                "type": "Trailer",
                "official": true,
                "published_at": "2022-03-26T23:00:22.000Z",
                "id": "6335ed1a8c315900827742a6"
            },
            {
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "Three Reasons: 12 Angry Men",
                "key": "OvebOqneLIU",
                "published_at": "2011-11-22T17:21:00.000Z",
                "site": "YouTube",
                "size": 720,
                "type": "Featurette",
                "official": true,
                "id": "533ec653c3a36854480002f0"
            }
        ]
    }
}

class MovieDetails extends Component {
    constructor() {
        super();
        this.state = {
            movieData: [],
            movieCredits: [],
            loading: true,
            error: null,
        };
    }

    componentDidMount() {
        const movie_id = window.location.href.split('/')[4];
        const apiKey = 'd047c3e43d0f41c87d146c12d0c3792d';
        axios
            .get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}&append_to_response=videos`)
            .then((response) => {
                this.setState({
                    movieData: response.data,
                    loading: false,
                });
                console.log(response.data)
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                this.setState({
                    error: 'Error fetching data',
                    loading: false,
                });
            });

        // axios
        //     .get(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_Key=${apiKey}`)
        //     .then(function (response) {
        //         console.log(response.data);
        //     })
        //     .catch(function (error) {
        //         console.error(error);
        //     });
    }

    render() {
        const { movieData, loading, error } = this.state;

        return (
            <div>
                <Sidebar />
                {loading ? (
                    <p>Loading data...</p>
                ) : error ? (
                    <p>Error: {error}</p>
                ) : movieData.length === 0 ? (
                    <p>Failed to fetch movie data.</p>
                ) : (
                    <Details movie={this.state.movieData} />
                )}
            </div>
        )
    }
}

function Details({ movie }) {
    const { genres, title, vote_average, release_date, overview, runtime, vote_count } = movie;
    return (
        <div id="other">

            <div className="video-responsive">
                <iframe
                    data-testid="movie-poster"
                    src={`https://www.youtube.com/embed/${movie?.videos?.results[0]?.key}`}
                    title={movie?.title}
                    allowFullScreen
                    className="rounded-2xl h-[450px] w-full"
                />
            </div>
            <div id="movies-gist">
                <div className="damn">
                    <ul className="details-list">
                        <li>{title}</li>
                        <li>{release_date.split("-")[0]}.</li>
                        <li>{runtime} mins</li>
                        <li id='genre'> {genres[0].name} </li>
                    </ul>
                    <div className="rating" >
                        <p>{vote_average} | {vote_count}</p>
                    </div></div>

                <div className="overview">
                    <p>{overview}</p>
                </div>
            </div>
        </div>
    )
}
export default MovieDetails;