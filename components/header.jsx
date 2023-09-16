import "./header.scss";
import Navbar from "./navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = ({
    movies,
    setMovies,
    isSearched,
    setIsSearched,
    input,
    setInput,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const numbers = ["1", "2", "3", "4", "5"];

    const poster_API = "https://image.tmdb.org/t/p/w500/";

    const { id, title, overview, vote_average, poster_path, popularity } =
        movies?.length > 0 && movies[currentIndex];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 5);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
        console.log(index);
        console.log(currentIndex);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            // Calculate the next index, looping back to 0 after the last item
            const nextIndex = (currentIndex + 1) % 5;
            setCurrentIndex(nextIndex);
        }, 5000); // Change the interval (in milliseconds) as desired

        // console.log(currentIndex);

        return () => {
            clearInterval(timer);
        };
    }, [currentIndex, movies]);

    return (
        <section
            style={{ height: isSearched ? "auto" : "100vh" }}
            className="hero-section"
        >
            {!isSearched ? (
                <div>
                    <div className="hero-backdrop"></div>
                    <img className="poster" src={poster_API + poster_path} alt="" />
                    <div className="hero-container">
                        <Navbar
                            setMovies={setMovies}
                            isSearched={isSearched}
                            setIsSearched={setIsSearched}
                            input={input}
                            setInput={setInput}
                        />
                        {movies.length > 0 && movies && (
                            <div className="hero">
                                <div className="description-box">
                                    <div className="heading">
                                        <h1>{title}</h1>
                                    </div>

                                    <div className="rating">
                                        <div className="imdb">
                                            <img src="/assets/IMDb.svg" alt="imdb logo" />
                                            <p>{vote_average * 10} / 100</p>
                                        </div>

                                        <div className="rotten-tomatoes">
                                            <img
                                                src="/assets/Tomato.svg"
                                                alt="Rotten Tomatoes Logo"
                                            />
                                            <p>{popularity.toFixed(1)} %</p>
                                        </div>
                                    </div>

                                    <div className="description">
                                        <p>{overview}</p>
                                    </div>

                                    <div className="watch-trailer">
                                        <button>
                                            <img src="/assets/Play.svg" alt="Play icon" />

                                            <Link to={`/movie/${id}`}>WATCH TRAILER</Link>
                                        </button>
                                    </div>
                                </div>
                                <div className="pagination">
                                    <div className="pagination-box">
                                        {/* <button onClick={nextSlide}>next</button> */}
                                        <div className="pagination-links">
                                            {numbers.map((movie, index) => (
                                                <div
                                                    key={index}
                                                    className={`pagination-link ${index === currentIndex ? "active" : ""
                                                        }`}
                                                    onClick={() => setCurrentIndex(index)}
                                                >
                                                    {index === currentIndex && (
                                                        <div className="animation start-link"></div>
                                                    )}
                                                    {movie}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div>
                    <Navbar
                        setMovies={setMovies}
                        isSearched={isSearched}
                        setIsSearched={setIsSearched}
                        input={input}
                        setInput={setInput}
                    />
                    {movies.length === 0 ? ( // Check if there are no search results
                        <h2 className="search-results">
                            No results found for <span>"{input}"</span>
                        </h2>
                    ) : (
                        <h2 className="search-results">
                            Here are the results for <span>"{input}"</span>
                        </h2>
                    )}
                </div>
            )}
        </section>
    );
};

export default Header;