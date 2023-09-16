import { useState } from "react";
import "./searchbar.scss";
import axios from "axios";

const apiKey = "af6502e937447032ba3ae4a03d480426";

const Searchbar = ({
    setMovies,
    isSearched,
    setIsSearched,
    input,
    setInput,
}) => {
    // const [input, setInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const [pending, setPending] = useState(false);

    const searchData = () => {
        setPending(true);
        new Promise((resolve) => setTimeout(resolve, 3000));
        try {
            axios
                .get(
                    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${input}`
                )
                .then((response) => {
                    setIsSearched(true);
                    setMovies(response.data.results.slice(0, 20));
                    setPending(false);
                });
        } catch (e) {
            console.log(e);
        }
    };

    const fetchData = (value) => {
        axios.get(
            "https://api.themoviedb.org/3/movie?api_key=af6502e937447032ba3ae4a03d480426"
        );
    };

    const handleChange = (value) => {
        setInput(value);
        // fetchData(value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        searchData();
    };
    console.log(input);

    if (pending) {
        return (
            <div
                style={{
                    width: "100vw",
                    height: "100vh",
                    position: "absolute",
                    top: "0",
                    left: "0",
                    bottom: "0",
                    // right: "0",
                    background: "white",
                    zIndex: "2000",
                    display: "grid",
                    placeItems: "center",
                }}
            >
                <img src="/assets/Ellipsis-1s-200px.svg" style={{ background: "none" }} alt="" />
            </div>
        );
    }

    return (
        <div className="input-wrapper">
            <form onSubmit={handleSearch}>
                <input
                    placeholder="What do you want to watch?"
                    value={input}
                    onChange={(e) => handleChange(e.target.value)}
                />
            </form>
            <SearchIcon />

            {/* <img src="./assets/Search.svg" alt="Search icon" /> */}
        </div>
    );
};

export default Searchbar;