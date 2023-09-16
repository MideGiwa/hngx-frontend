import React from "react";

export function Sidebar() {
    const activeStyle = {
        textDecoration: "none",
        color: "#BE123C",
        backgroundColor: 'rgba(190, 18, 60, 0.7)',
        fontWeight: 'bold',
    };

    const isActive = false;
    return (
        <section id='drawer'>
            <div className="logo">
                <img src="tv.svg" /> <h1>MovieBox</h1>
            </div>

            {/* Home */}
            <div className='drawer--items' style={isActive ? activeStyle : null}>
                <div className="op"><img src='home.svg' /> <span>Home</span></div>
            </div>

            {/* Movies */}
            <div className='drawer--items' style={isActive ? activeStyle : null}>
                <div className="op"><img src='movie_projector.svg' /> <span>Movies</span></div>
            </div>

            {/* TV Shows */}
            <div className='drawer--items' style={isActive ? activeStyle : null}>
                <div className="op"><img src='tv_shows.png' /> <span>TV Shows</span></div>
            </div>

            {/* Upcoming */}
            <div className='drawer--items' style={isActive ? activeStyle : null}>
                <div className="op"><img src='calender.svg' /> <span>Upcoming</span></div>
            </div>

            {/* Play Card */}
            <div className='drawer--items' style={isActive ? activeStyle : null}>
                <div className="play-card">
                    <h2>Play movie quizzes and earn free tickets.</h2>
                    <h5>50k people are playing now.</h5>
                    <div className="start-playing"></div>
                </div>
            </div>

            {/* Logout */}
            <div className='drawer--items' style={isActive ? activeStyle : null}>
                <div className="op"><img src='logout.svg' /> <span>Logout</span></div>
            </div>
        </section>
    );
}
