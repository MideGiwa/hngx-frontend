import Searchbar from "./searchbar";
import "./navbar.scss";

const navbar = ({ setMovies, isSearched, setIsSearched, input, setInput }) => {
    return (
        <nav>
            <div
                style={{ background: isSearched ? "black" : "none" }}
                className="moviebox-navbar"
            >
                <div className="logo">
                    <a href="/">
                        <img src="/assets/Logo-tv.svg" alt="MovieBox Logo" />
                        <p>MovieBox</p>
                    </a>
                </div>

                <div className="search-bar">
                    <Searchbar
                        setMovies={setMovies}
                        isSearched={isSearched}
                        setIsSearched={setIsSearched}
                        input={input} setInput={setInput}
                    />
                </div>

                <div className="menu">
                    <p className="sign-in">Sign in</p>
                    <div className="menu-icon">
                        <DragHandleIcon />
                        {/* <img src="./assets/Menu.svg" alt="hamburger menu icon" /> */}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default navbar;
