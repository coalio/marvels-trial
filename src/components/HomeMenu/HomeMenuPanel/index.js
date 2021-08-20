import React from "react";
import { Link } from "react-router-dom";

const HomeMenuPanel = () => {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <h1 className="Home-menu-item panel-title">Get started!</h1>
            </div>
            <div className="panel-body">
                <Link
                    to="/browse"
                    className="cornered-button cornered-button-light cornered-button-outline"
                >
                    <span className="innerFill">Let's go</span>
                </Link>
                <a
                    href="https://github.com/coalio/marvels-trial"
                    className="cornered-button cornered-button-light cornered-button-outline"
                >
                    <span className="innerFill">Source code</span>
                </a>
            </div>
        </div>
    );
};

export default HomeMenuPanel;
